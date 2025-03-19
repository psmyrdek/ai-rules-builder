/**
 * Dictionaries for AI Rules Builder
 *
 * This file defines the relationships between layers, stacks, and libraries
 * - Layers contain stacks
 * - Stacks contain libraries
 */

// Define enums for each level
export enum Layer {
  CRAFTSMANSHIP = 'Coding practices',
  FRONTEND = 'Frontend',
  BACKEND = 'Backend',
  DATABASE = 'Database',
  DEVOPS = 'DevOps',
  TESTING = 'Testing',
}

export enum Stack {
  // Frontend stacks
  REACT = 'React',
  VUE = 'Vue',
  ANGULAR = 'Angular',
  SVELTE = 'Svelte',
  ASTRO = 'Astro',

  // Backend stacks
  NODE = 'Node.js',
  PYTHON = 'Python',
  JAVA = 'Java',
  DOTNET = '.NET',
  GO = 'Go',

  // Database stacks
  SQL = 'SQL',
  NOSQL = 'NoSQL',
  GRAPH = 'Graph',

  // DevOps stacks
  CI_CD = 'CI/CD',
  CONTAINERIZATION = 'Containerization',
  CLOUD = 'Cloud',

  // Testing stacks
  UNIT = 'Unit Testing',
  INTEGRATION = 'Integration Testing',
  E2E = 'End-to-End Testing',

  // Craftsmanship stacks
  CODE_QUALITY = 'Code Quality',
  DOCUMENTATION = 'Documentation',
  VERSION_CONTROL = 'Version Control',
  ARCHITECTURE = 'Architecture',
}

export enum Library {
  // React libraries
  REACT_ROUTER = 'React Router',
  REDUX = 'Redux',
  ZUSTAND = 'Zustand',
  REACT_QUERY = 'React Query',

  // Vue libraries
  VUEX = 'Vuex',
  VUE_ROUTER = 'Vue Router',
  PINIA = 'Pinia',

  // Angular libraries
  NGRX = 'NgRx',
  ANGULAR_MATERIAL = 'Angular Material',

  // Svelte libraries
  SVELTE_KIT = 'SvelteKit',

  // Astro libraries
  ASTRO_ISLANDS = 'Astro Islands',

  // Node.js libraries
  EXPRESS = 'Express',
  NEST = 'NestJS',
  FASTIFY = 'Fastify',

  // Python libraries
  DJANGO = 'Django',
  FLASK = 'Flask',
  FASTAPI = 'FastAPI',

  // Java libraries
  SPRING = 'Spring',
  HIBERNATE = 'Hibernate',

  // .NET libraries
  ENTITY_FRAMEWORK = 'Entity Framework',
  ASP_NET = 'ASP.NET',

  // Go libraries
  GIN = 'Gin',
  ECHO = 'Echo',

  // SQL libraries
  POSTGRES = 'PostgreSQL',
  MYSQL = 'MySQL',
  SQLSERVER = 'SQL Server',

  // NoSQL libraries
  MONGODB = 'MongoDB',
  DYNAMODB = 'DynamoDB',
  FIREBASE = 'Firebase',

  // Graph libraries
  NEO4J = 'Neo4j',
  DGRAPH = 'Dgraph',

  // CI/CD libraries
  GITHUB_ACTIONS = 'GitHub Actions',
  JENKINS = 'Jenkins',
  GITLAB_CI = 'GitLab CI',

  // Containerization libraries
  DOCKER = 'Docker',
  KUBERNETES = 'Kubernetes',

  // Cloud libraries
  AWS = 'AWS',
  AZURE = 'Azure',
  GCP = 'Google Cloud',

  // Unit testing libraries
  JEST = 'Jest',
  MOCHA = 'Mocha',
  PYTEST = 'PyTest',

  // Integration testing libraries
  SUPERTEST = 'SuperTest',

  // E2E testing libraries
  CYPRESS = 'Cypress',
  PLAYWRIGHT = 'Playwright',
  SELENIUM = 'Selenium',

  // Code Quality libraries
  ESLINT = 'ESLint',
  PRETTIER = 'Prettier',
  SONARQUBE = 'SonarQube',
  CODECOV = 'Codecov',

  // Documentation libraries
  STORYBOOK = 'Storybook',
  SWAGGER = 'Swagger/OpenAPI',
  TYPEDOC = 'TypeDoc',
  JSDOC = 'JSDoc',

  // Version Control libraries
  GIT = 'Git',
  GITHUB = 'GitHub',
  GITLAB = 'GitLab',
  CONVENTIONAL_COMMITS = 'Conventional Commits',

  // Architecture libraries
  CLEAN_ARCHITECTURE = 'Clean Architecture',
  DDD = 'Domain-Driven Design',
  MICROSERVICES = 'Microservices',
  MONOREPO = 'Monorepo',
}

// Define relationships between layers, stacks, and libraries
export interface LayerToStackMap {
  [key: string]: Stack[];
}

export interface StackToLibraryMap {
  [key: string]: Library[];
}

// Map layers to stacks
export const layerToStackMap: LayerToStackMap = {
  [Layer.FRONTEND]: [
    Stack.REACT,
    Stack.VUE,
    Stack.ANGULAR,
    Stack.SVELTE,
    Stack.ASTRO,
  ],
  [Layer.BACKEND]: [
    Stack.NODE,
    Stack.PYTHON,
    Stack.JAVA,
    Stack.DOTNET,
    Stack.GO,
  ],
  [Layer.DATABASE]: [Stack.SQL, Stack.NOSQL, Stack.GRAPH],
  [Layer.DEVOPS]: [Stack.CI_CD, Stack.CONTAINERIZATION, Stack.CLOUD],
  [Layer.TESTING]: [Stack.UNIT, Stack.INTEGRATION, Stack.E2E],
  [Layer.CRAFTSMANSHIP]: [
    Stack.CODE_QUALITY,
    Stack.DOCUMENTATION,
    Stack.VERSION_CONTROL,
    Stack.ARCHITECTURE,
  ],
};

// Map stacks to libraries
export const stackToLibraryMap: StackToLibraryMap = {
  [Stack.REACT]: [
    Library.REACT_ROUTER,
    Library.REDUX,
    Library.ZUSTAND,
    Library.REACT_QUERY,
  ],
  [Stack.VUE]: [Library.VUEX, Library.VUE_ROUTER, Library.PINIA],
  [Stack.ANGULAR]: [Library.NGRX, Library.ANGULAR_MATERIAL],
  [Stack.SVELTE]: [Library.SVELTE_KIT],
  [Stack.ASTRO]: [Library.ASTRO_ISLANDS],
  [Stack.NODE]: [Library.EXPRESS, Library.NEST, Library.FASTIFY],
  [Stack.PYTHON]: [Library.DJANGO, Library.FLASK, Library.FASTAPI],
  [Stack.JAVA]: [Library.SPRING, Library.HIBERNATE],
  [Stack.DOTNET]: [Library.ENTITY_FRAMEWORK, Library.ASP_NET],
  [Stack.GO]: [Library.GIN, Library.ECHO],
  [Stack.SQL]: [Library.POSTGRES, Library.MYSQL, Library.SQLSERVER],
  [Stack.NOSQL]: [Library.MONGODB, Library.DYNAMODB, Library.FIREBASE],
  [Stack.GRAPH]: [Library.NEO4J, Library.DGRAPH],
  [Stack.CI_CD]: [Library.GITHUB_ACTIONS, Library.JENKINS, Library.GITLAB_CI],
  [Stack.CONTAINERIZATION]: [Library.DOCKER, Library.KUBERNETES],
  [Stack.CLOUD]: [Library.AWS, Library.AZURE, Library.GCP],
  [Stack.UNIT]: [Library.JEST, Library.MOCHA, Library.PYTEST],
  [Stack.INTEGRATION]: [Library.SUPERTEST],
  [Stack.E2E]: [Library.CYPRESS, Library.PLAYWRIGHT, Library.SELENIUM],
  [Stack.CODE_QUALITY]: [
    Library.ESLINT,
    Library.PRETTIER,
    Library.SONARQUBE,
    Library.CODECOV,
  ],
  [Stack.DOCUMENTATION]: [
    Library.STORYBOOK,
    Library.SWAGGER,
    Library.TYPEDOC,
    Library.JSDOC,
  ],
  [Stack.VERSION_CONTROL]: [
    Library.GIT,
    Library.GITHUB,
    Library.GITLAB,
    Library.CONVENTIONAL_COMMITS,
  ],
  [Stack.ARCHITECTURE]: [
    Library.CLEAN_ARCHITECTURE,
    Library.DDD,
    Library.MICROSERVICES,
    Library.MONOREPO,
  ],
};

// Helper functions to get relationships
export const getStacksByLayer = (layer: Layer): Stack[] => {
  return layerToStackMap[layer] || [];
};

export const getLibrariesByStack = (stack: Stack): Library[] => {
  return stackToLibraryMap[stack] || [];
};

export const getLayerByStack = (stack: Stack): Layer | undefined => {
  for (const [layer, stacks] of Object.entries(layerToStackMap)) {
    if (stacks.includes(stack)) {
      return layer as Layer;
    }
  }
  return undefined;
};

export const getStacksByLibrary = (library: Library): Stack[] => {
  const stacks: Stack[] = [];
  for (const [stack, libraries] of Object.entries(stackToLibraryMap)) {
    if (libraries.includes(library)) {
      stacks.push(stack as Stack);
    }
  }
  return stacks;
};

export const getLayersByLibrary = (library: Library): Layer[] => {
  const stacks = getStacksByLibrary(library);
  const layers = new Set<Layer>();

  stacks.forEach((stack) => {
    const layer = getLayerByStack(stack);
    if (layer) {
      layers.add(layer);
    }
  });

  return Array.from(layers);
};

// Helper function to get the total count of libraries in a layer
export const getLibrariesCountByLayer = (layer: Layer): number => {
  const stacks = getStacksByLayer(layer);
  let totalLibraries = 0;
  
  stacks.forEach(stack => {
    totalLibraries += getLibrariesByStack(stack).length;
  });
  
  return totalLibraries;
};
