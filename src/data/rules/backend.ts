import { Library } from '../dictionaries';
import { type LibraryRulesMap } from './types';

/**
 * Backend library rules (Node.js, Python, Java, .NET, Go)
 */
export const backendRules: LibraryRulesMap = {
  // Node.js libraries
  [Library.EXPRESS]: [
    'Use express-async-errors or wrap async route handlers to properly handle promise rejections',
    'Implement middleware for cross-cutting concerns like logging, error handling, and authentication',
    'Use helmet middleware to enhance API security with appropriate HTTP headers for {{security_requirements}}',
  ],
  [Library.NEST]: [
    'Use dependency injection for services to improve testability and maintainability',
    'Implement custom decorators for cross-cutting concerns to keep code DRY',
    'Use interceptors for transforming the response data structure consistently for {{api_standards}}',
  ],
  [Library.FASTIFY]: [
    'Use the schema validation feature to validate request and response payloads for {{api_endpoints}}',
    'Implement the plugin system for modularizing application components',
    'Use fastify-swagger for automatic API documentation generation',
  ],

  // Python libraries
  [Library.DJANGO]: [
    'Use class-based views instead of function-based views for more maintainable code',
    'Implement Django REST Framework for building APIs with minimal code',
    'Use Django ORM query expressions and annotations for complex database queries involving {{data_models}}',
  ],
  [Library.FLASK]: [
    'Use Flask Blueprints to organize routes and views by feature or domain',
    'Implement Flask-SQLAlchemy for ORM capabilities and database migrations',
    'Use Flask-Marshmallow for serialization and request validation of {{data_types}}',
  ],
  [Library.FASTAPI]: [
    'Use Pydantic models for request and response validation',
    'Implement dependency injection for services and database sessions',
    'Use async endpoints for I/O-bound operations to improve throughput for {{high_load_endpoints}}',
  ],

  // Java libraries
  [Library.SPRING]: [
    'Use Spring Boot for simplified configuration and faster development',
    'Implement the repository pattern with Spring Data JPA for database access to {{entity_types}}',
    'Use Spring Security with JWT for stateless authentication',
  ],
  [Library.HIBERNATE]: [
    'Use lazy loading with caution and fetch joins to avoid N+1 query problems with {{entity_relationships}}',
    'Implement second-level caching for frequently accessed, rarely changed data',
    'Use native queries for complex reports that are difficult to express with JPQL',
  ],

  // .NET libraries
  [Library.ENTITY_FRAMEWORK]: [
    'Use the repository and unit of work patterns to abstract data access logic',
    'Implement eager loading with Include() to avoid N+1 query problems for {{entity_relationships}}',
    'Use migrations for database schema changes and version control',
  ],
  [Library.ASP_NET]: [
    'Use minimal APIs for simple endpoints in .NET 6+ applications',
    'Implement the mediator pattern with MediatR for decoupling request handling',
    'Use API controllers with model binding and validation attributes for {{complex_data_models}}',
  ],

  // Go libraries
  [Library.GIN]: [
    'Use middleware for cross-cutting concerns like authentication and logging',
    'Implement structured logging with context for better debugging of {{error_scenarios}}',
    'Use binding validation for request payloads',
  ],
  [Library.ECHO]: [
    'Use the middleware system for cross-cutting concerns',
    'Implement the context package for request-scoped values',
    'Use the validator package for request validation of {{input_types}}',
  ],
};
