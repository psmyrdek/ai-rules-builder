import { Library } from '../dictionaries';
import { type LibraryRulesMap } from './types';

/**
 * Frontend library rules (React, Vue, Angular, Svelte, Astro)
 */
export const frontendRules: LibraryRulesMap = {
  // React libraries
  [Library.REACT_ROUTER]: [
    'Use createBrowserRouter instead of BrowserRouter for better data loading and error handling',
    'Implement lazy loading with React.lazy() for route components to improve {{performance_critical_parts}}',
    'Use the useNavigate hook instead of the navigate component prop for programmatic navigation',
  ],
  [Library.REDUX]: [
    'Use Redux Toolkit (RTK) instead of plain Redux to reduce boilerplate code',
    'Implement the slice pattern for organizing related state, reducers, and actions',
    'Use RTK Query for data fetching to eliminate manual loading state management for {{api_endpoints}}',
  ],
  [Library.ZUSTAND]: [
    'Create separate stores for unrelated state domains instead of one large store',
    'Use immer middleware for complex state updates to maintain immutability when dealing with {{nested_state}}',
    'Implement selectors to derive state and prevent unnecessary re-renders',
  ],
  [Library.REACT_QUERY]: [
    'Set appropriate staleTime and cacheTime for each query based on {{data_freshness_requirements}}',
    'Use the useInfiniteQuery hook for pagination to improve user experience',
    'Implement optimistic updates for mutations to make the UI feel more responsive',
  ],

  // Vue libraries
  [Library.VUEX]: [
    'Use Pinia instead of Vuex for Vue 3 projects as it provides better TypeScript support',
    'Implement modules pattern to organize related state, getters, mutations, and actions',
    'Use namespaced modules to avoid naming conflicts in {{larger_applications}}',
  ],
  [Library.VUE_ROUTER]: [
    'Use route guards (beforeEach, beforeEnter) for authentication and authorization checks on {{protected_routes}}',
    'Implement lazy loading with dynamic imports for route components to improve performance',
    'Use named routes instead of hardcoded paths for better maintainability',
  ],
  [Library.PINIA]: [
    'Create multiple stores based on logical domains instead of a single large store',
    'Use the setup syntax for defining stores for better TypeScript inference',
    'Implement getters for derived state to avoid redundant computations for {{frequently_accessed_data}}',
  ],

  // Angular libraries
  [Library.NGRX]: [
    'Use the createFeature and createReducer functions to simplify reducer creation',
    'Implement the facade pattern to abstract NgRx implementation details from components',
    'Use entity adapter for collections to standardize CRUD operations for {{entity_types}}',
  ],
  [Library.ANGULAR_MATERIAL]: [
    'Create a dedicated module for Angular Material imports to keep the app module clean',
    'Use theme mixins to customize component styles instead of overriding CSS for {{custom_branding}}',
    'Implement OnPush change detection for performance optimization',
  ],

  // Svelte libraries
  [Library.SVELTE_KIT]: [
    'Use server-side load functions to fetch data before rendering pages with {{critical_initial_data}}',
    'Implement form actions for handling form submissions without client-side JavaScript',
    'Use page stores ($page) to access route parameters and other page data',
  ],

  // Astro libraries
  [Library.ASTRO_ISLANDS]: [
    'Use client:visible directive for components that should hydrate when visible in viewport',
    'Implement shared state with nanostores instead of prop drilling between islands',
    'Use content collections for type-safe content management of {{content_types}}',
  ],
};
