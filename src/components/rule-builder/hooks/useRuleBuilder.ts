import { useState, useCallback, useMemo } from 'react';
import {
  Layer,
  Library,
  Stack,
  getLibrariesByStack,
  getStacksByLayer,
} from '../../../data/dictionaries';
import { useTechStackStore } from '../../../store/techStackStore';
import type { LayerType } from '../../../styles/theme';
import { layerToType } from '../../../styles/theme';

export const useRuleBuilder = () => {
  const {
    selectedLibraries,
    selectLayer,
    selectStack,
    selectLibrary,
    unselectLibrary,
    isLibrarySelected,
    resetAll,
  } = useTechStackStore();

  // State for tracking open accordions
  const [openLayers, setOpenLayers] = useState<Set<string>>(new Set());
  const [openStacks, setOpenStacks] = useState<Set<string>>(new Set());

  // Get all available layers
  const layers = useMemo(() => Object.values(Layer), []);

  // Function to get layer type for a layer
  const getLayerType = useCallback((layer: Layer): LayerType => {
    return layerToType(layer);
  }, []);

  // Function to get layer type for a stack based on its layer
  const getStackLayerType = useCallback((stack: Stack): LayerType => {
    // Find the layer this stack belongs to
    const layer = layers.find(l => getStacksByLayer(l).includes(stack));
    return layer ? getLayerType(layer) : 'craftsmanship';
  }, [layers, getLayerType]);

  // Helper functions for accordion state
  const isLayerOpen = useCallback(
    (layer: Layer) => openLayers.has(layer),
    [openLayers]
  );
  
  const isStackOpen = useCallback(
    (stack: Stack) => openStacks.has(stack),
    [openStacks]
  );

  // Toggle functions for accordions
  const toggleLayer = useCallback(
    (layer: Layer) => {
      setOpenLayers((prev) => {
        const newOpenLayers = new Set(prev);
        if (newOpenLayers.has(layer)) {
          newOpenLayers.delete(layer);
        } else {
          newOpenLayers.add(layer);
          selectLayer(layer);
        }
        return newOpenLayers;
      });
    },
    [selectLayer]
  );

  const toggleStack = useCallback(
    (stack: Stack) => {
      setOpenStacks((prev) => {
        const newOpenStacks = new Set(prev);
        if (newOpenStacks.has(stack)) {
          newOpenStacks.delete(stack);
        } else {
          newOpenStacks.add(stack);
          selectStack(stack);
        }
        return newOpenStacks;
      });
    },
    [selectStack]
  );

  // Check if any libraries from this layer are selected
  const hasSelectedLibraries = useCallback(
    (layer: Layer): boolean => {
      // Get all stacks for this layer
      const stacks = getStacksByLayer(layer);

      // Check if any libraries from these stacks are selected
      return stacks.some((stack) => {
        const libraries = getLibrariesByStack(stack);
        return libraries.some((library) => selectedLibraries.includes(library));
      });
    },
    [selectedLibraries]
  );

  // Check if any libraries from this stack are selected
  const hasStackSelectedLibraries = useCallback(
    (stack: Stack): boolean => {
      const libraries = getLibrariesByStack(stack);
      return libraries.some((library) => selectedLibraries.includes(library));
    },
    [selectedLibraries]
  );

  // Get count of selected libraries for a stack
  const getSelectedLibrariesCount = useCallback(
    (stack: Stack): number => {
      const libraries = getLibrariesByStack(stack);
      return libraries.filter((library) => selectedLibraries.includes(library))
        .length;
    },
    [selectedLibraries]
  );

  // Get count of selected libraries for a layer
  const getSelectedLibrariesCountForLayer = useCallback(
    (layer: Layer): number => {
      const stacks = getStacksByLayer(layer);
      let count = 0;
      stacks.forEach((stack) => {
        count += getSelectedLibrariesCount(stack);
      });
      return count;
    },
    [getSelectedLibrariesCount]
  );

  // Handle library toggle
  const handleLibraryToggle = useCallback(
    (library: Library) => {
      if (isLibrarySelected(library)) {
        unselectLibrary(library);
      } else {
        selectLibrary(library);
      }
    },
    [isLibrarySelected, selectLibrary, unselectLibrary]
  );

  // Handle clear all
  const handleClearAll = useCallback(() => {
    resetAll();
    setOpenLayers(new Set());
    setOpenStacks(new Set());
  }, [resetAll]);

  // Get layer type for a library based on its related stack
  const getLibraryLayerType = useCallback((library: Library): LayerType => {
    // Find first stack that contains this library
    const stacks = Object.values(Stack);
    for (const stack of stacks) {
      if (getLibrariesByStack(stack).includes(library)) {
        return getStackLayerType(stack);
      }
    }
    return 'craftsmanship';
  }, [getStackLayerType]);

  return {
    // State
    layers,
    selectedLibraries,
    
    // Accordion state
    openLayers,
    openStacks,
    isLayerOpen,
    isStackOpen,
    toggleLayer,
    toggleStack,
    
    // Library functions
    getSelectedLibrariesCount,
    getSelectedLibrariesCountForLayer,
    hasSelectedLibraries,
    hasStackSelectedLibraries,
    handleLibraryToggle,
    isLibrarySelected,
    unselectLibrary,
    
    // Actions
    handleClearAll,
    
    // Layer types for styling
    getLayerType,
    getStackLayerType,
    getLibraryLayerType,
  };
};
