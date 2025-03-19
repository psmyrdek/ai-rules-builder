import React from 'react';
import {
  Layer,
  Library,
  Stack,
  getStacksByLayer,
} from '../../data/dictionaries';
import type { LayerType } from '../../styles/theme';
import { getLayerClasses } from '../../styles/theme';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/Accordion';
import { StackItem } from './StackItem';

interface LayerItemProps {
  layer: Layer;
  isOpen: boolean;
  hasSelected: boolean;
  selectedCount: number;
  toggleLayer: (layer: Layer) => void;
  isStackOpen: (stack: Stack) => boolean;
  toggleStack: (stack: Stack) => void;
  getSelectedLibrariesCount: (stack: Stack) => number;
  hasStackSelectedLibraries: (stack: Stack) => boolean;
  handleLibraryToggle: (library: Library) => void;
  isLibrarySelected: (library: Library) => boolean;
  getLayerType: (layer: Layer) => LayerType;
  getStackLayerType: (stack: Stack) => LayerType;
}

export const LayerItem: React.FC<LayerItemProps> = React.memo(
  ({
    layer,
    isOpen,
    hasSelected,
    selectedCount,
    toggleLayer,
    isStackOpen,
    toggleStack,
    getSelectedLibrariesCount,
    hasStackSelectedLibraries,
    handleLibraryToggle,
    isLibrarySelected,
    getLayerType,
    getStackLayerType,
  }) => {
    const layerType = getLayerType(layer);
    const containerClasses = getLayerClasses.container(layerType, hasSelected);
    const openClasses = getLayerClasses.openState(layerType, isOpen);

    return (
      <AccordionItem key={layer} value={layer}>
        <div
          className={`rounded-lg transition-all duration-150 ${containerClasses} ${openClasses}`}
        >
          <AccordionTrigger
            onClick={() => toggleLayer(layer)}
            isOpen={isOpen}
            className="font-medium"
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <span className="font-medium text-white">{layer}</span>
                {selectedCount > 0 && (
                  <span
                    className={`px-2 py-0.5 text-xs font-semibold ${getLayerClasses.badge(layerType)} rounded-full shadow-sm`}
                  >
                    {selectedCount} selected
                  </span>
                )}
              </div>
              <span
                className={`px-2 py-1 text-xs rounded-full ${getLayerClasses.badge(layerType)}`}
              >
                {getStacksByLayer(layer).length} groups
              </span>
            </div>
          </AccordionTrigger>

          <AccordionContent isOpen={isOpen}>
            <Accordion type="multiple" className="mt-2 space-y-2">
              {getStacksByLayer(layer).map((stack) => (
                <StackItem
                  key={stack}
                  stack={stack}
                  isOpen={isStackOpen(stack)}
                  hasSelected={hasStackSelectedLibraries(stack)}
                  selectedCount={getSelectedLibrariesCount(stack)}
                  toggleStack={toggleStack}
                  handleLibraryToggle={handleLibraryToggle}
                  isLibrarySelected={isLibrarySelected}
                  layerType={getStackLayerType(stack)}
                />
              ))}
            </Accordion>
          </AccordionContent>
        </div>
      </AccordionItem>
    );
  }
);

LayerItem.displayName = 'LayerItem';
