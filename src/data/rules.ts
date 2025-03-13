import { Library } from './dictionaries';

/**
 * Maps libraries to their best practice rules
 * Each library has at least 2 rules based on current best practices
 */
export const libraryRules: Record<Library, string[]> = {
  // React libraries
  [Library.REACT_ROUTER]: [
    'Use createBrowserRouter instead of BrowserRouter for better data loading and error handling',
    'Implement lazy loading with React.lazy() for route components to improve initial load performance',
    'Use the useNavigate hook instead of the navigate component prop for programmatic navigation'
  ],
  [Library.REDUX]: [
    'Use Redux Toolkit (RTK) instead of plain Redux to reduce boilerplate code',
    'Implement the slice pattern for organizing related state, reducers, and actions',
    'Use RTK Query for data fetching to eliminate manual loading state management'
  ],
  [Library.ZUSTAND]: [
    'Create separate stores for unrelated state domains instead of one large store',
    'Use immer middleware for complex state updates to maintain immutability',
    'Implement selectors to derive state and prevent unnecessary re-renders'
  ],
  [Library.REACT_QUERY]: [
    'Set appropriate staleTime and cacheTime for each query based on data freshness requirements',
    'Use the useInfiniteQuery hook for pagination to improve user experience',
    'Implement optimistic updates for mutations to make the UI feel more responsive'
  ],

  // Vue libraries
  [Library.VUEX]: [
    'Use Pinia instead of Vuex for Vue 3 projects as it provides better TypeScript support',
    'Implement modules pattern to organize related state, getters, mutations, and actions',
    'Use namespaced modules to avoid naming conflicts in larger applications'
  ],
  [Library.VUE_ROUTER]: [
    'Use route guards (beforeEach, beforeEnter) for authentication and authorization checks',
    'Implement lazy loading with dynamic imports for route components to improve performance',
    'Use named routes instead of hardcoded paths for better maintainability'
  ],
  [Library.PINIA]: [
    'Create multiple stores based on logical domains instead of a single large store',
    'Use the setup syntax for defining stores for better TypeScript inference',
    'Implement getters for derived state to avoid redundant computations'
  ],

  // Angular libraries
  [Library.NGRX]: [
    'Use the createFeature and createReducer functions to simplify reducer creation',
    'Implement the facade pattern to abstract NgRx implementation details from components',
    'Use entity adapter for collections to standardize CRUD operations'
  ],
  [Library.ANGULAR_MATERIAL]: [
    'Create a dedicated module for Angular Material imports to keep the app module clean',
    'Use theme mixins to customize component styles instead of overriding CSS',
    'Implement OnPush change detection for performance optimization'
  ],

  // Svelte libraries
  [Library.SVELTE_KIT]: [
    'Use server-side load functions to fetch data before rendering pages',
    'Implement form actions for handling form submissions without client-side JavaScript',
    'Use page stores ($page) to access route parameters and other page data'
  ],

  // Astro libraries
  [Library.ASTRO_ISLANDS]: [
    'Use client:visible directive for components that should hydrate when visible in viewport',
    'Implement shared state with nanostores instead of prop drilling between islands',
    'Use content collections for type-safe content management'
  ],

  // Node.js libraries
  [Library.EXPRESS]: [
    'Use express-async-errors or wrap async route handlers to properly handle promise rejections',
    'Implement middleware for cross-cutting concerns like logging, error handling, and authentication',
    'Use helmet middleware to enhance API security with appropriate HTTP headers'
  ],
  [Library.NEST]: [
    'Use dependency injection for services to improve testability and maintainability',
    'Implement custom decorators for cross-cutting concerns to keep code DRY',
    'Use interceptors for transforming the response data structure consistently'
  ],
  [Library.FASTIFY]: [
    'Use the schema validation feature to validate request and response payloads',
    'Implement the plugin system for modularizing application components',
    'Use fastify-swagger for automatic API documentation generation'
  ],

  // Python libraries
  [Library.DJANGO]: [
    'Use class-based views instead of function-based views for more maintainable code',
    'Implement Django REST Framework for building APIs with minimal code',
    'Use Django ORM query expressions and annotations for complex database queries'
  ],
  [Library.FLASK]: [
    'Use Flask Blueprints to organize routes and views by feature or domain',
    'Implement Flask-SQLAlchemy for ORM capabilities and database migrations',
    'Use Flask-Marshmallow for serialization and request validation'
  ],
  [Library.FASTAPI]: [
    'Use Pydantic models for request and response validation',
    'Implement dependency injection for services and database sessions',
    'Use async endpoints for I/O-bound operations to improve throughput'
  ],

  // Java libraries
  [Library.SPRING]: [
    'Use Spring Boot for simplified configuration and faster development',
    'Implement the repository pattern with Spring Data JPA for database access',
    'Use Spring Security with JWT for stateless authentication'
  ],
  [Library.HIBERNATE]: [
    'Use lazy loading with caution and fetch joins to avoid N+1 query problems',
    'Implement second-level caching for frequently accessed, rarely changed data',
    'Use native queries for complex reports that are difficult to express with JPQL'
  ],

  // .NET libraries
  [Library.ENTITY_FRAMEWORK]: [
    'Use the repository and unit of work patterns to abstract data access logic',
    'Implement eager loading with Include() to avoid N+1 query problems',
    'Use migrations for database schema changes and version control'
  ],
  [Library.ASP_NET]: [
    'Use minimal APIs for simple endpoints in .NET 6+ applications',
    'Implement the mediator pattern with MediatR for decoupling request handling',
    'Use API controllers with model binding and validation attributes'
  ],

  // Go libraries
  [Library.GIN]: [
    'Use middleware for cross-cutting concerns like authentication and logging',
    'Implement structured logging with context for better debugging',
    'Use binding validation for request payloads'
  ],
  [Library.ECHO]: [
    'Use the middleware system for cross-cutting concerns',
    'Implement the context package for request-scoped values',
    'Use the validator package for request validation'
  ],

  // SQL libraries
  [Library.POSTGRES]: [
    'Use connection pooling to manage database connections efficiently',
    'Implement JSONB columns for semi-structured data instead of creating many tables',
    'Use materialized views for complex, frequently accessed read-only data'
  ],
  [Library.MYSQL]: [
    'Use InnoDB storage engine for transactions and foreign key constraints',
    'Implement proper indexing strategies based on query patterns',
    'Use connection pooling for better performance'
  ],
  [Library.SQLSERVER]: [
    'Use parameterized queries to prevent SQL injection',
    'Implement proper indexing strategies based on query patterns',
    'Use stored procedures for complex business logic that requires database access'
  ],

  // NoSQL libraries
  [Library.MONGODB]: [
    'Use the aggregation framework for complex queries instead of multiple queries',
    'Implement schema validation to ensure data consistency',
    'Use indexes for frequently queried fields to improve performance'
  ],
  [Library.DYNAMODB]: [
    'Design access patterns first, then create tables and indexes to support them',
    'Implement single-table design for related entities to minimize RCU/WCU costs',
    'Use sparse indexes and composite keys for efficient querying'
  ],
  [Library.FIREBASE]: [
    'Use security rules to enforce access control at the database level',
    'Implement shallow queries to minimize bandwidth usage',
    'Use offline capabilities for better user experience in mobile apps'
  ],

  // Graph libraries
  [Library.NEO4J]: [
    'Use parameterized Cypher queries to prevent injection attacks',
    'Implement proper indexing on node properties used in WHERE clauses',
    'Use the APOC library for common operations not covered by Cypher'
  ],
  [Library.DGRAPH]: [
    'Use GraphQL+-/DQL for complex queries instead of multiple simple queries',
    'Implement proper indexing based on query patterns',
    'Use transactions for maintaining data consistency'
  ],

  // CI/CD libraries
  [Library.GITHUB_ACTIONS]: [
    'Use composite actions to reuse workflow steps across different workflows',
    'Implement caching for dependencies to speed up builds',
    'Use matrix builds for testing across multiple platforms and versions'
  ],
  [Library.JENKINS]: [
    'Use declarative pipelines with Jenkinsfile instead of freestyle jobs',
    'Implement shared libraries for common pipeline steps',
    'Use agents and labels for distributing builds across different environments'
  ],
  [Library.GITLAB_CI]: [
    'Use includes to reuse configuration across multiple pipelines',
    'Implement caching for dependencies to speed up builds',
    'Use rules and only/except to control when jobs run'
  ],

  // Containerization libraries
  [Library.DOCKER]: [
    'Use multi-stage builds to create smaller production images',
    'Implement layer caching strategies to speed up builds',
    'Use non-root users in containers for better security'
  ],
  [Library.KUBERNETES]: [
    'Use Helm charts for packaging and deploying applications',
    'Implement resource requests and limits for all containers',
    'Use namespaces to organize and isolate resources'
  ],

  // Cloud libraries
  [Library.AWS]: [
    'Use Infrastructure as Code (IaC) with AWS CDK or CloudFormation',
    'Implement the principle of least privilege for IAM roles and policies',
    'Use managed services when possible instead of maintaining your own infrastructure'
  ],
  [Library.AZURE]: [
    'Use Azure Resource Manager (ARM) templates or Bicep for infrastructure as code',
    'Implement Azure AD for authentication and authorization',
    'Use managed identities instead of service principals when possible'
  ],
  [Library.GCP]: [
    'Use Terraform or Deployment Manager for infrastructure as code',
    'Implement VPC Service Controls for network security',
    'Use workload identity for service-to-service authentication'
  ],

  // Unit testing libraries
  [Library.JEST]: [
    'Use the React Testing Library with Jest for component testing',
    'Implement snapshot testing for UI components with caution',
    'Use mock functions and spies to isolate units of code'
  ],
  [Library.MOCHA]: [
    'Use Chai for assertions and Sinon for mocks and spies',
    'Implement the AAA (Arrange-Act-Assert) pattern for test structure',
    'Use before/after hooks for setup and teardown'
  ],
  [Library.PYTEST]: [
    'Use fixtures for test setup and dependency injection',
    'Implement parameterized tests for testing multiple inputs',
    'Use monkeypatch for mocking dependencies'
  ],

  // Integration testing libraries
  [Library.SUPERTEST]: [
    'Use async/await with supertest for cleaner test code',
    'Implement a test database for integration tests',
    'Use beforeEach/afterEach hooks for database setup and teardown'
  ],

  // E2E testing libraries
  [Library.CYPRESS]: [
    'Use data-cy attributes for selecting elements to make tests more resilient',
    'Implement custom commands for common actions',
    'Use cy.intercept() to mock API responses for testing edge cases'
  ],
  [Library.PLAYWRIGHT]: [
    'Use the page object model to organize test code',
    'Implement test fixtures for common setup and teardown',
    'Use API testing capabilities for setting up test data'
  ],
  [Library.SELENIUM]: [
    'Use the page object model to organize test code',
    'Implement explicit waits instead of implicit waits',
    'Use the WebDriverWait class for waiting for elements to be ready'
  ],
};

/**
 * Get rules for a specific library
 * @param library The library to get rules for
 * @returns Array of rules for the library
 */
export const getRulesForLibrary = (library: Library): string[] => {
  return libraryRules[library] || [];
};

/**
 * Get rules for multiple libraries
 * @param libraries Array of libraries to get rules for
 * @returns Record with libraries as keys and arrays of rules as values
 */
export const getRulesForLibraries = (libraries: Library[]): Record<Library, string[]> => {
  const result: Record<Library, string[]> = {} as Record<Library, string[]>;
  
  libraries.forEach(library => {
    result[library] = getRulesForLibrary(library);
  });
  
  return result;
};
