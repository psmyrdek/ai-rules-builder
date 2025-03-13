import React, { useState } from 'react';
import { Layer, Stack, Library } from '../../data/dictionaries';
import { useTechStackStore } from '../../store/techStackStore';
import LayerSelector from './LayerSelector';
import StackSelector from './StackSelector';
import LibrarySelector from './LibrarySelector';

// Navigation view states
type ViewState = 'layers' | 'stacks' | 'libraries';

export const RuleBuilder: React.FC = () => {
  // Track the current view
  const [currentView, setCurrentView] = useState<ViewState>('layers');

  // Track selected items for navigation
  const [activeLayer, setActiveLayer] = useState<Layer | null>(null);
  const [activeStack, setActiveStack] = useState<Stack | null>(null);

  // Get selected libraries from store
  const { selectedLibraries } = useTechStackStore();

  // Navigation handlers
  const handleLayerSelect = (layer: Layer) => {
    setActiveLayer(layer);
    setCurrentView('stacks');
  };

  const handleStackSelect = (stack: Stack) => {
    setActiveStack(stack);
    setCurrentView('libraries');
  };

  const handleBackToLayers = () => {
    setCurrentView('layers');
  };

  const handleBackToStacks = () => {
    setCurrentView('stacks');
  };

  // Render the appropriate view based on navigation state
  const renderCurrentView = () => {
    switch (currentView) {
      case 'layers':
        return <LayerSelector onSelectLayer={handleLayerSelect} />;

      case 'stacks':
        if (!activeLayer) return <div>No layer selected</div>;
        return (
          <StackSelector
            selectedLayer={activeLayer}
            onSelectStack={handleStackSelect}
            onBackToLayers={handleBackToLayers}
          />
        );

      case 'libraries':
        if (!activeStack) return <div>No stack selected</div>;
        return (
          <LibrarySelector
            selectedStack={activeStack}
            onBackToStacks={handleBackToStacks}
          />
        );

      default:
        return <div>Unknown view</div>;
    }
  };

  return (
    <div className="p-4 bg-gray-900 rounded-lg space-y-4">
      {selectedLibraries.length > 0 && (
        <div className="mt-2 text-sm text-gray-400">
          {selectedLibraries.length} libraries selected
        </div>
      )}

      {renderCurrentView()}
    </div>
  );
};

export default RuleBuilder;
