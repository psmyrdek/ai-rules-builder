import { Check } from 'lucide-react';
import React from 'react';
import { Library } from '../../data/dictionaries';
import type { LayerType } from '../../styles/theme';
import { getLayerClasses } from '../../styles/theme';

interface LibraryItemProps {
  library: Library;
  isSelected: boolean;
  onToggle: (library: Library) => void;
  layerType: LayerType;
}

export const LibraryItem: React.FC<LibraryItemProps> = React.memo(
  ({ library, isSelected, onToggle, layerType }) => {
    const itemClasses = getLayerClasses.libraryItem(layerType, isSelected);

    return (
      <button
        className={`flex justify-between w-full items-center gap-2 px-3 py-2 text-sm rounded-md border transition-all duration-150 ${itemClasses}`}
        onClick={() => onToggle(library)}
      >
        <span className="font-medium text-white">{library}</span>
        {isSelected && (
          <Check 
            className={`size-4 ${getLayerClasses.text(layerType)}`} 
          />
        )}
      </button>
    );
  }
);

LibraryItem.displayName = 'LibraryItem';
