import { Library } from '../dictionaries';
import { type LibraryRulesMap } from './types';

export const frontendRules: LibraryRulesMap = {
  // React libraries
  [Library.REACT_CODING_STANDARDS]: [
    'Use functional components with hooks instead of class components',
    'Implement React.memo() for expensive components that render often with the same props',
    'Utilize React.lazy() and Suspense for code-splitting and performance optimization',
    'Use the useCallback hook for event handlers passed to child components to prevent unnecessary re-renders',
    'Prefer useMemo for expensive calculations to avoid recomputation on every render',
    'Implement useId() for generating unique IDs for accessibility attributes',
    'Use the new use hook for data fetching in React 19+ projects',
    'Leverage Server Components for {{data_fetching_heavy_components}} when using React with Next.js or similar frameworks',
    'Consider using the new useOptimistic hook for optimistic UI updates in forms',
    'Use useTransition for non-urgent state updates to keep the UI responsive',
  ],
  [Library.REACT_ROUTER]: [
    'Use createBrowserRouter instead of BrowserRouter for better data loading and error handling',
    'Implement lazy loading with React.lazy() for route components to improve initial load time',
    'Use the useNavigate hook instead of the navigate component prop for programmatic navigation',
    'Leverage loader and action functions to handle data fetching and mutations at the route level',
    'Implement error boundaries with errorElement to gracefully handle routing and data errors',
    'Use relative paths with dot notation (e.g., "../parent") to maintain route hierarchy flexibility',
    'Utilize the useRouteLoaderData hook to access data from parent routes',
    'Implement fetchers for non-navigation data mutations',
    'Use route.lazy() for route-level code splitting with automatic loading states',
    'Implement shouldRevalidate functions to control when data revalidation happens after navigation',
  ],
  [Library.REDUX]: [
    'Use Redux Toolkit (RTK) instead of plain Redux to reduce boilerplate code',
    'Implement the slice pattern for organizing related state, reducers, and actions',
    'Use RTK Query for data fetching to eliminate manual loading state management',
    'Prefer createSelector for memoized selectors to prevent unnecessary recalculations',
    'Normalize complex state structures using a flat entities approach with IDs as references',
    'Implement middleware selectively and avoid overusing thunks for simple state updates',
    'Use the listener middleware for complex side effects instead of thunks where appropriate',
    'Leverage createEntityAdapter for standardized CRUD operations',
    'Implement Redux DevTools for debugging in development environments',
    'Use typed hooks (useAppDispatch, useAppSelector) with TypeScript for type safety',
  ],
  [Library.ZUSTAND]: [
    'Create separate stores for distinct state domains instead of one large store',
    'Use immer middleware for complex state updates to maintain immutability when dealing with nested data',
    'Implement selectors to derive state and prevent unnecessary re-renders',
    'Leverage the persist middleware for automatic state persistence in localStorage or other storage',
    'Use TypeScript with strict typing for store definitions to catch errors at compile time',
    'Prefer shallow equality checks with useShallow for performance optimization in component re-renders',
    'Combine stores using composition for sharing logic between stores',
    'Implement subscriptions to react to state changes outside of React components',
    'Use devtools middleware for Redux DevTools integration in development',
    'Create custom hooks to encapsulate store access and related business logic',
  ],
  [Library.REACT_QUERY]: [
    'Use TanStack Query (formerly React Query) with appropriate staleTime and gcTime based on data freshness requirements',
    'Implement the useInfiniteQuery hook for pagination and infinite scrolling',
    'Use optimistic updates for mutations to make the UI feel more responsive',
    'Leverage queryClient.setQueryDefaults to establish consistent settings for query categories',
    'Use suspense mode with <Suspense> boundaries for a more declarative data fetching approach',
    'Implement retry logic with custom backoff algorithms for transient network issues',
    'Use the select option to transform and extract specific data from query results',
    'Implement mutations with onMutate, onError, and onSettled for robust error handling',
    'Use Query Keys structuring pattern ([entity, params]) for better organization and automatic refetching',
    'Implement query invalidation strategies to keep data fresh after mutations',
  ],
  [Library.NEXT_JS]: [
    'Use App Router and Server Components for improved performance and SEO',
    'Implement route handlers for API endpoints instead of the pages/api directory',
    'Use server actions for form handling and data mutations from Server Components',
    'Leverage Next.js Image component with proper sizing for core web vitals optimization',
    'Implement the Metadata API for dynamic SEO optimization',
    'Use React Server Components for {{data_fetching_operations}} to reduce client-side JavaScript',
    'Implement Streaming and Suspense for improved loading states',
    'Use the new Link component without requiring a child <a> tag',
    'Leverage parallel routes for complex layouts and parallel data fetching',
    'Implement intercepting routes for modal patterns and nested UIs',
  ],

  // Vue libraries
  [Library.VUE_CODING_STANDARDS]: [
    'Use the Composition API instead of the Options API for better type inference and code reuse',
    'Implement <script setup> for more concise component definitions',
    'Use Suspense and async components for handling loading states during code-splitting',
    'Leverage the defineProps and defineEmits macros for type-safe props and events',
    'Use the new defineOptions for additional component options',
    'Implement provide/inject for dependency injection instead of prop drilling in deeply nested components',
    'Use the Teleport component for portal-like functionality to render UI elsewhere in the DOM',
    'Leverage ref over reactive for primitive values to avoid unintended unwrapping',
    'Use v-memo for performance optimization in render-heavy list rendering scenarios',
    "Implement shallow refs for large objects that don't need deep reactivity",
  ],
  [Library.VUEX]: [
    'Migrate to Pinia instead of Vuex for Vue 3 projects as it provides better TypeScript support',
    'If using Vuex, implement modules pattern to organize related state, getters, mutations, and actions',
    'Use namespaced modules to avoid naming conflicts in larger applications',
    'Leverage plugins for cross-cutting concerns like persistence or analytics',
    'Avoid direct state mutations outside of mutations to maintain predictable state changes',
    'Use mapState, mapGetters, and mapActions helpers to simplify component code',
    'Implement Vuex with the composition API using useStore for better TypeScript support',
    'Use actions for async operations and mutations for synchronous state changes',
    'Leverage getters for computed state to avoid redundant calculations',
    'Implement proper error handling in actions with try/catch blocks',
  ],
  [Library.VUE_ROUTER]: [
    'Use route guards (beforeEach, beforeEnter) for authentication and authorization checks',
    'Implement lazy loading with dynamic imports for route components to improve performance',
    'Use named routes instead of hardcoded paths for better maintainability',
    'Leverage route meta fields to store additional route information like permissions or layout data',
    'Implement scroll behavior options to control scrolling between route navigations',
    'Use navigation duplicates handling to prevent redundant navigation to the current route',
    'Implement the composition API useRouter and useRoute hooks instead of this.$router',
    'Use nested routes for complex UIs with parent-child relationships',
    "Leverage route params validation with sensitive: true for parameters that shouldn't be logged",
    'Implement dynamic route matching with path parameters and regex patterns for flexible routing',
  ],
  [Library.PINIA]: [
    'Create multiple stores based on logical domains instead of a single large store',
    'Use the setup syntax (defineStore with setup function) for defining stores for better TypeScript inference',
    'Implement getters for derived state to avoid redundant computations',
    'Leverage the storeToRefs helper to extract reactive properties while maintaining reactivity',
    'Use plugins for cross-cutting concerns like persistence, state resets, or dev tools',
    'Implement actions for asynchronous operations and complex state mutations',
    'Use composable stores by importing and using stores within other stores',
    'Leverage the $reset() method to restore initial state when needed',
    'Implement $subscribe for reactive store subscriptions',
    'Use TypeScript with proper return type annotations for maximum type safety',
  ],
  [Library.NUXT]: [
    'Use Nuxt 3 with the Composition API and <script setup> for modern applications',
    'Leverage auto-imports for Vue and Nuxt composables to reduce boilerplate',
    'Implement server routes with the server directory for API functionality',
    'Use Nuxt modules for extending functionality instead of custom plugins when possible',
    'Leverage the useAsyncData and useFetch composables for data fetching with SSR support',
    'Implement middleware (defineNuxtRouteMiddleware) for navigation guards',
    'Use Nuxt layouts for consistent page layouts across routes',
    'Leverage Nitro for server-side rendering and API routes',
    'Implement Nuxt plugins for global functionality registration',
    'Use state management with useState for simple state or Pinia for complex applications',
  ],

  // Angular libraries
  [Library.ANGULAR_CODING_STANDARDS]: [
    'Use standalone components, directives, and pipes instead of NgModules',
    'Implement signals for state management instead of traditional RxJS-based approaches',
    'Use the new inject function instead of constructor injection',
    'Implement control flow with @if, @for, and @switch instead of *ngIf, *ngFor, etc.',
    'Leverage functional guards and resolvers instead of class-based ones',
    'Use the new deferrable views for improved loading states',
    'Implement OnPush change detection strategy for improved performance',
    'Use TypeScript decorators with explicit visibility modifiers (public, private)',
    'Leverage Angular CLI for schematics and code generation',
    'Implement proper lazy loading with loadComponent and loadChildren',
  ],
  [Library.NGRX]: [
    'Use the createFeature and createReducer functions to simplify reducer creation',
    'Implement the facade pattern to abstract NgRx implementation details from components',
    'Use entity adapter for collections to standardize CRUD operations',
    'Leverage selectors with memoization to efficiently derive state and prevent unnecessary calculations',
    'Implement @ngrx/effects for handling side effects like API calls',
    'Use action creators with typed payloads to ensure type safety throughout the application',
    'Implement @ngrx/component-store for local state management in complex components',
    'Use @ngrx/router-store to connect the router to the store',
    'Leverage @ngrx/entity-data for simplified entity management',
    'Implement the concatLatestFrom operator for effects that need state with actions',
  ],
  [Library.ANGULAR_MATERIAL]: [
    'Create a dedicated module for Angular Material imports to keep the app module clean',
    'Use theme mixins to customize component styles instead of overriding CSS',
    'Implement OnPush change detection for performance critical components',
    'Leverage the CDK (Component Development Kit) for custom component behaviors',
    "Use Material's form field components with reactive forms for consistent validation UX",
    'Implement accessibility attributes and ARIA labels for interactive components',
    'Use the new Material 3 design system updates where available',
    'Leverage the Angular Material theming system for consistent branding',
    'Implement proper typography hierarchy using the Material typography system',
    "Use Angular Material's built-in a11y features like focus indicators and keyboard navigation",
  ],

  // Svelte libraries
  [Library.SVELTE_CODING_STANDARDS]: [
    'Use runes for $state, $effect and $props management instead of the $ prefix',
    'Use the $ prefix for reactive store values instead of manual store subscription',
    'Use slot props for better component composition',
    'Leverage the :global() modifier sparingly for global CSS',
    'Implement Svelte transitions and animations for smooth UI changes',
    'Use $effect rune for derived state',
    'Use simple callback props instead of createEventDispatcher',
    'Use lifecycle functions (onMount, onDestroy) for setup and cleanup',
    'Leverage special elements like <svelte:window> and <svelte:component> for dynamic behavior',
  ],
  [Library.SVELTE_KIT]: [
    'Use server-side load functions to fetch data before rendering pages',
    'Implement form actions for handling form submissions with progressive enhancement',
    'Use page stores ($page) to access route parameters and other page data',
    "Leverage SvelteKit's server-only modules for sensitive operations",
    'Implement +error.svelte files for custom error handling at the route level',
    'Use the enhance function for progressive enhancement of forms',
    'Leverage SvelteKit hooks for global middleware functionality',
    'Implement route groups (folders with parentheses) for logical organization without URL impact',
    'Use the new Embedded SvelteKit plugin system',
    'Implement content negotiation with accept header in load functions',
  ],

  // Astro libraries
  [Library.ASTRO_CODING_STANDARDS]: [
    'Use Astro components (.astro) for static content and layout',
    'Implement framework components in {{framework_name}} only when interactivity is needed',
    'Leverage View Transitions API for smooth page transitions',
    'Use content collections with type safety for blog posts, documentation, etc.',
    'Implement middleware for request/response modification',
    'Use image optimization with the Astro Image integration',
    'Leverage Server Endpoints for API routes',
    'Implement hybrid rendering with server-side rendering where needed',
    'Use Astro.cookies for server-side cookie management',
    'Leverage import.meta.env for environment variables',
  ],
  [Library.ASTRO_ISLANDS]: [
    'Use client:visible directive for components that should hydrate when visible in viewport',
    'Implement shared state with nanostores instead of prop drilling between islands',
    'Use content collections for type-safe content management of structured content',
    'Leverage client:media directive for components that should only hydrate at specific breakpoints',
    'Implement partial hydration strategies to minimize JavaScript sent to the client',
    'Use client:only for components that should never render on the server',
    'Leverage client:idle for non-critical UI elements that can wait until the browser is idle',
    'Implement client:load for components that should hydrate immediately',
    "Use Astro's transition:* directives for view transitions between pages",
    'Leverage props for passing data from Astro to framework components',
  ],

  // CSS and Design libraries
  [Library.TAILWIND]: [
    'Use the @layer directive to organize styles into components, utilities, and base layers',
    'Implement Just-in-Time (JIT) mode for development efficiency and smaller CSS bundles',
    'Use arbitrary values with square brackets (e.g., w-[123px]) for precise one-off designs',
    'Leverage the @apply directive in component classes to reuse utility combinations',
    'Implement the Tailwind configuration file for customizing theme, plugins, and variants',
    'Use component extraction for repeated UI patterns instead of copying utility classes',
    'Leverage the theme() function in CSS for accessing Tailwind theme values',
    'Implement dark mode with the dark: variant',
    'Use responsive variants (sm:, md:, lg:, etc.) for adaptive designs',
    'Leverage state variants (hover:, focus:, active:, etc.) for interactive elements',
  ],
  [Library.STYLED_COMPONENTS]: [
    'Use the ThemeProvider for consistent theming across components',
    'Implement the css helper for sharing styles between components',
    'Use props for conditional styling within template literals',
    'Leverage the createGlobalStyle for global styling',
    'Implement attrs method to pass HTML attributes to the underlying DOM elements',
    'Use the as prop for dynamic component rendering',
    'Leverage styled(Component) syntax for extending existing components',
    'Implement the css prop for one-off styling needs',
    'Use the & character for nesting selectors',
    'Leverage the keyframes helper for animations',
  ],
  [Library.SCSS]: [
    'Use the ThemeProvider for consistent theming across components',
    'Implement the css helper for sharing styles between components',
    'Use props for conditional styling within template literals',
    'Leverage the createGlobalStyle for global styling',
    'Implement attrs method to pass HTML attributes to the underlying DOM elements',
    'Use the as prop for dynamic component rendering',
    'Leverage styled(Component) syntax for extending existing components',
    'Implement the css prop for one-off styling needs',
    'Use the & character for nesting selectors',
    'Leverage the keyframes helper for animations',
  ],
};
