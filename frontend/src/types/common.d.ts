import { TEST_DEFAULT_ACTION } from 'constants/actions';

// Interface for async call steps
export interface IAsyncCall {
  REQUESTED: string;
  SUCCESS: string;
  FAILURE: string;
}

// Default Action for code coverage (default switch branch)
export interface IActionTestDefault {
  type: typeof TEST_DEFAULT_ACTION;
}
