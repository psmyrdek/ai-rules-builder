import React from 'react';
import { useProjectStore } from '../../store/projectStore';

export const RulesPath: React.FC = () => {
  const { selectedEnvironment } = useProjectStore();

  // Get the appropriate file path based on the selected format
  const getFilePath = (): string => {
    switch (selectedEnvironment) {
      case 'github':
        return '.github/copilot-instructions.md';
      case 'cursor':
        return '.cursor/rules.md';
      case 'windsurf':
        return '.windsurfrules';
      case 'aider':
        return 'CONVENTIONS.md';
      case 'junie':
        return '.junie/guidelines.md';
    }
  };

  return (
    <div className="text-sm text-gray-400 w-full break-all">
      Path: <span className="text-white font-mono">{getFilePath()}</span>
    </div>
  );
};

export default RulesPath;
