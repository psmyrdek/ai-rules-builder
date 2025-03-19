import React from 'react';
import { Library, Stack, getLibrariesByStack } from '../../data/dictionaries';
import type { LayerType } from '../../styles/theme';
import { getLayerClasses } from '../../styles/theme';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/Accordion';
import { LibraryItem } from './LibraryItem';

interface StackItemProps {
  stack: Stack;
  isOpen: boolean;
  hasSelected: boolean;
  selectedCount: number;
  toggleStack: (stack: Stack) => void;
  handleLibraryToggle: (library: Library) => void;
  isLibrarySelected: (library: Library) => boolean;
  layerType: LayerType;
}

export const StackItem: React.FC<StackItemProps> = React.memo(
  ({
    stack,
    isOpen,
    hasSelected,
    selectedCount,
    toggleStack,
    handleLibraryToggle,
    isLibrarySelected,
    layerType,
  }) => {
    const containerClasses = getLayerClasses.stackContainer(layerType, hasSelected);
    const openClasses = getLayerClasses.openState(layerType, isOpen);

    return (
      <AccordionItem key={stack} value={stack}>
        <div
          className={`rounded-lg transition-all duration-150 ${containerClasses} ${openClasses}`}
        >
          <AccordionTrigger onClick={() => toggleStack(stack)} isOpen={isOpen}>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <span className="font-medium text-white">{stack}</span>
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
                {getLibrariesByStack(stack).length} tools
              </span>
            </div>
          </AccordionTrigger>

          <AccordionContent isOpen={isOpen}>
            <div className="mt-2 space-y-2">
              {getLibrariesByStack(stack).map((library) => (
                <LibraryItem
                  key={library}
                  library={library}
                  isSelected={isLibrarySelected(library)}
                  onToggle={handleLibraryToggle}
                  layerType={layerType}
                />
              ))}
            </div>
          </AccordionContent>
        </div>
      </AccordionItem>
    );
  }
);

StackItem.displayName = 'StackItem';
