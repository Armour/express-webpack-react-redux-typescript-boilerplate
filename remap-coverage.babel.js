import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import loadCoverage from 'remap-istanbul/lib/loadCoverage';
import remap from 'remap-istanbul/lib/remap';
import writeReport from 'remap-istanbul/lib/writeReport';

const isWindows = process.platform === 'win32';

const coverageFile = './coverage/coverage-final.json';
const updatedCoverageFile = './coverage/coverage-updated.json';
const originalCoverage = fs.readFileSync(coverageFile, 'utf8');

// jest does not correctly escape path to file used as key, force replace it
// https://github.com/kwonoj/jest-typescript-coverage/blob/master/remap_coverage.js
const originalCoverageJson = JSON.parse(isWindows ? originalCoverage.replace(/\\/g, '\\\\') : originalCoverage);
const updateCoverageJson = {};

_.forIn(originalCoverageJson, (value, key) => {
  const updatedKey = key.replace(path.normalize('/frontend/'), path.normalize('/build/frontend/')).replace('.tsx', '.jsx');
  updateCoverageJson[updatedKey] = value;
});

fs.writeFileSync(updatedCoverageFile, JSON.stringify(updateCoverageJson));

// Remapp coverage files using sourcemap for better typescript file coverage display
const collector = remap(loadCoverage(updatedCoverageFile));
writeReport(collector, 'json', {}, './coverage/coverage-final.json');
writeReport(collector, 'lcovonly', {}, './coverage/lcov.info');
writeReport(collector, 'html', {}, './coverage/lcov-report');
writeReport(collector, 'clover', {}, './coverage/clover.xml');
