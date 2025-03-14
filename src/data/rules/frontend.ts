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
    'Leverage loader and action functions to handle data fetching and mutations at the route level',
    'Implement error boundaries with errorElement to gracefully handle {{specific_error_scenarios}}',
    'Use relative paths with dot notation (e.g., "../parent") to maintain route hierarchy flexibility',
  ],
  [Library.REDUX]: [
    'Use Redux Toolkit (RTK) instead of plain Redux to reduce boilerplate code',
    'Implement the slice pattern for organizing related state, reducers, and actions',
    'Use RTK Query for data fetching to eliminate manual loading state management for {{api_endpoints}}',
    'Prefer createSelector for memoized selectors to prevent unnecessary recalculations',
    'Normalize complex state structures using a flat entities approach with IDs as references',
    'Implement middleware selectively and avoid overusing thunks for {{simple_synchronous_operations}}',
  ],
  [Library.ZUSTAND]: [
    'Create separate stores for {{unrelated_state_domains}} instead of one large store',
    'Use immer middleware for complex state updates to maintain immutability when dealing with {{nested_state}}',
    'Implement selectors to derive state and prevent unnecessary re-renders',
    'Leverage the persist middleware for automatic state persistence in {{storage_type}}',
    'Use TypeScript with strict typing for store definitions to catch errors at compile time',
    'Prefer shallow equality checks with useShallow for performance optimization in component re-renders',
  ],
  [Library.REACT_QUERY]: [
    'Set appropriate staleTime and cacheTime for each query based on {{data_freshness_requirements}}',
    'Use the useInfiniteQuery hook for pagination to improve user experience',
    'Implement optimistic updates for mutations to make the UI feel more responsive',
    'Leverage queryClient.setQueryDefaults to establish consistent settings for {{query_types}}',
    'Use suspense mode with <Suspense> boundaries for a more declarative data fetching approach',
    'Implement retry logic with custom backoff algorithms for {{transient_network_failures}}',
  ],

  // Vue libraries
  [Library.VUEX]: [
    'Use Pinia instead of Vuex for Vue 3 projects as it provides better TypeScript support',
    'Implement modules pattern to organize related state, getters, mutations, and actions',
    'Use namespaced modules to avoid naming conflicts in {{larger_applications}}',
    'Leverage plugins for cross-cutting concerns like {{plugin_use_cases}}',
    'Avoid direct state mutations outside of mutations to maintain predictable state changes',
    'Use mapState, mapGetters, and mapActions helpers to simplify component code',
  ],
  [Library.VUE_ROUTER]: [
    'Use route guards (beforeEach, beforeEnter) for authentication and authorization checks on {{protected_routes}}',
    'Implement lazy loading with dynamic imports for route components to improve performance',
    'Use named routes instead of hardcoded paths for better maintainability',
    'Leverage route meta fields to store {{additional_route_information}}',
    'Implement scroll behavior options to control scrolling between route navigations',
    'Use navigation duplicates handling to prevent redundant navigation to the current route',
  ],
  [Library.PINIA]: [
    'Create multiple stores based on {{logical_domains}} instead of a single large store',
    'Use the setup syntax for defining stores for better TypeScript inference',
    'Implement getters for derived state to avoid redundant computations for {{frequently_accessed_data}}',
    'Leverage the storeToRefs helper to extract reactive properties while maintaining reactivity',
    'Use plugins for cross-cutting concerns like {{store_plugin_examples}}',
    'Implement actions for asynchronous operations and complex state mutations',
  ],

  // Angular libraries
  [Library.NGRX]: [
    'Use the createFeature and createReducer functions to simplify reducer creation',
    'Implement the facade pattern to abstract NgRx implementation details from {{component_types}}',
    'Use entity adapter for collections to standardize CRUD operations for {{entity_types}}',
    'Leverage selectors with memoization to efficiently derive state and prevent unnecessary calculations',
    'Implement @ngrx/effects for handling {{side_effect_examples}}',
    'Use action creators with typed payloads to ensure type safety throughout the application',
  ],
  [Library.ANGULAR_MATERIAL]: [
    'Create a dedicated module for Angular Material imports to keep the app module clean',
    'Use theme mixins to customize component styles instead of overriding CSS for {{custom_branding}}',
    'Implement OnPush change detection for {{performance_critical_components}}',
    'Leverage the CDK (Component Development Kit) for {{custom_component_behaviors}}',
    "Use Material's form field components with reactive forms for consistent validation UX",
    'Implement accessibility attributes and ARIA labels for {{interactive_component_examples}}',
  ],

  // Svelte libraries
  [Library.SVELTE_KIT]: [
    'Use server-side load functions to fetch data before rendering pages with {{critical_initial_data}}',
    'Implement form actions for handling {{form_submission_types}}',
    'Use page stores ($page) to access route parameters and other page data',
    "Leverage SvelteKit's server-only modules for {{sensitive_operations}}",
    'Implement +error.svelte files for custom error handling at the route level',
    'Use the enhance function for progressive enhancement of {{form_interaction_examples}}',
  ],

  // Astro libraries
  [Library.ASTRO_ISLANDS]: [
    'Use client:visible directive for components that should hydrate when visible in viewport',
    'Implement shared state with nanostores instead of prop drilling between {{island_components}}',
    'Use content collections for type-safe content management of {{content_types}}',
    'Leverage client:media directive for components that should only hydrate at {{specific_breakpoints}}',
    'Implement partial hydration strategies to minimize JavaScript sent to the client',
    'Use Astro.cookies API for server-side cookie management instead of {{client_side_alternatives}}',
  ],
};
