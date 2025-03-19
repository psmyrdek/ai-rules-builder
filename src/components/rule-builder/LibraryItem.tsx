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
        className={`flex gap-2 justify-between items-center px-3 py-2 w-full text-sm rounded-md transition-all duration-150 cursor-pointer ${itemClasses}`}
        onClick={() => onToggle(library)}
      >
        <span className="font-medium text-white">{library}</span>
        {isSelected && (
          <Check className={`size-4 ${getLayerClasses.text(layerType)}`} />
        )}
      </button>
    );
  }
);

LibraryItem.displayName = 'LibraryItem';
