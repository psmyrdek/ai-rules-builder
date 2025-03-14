import React, { useState } from 'react';
import { Layer, Stack, Library } from '../../data/dictionaries';
import { useTechStackStore } from '../../store/techStackStore';
import LayerSelector from './LayerSelector';
import StackSelector from './StackSelector';
import LibrarySelector from './LibrarySelector';
import { Trash2 } from 'lucide-react';

// Navigation view states
type ViewState = 'layers' | 'stacks' | 'libraries';

export const RuleBuilder: React.FC = () => {
  // Track the current view
  const [currentView, setCurrentView] = useState<ViewState>('layers');

  // Track selected items for navigation
  const [activeLayer, setActiveLayer] = useState<Layer | null>(null);
  const [activeStack, setActiveStack] = useState<Stack | null>(null);

  // Get selected libraries from store
  const { selectedLibraries, resetAll } = useTechStackStore();

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

  const handleClearAll = () => {
    resetAll();
    setActiveLayer(null);
    setActiveStack(null);
    setCurrentView('layers');
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
    <>
      <div className="p-4 bg-gray-900 rounded-lg space-y-4">
        {renderCurrentView()}
      </div>
      {selectedLibraries.length > 0 && (
        <div className="flex justify-end mt-4">
          <button
            onClick={handleClearAll}
            className="flex items-center gap-1 text-xs text-gray-400 transition-colors px-2 py-1 rounded hover:bg-gray-800 hover:text-red-400"
            title="Clear all selections"
          >
            <Trash2 className="size-3" />
            <span>Clear all</span>
          </button>
        </div>
      )}
    </>
  );
};

export default RuleBuilder;
