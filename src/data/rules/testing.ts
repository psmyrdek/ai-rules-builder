import { Library } from '../dictionaries';
import { type LibraryRulesMap } from './types';

/**
 * Testing library rules (Unit, Integration, E2E)
 */
export const testingRules: LibraryRulesMap = {
  // Unit testing libraries
  [Library.JEST]: [
    'Use the React Testing Library with Jest for component testing',
    'Implement snapshot testing for UI components with caution',
    'Use mock functions and spies to isolate units of code when testing {{component_types}}',
  ],
  [Library.MOCHA]: [
    'Use Chai for assertions and Sinon for mocks and spies',
    'Implement the AAA (Arrange-Act-Assert) pattern for test structure',
    'Use before/after hooks for setup and teardown of {{test_dependencies}}',
  ],
  [Library.PYTEST]: [
    'Use fixtures for test setup and dependency injection',
    'Implement parameterized tests for testing multiple inputs for {{function_types}}',
    'Use monkeypatch for mocking dependencies',
  ],

  // Integration testing libraries
  [Library.SUPERTEST]: [
    'Use async/await with supertest for cleaner test code',
    'Implement a test database for integration tests',
    'Use beforeEach/afterEach hooks for database setup and teardown when testing {{api_endpoints}}',
  ],

  // E2E testing libraries
  [Library.CYPRESS]: [
    'Use data-cy attributes for selecting elements to make tests more resilient',
    'Implement custom commands for common actions',
    'Use cy.intercept() to mock API responses for testing {{edge_cases}}',
  ],
  [Library.PLAYWRIGHT]: [
    'Use the page object model to organize test code',
    'Implement test fixtures for common setup and teardown',
    'Use API testing capabilities for setting up test data for {{test_scenarios}}',
  ],
  [Library.SELENIUM]: [
    'Use the page object model to organize test code',
    'Implement explicit waits instead of implicit waits for {{dynamic_elements}}',
    'Use the WebDriverWait class for waiting for elements to be ready',
  ],
};
