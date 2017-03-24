# This patch is used to fix the broken immutable.js release

rm -r node_modules/immutable
git clone https://github.com/facebook/immutable-js.git node_modules/immutable
