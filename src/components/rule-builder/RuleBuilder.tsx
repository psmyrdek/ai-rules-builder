import { Trash2 } from 'lucide-react';
import React from 'react';
import { Layer, Library } from '../../data/dictionaries';
import { Accordion } from '../ui/Accordion';
import { useRuleBuilder } from './hooks/useRuleBuilder';
import { LayerItem } from './LayerItem';
import { SelectedRules } from './SelectedRules';

export const RuleBuilder: React.FC = () => {
  const {
    layers,
    selectedLibraries,
    isLayerOpen,
    isStackOpen,
    toggleLayer,
    toggleStack,
    getSelectedLibrariesCount,
    getSelectedLibrariesCountForLayer,
    hasSelectedLibraries,
    hasStackSelectedLibraries,
    handleLibraryToggle,
    isLibrarySelected,
    unselectLibrary,
    handleClearAll,
    getLayerType,
    getStackLayerType,
    getLibraryLayerType,
  } = useRuleBuilder();

  return (
    <div className="flex flex-col space-y-4">
      <div className="p-6 space-y-5 rounded-lg shadow-lg bg-gray-900/90">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-white">Rule Builder</h2>

          <button
            onClick={handleClearAll}
            className={`flex gap-2 items-center px-3 py-1.5 text-sm bg-gray-800/50 rounded-md transition-colors hover:bg-gray-700/50 text-gray-400 cursor-pointer hover:shadow-sm ${
              selectedLibraries.length > 0 ? 'opacity-100' : 'opacity-0'
            }`}
            title="Clear all selections"
          >
            <Trash2 className="size-4" />
            <span>Clear all</span>
          </button>
        </div>

        <Accordion type="multiple" className="space-y-3">
          {layers.map((layer) => {
            const selectedCount = getSelectedLibrariesCountForLayer(layer);
            const isOpen = isLayerOpen(layer);
            const hasSelected = hasSelectedLibraries(layer);

            return (
              <LayerItem
                key={layer}
                layer={layer}
                isOpen={isOpen}
                hasSelected={hasSelected}
                selectedCount={selectedCount}
                toggleLayer={toggleLayer}
                isStackOpen={isStackOpen}
                toggleStack={toggleStack}
                getSelectedLibrariesCount={getSelectedLibrariesCount}
                hasStackSelectedLibraries={hasStackSelectedLibraries}
                handleLibraryToggle={handleLibraryToggle}
                isLibrarySelected={isLibrarySelected}
                getLayerType={getLayerType}
                getStackLayerType={getStackLayerType}
              />
            );
          })}
        </Accordion>
      </div>

      <SelectedRules
        selectedLibraries={selectedLibraries}
        unselectLibrary={unselectLibrary}
        getLibraryLayerType={getLibraryLayerType}
      />
    </div>
  );
};

export default React.memo(RuleBuilder);
