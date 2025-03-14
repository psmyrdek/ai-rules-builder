import React from 'react';
import { useProjectStore } from '../../store/projectStore';
import { RulesPath } from './RulesPath';
import { RulesPreviewActions } from './RulesPreviewActions';

interface RulePreviewTopbarProps {
  markdown: string;
}

export const RulePreviewTopbar: React.FC<RulePreviewTopbarProps> = ({
  markdown,
}) => {
  const { selectedEnvironment, setSelectedEnvironment, isHydrated } =
    useProjectStore();

  // If state hasn't been hydrated from storage yet, don't render the selector
  // This prevents the "blinking" effect when loading persisted state
  if (!isHydrated) {
    return (
      <div className="p-2 bg-gray-800 rounded-lg">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0 opacity-0">
          {/* Invisible placeholder content with the same structure to prevent layout shift */}
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="px-3 py-1 text-xs rounded-md bg-gray-700"></div>
              <div className="px-3 py-1 text-xs rounded-md bg-gray-700"></div>
              <div className="px-3 py-1 text-xs rounded-md bg-gray-700"></div>
            </div>
          </div>
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <div className="text-sm flex-1 sm:flex-none"></div>
            <div className="px-3 py-1 rounded-md"></div>
            <div className="px-3 py-1 rounded-md"></div>
            <div className="px-3 py-1 rounded-md"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-2 bg-gray-800 rounded-lg">
      <div className="flex flex-col sm:flex-row justify-between items-start space-y-3 sm:space-y-0">
        {/* Left side: Environment selector buttons and path */}
        <div className="flex flex-col space-y-2 w-full sm:w-auto">
          {/* Environment selector buttons - make them wrap on small screens */}
          <div className="flex flex-wrap gap-1">
            <button
              onClick={() => setSelectedEnvironment('github')}
              className={`px-3 py-1 text-xs rounded-md ${
                selectedEnvironment === 'github'
                  ? 'bg-indigo-700 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Copilot
            </button>
            <button
              onClick={() => setSelectedEnvironment('cursor')}
              className={`px-3 py-1 text-xs rounded-md ${
                selectedEnvironment === 'cursor'
                  ? 'bg-indigo-700 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Cursor
            </button>
            <button
              onClick={() => setSelectedEnvironment('windsurf')}
              className={`px-3 py-1 text-xs rounded-md ${
                selectedEnvironment === 'windsurf'
                  ? 'bg-indigo-700 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Windsurf
            </button>
            <button
              onClick={() => setSelectedEnvironment('aider')}
              className={`px-3 py-1 text-xs rounded-md ${
                selectedEnvironment === 'aider'
                  ? 'bg-indigo-700 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Aider
            </button>
            <button
              onClick={() => setSelectedEnvironment('junie')}
              className={`px-3 py-1 text-xs rounded-md ${
                selectedEnvironment === 'junie'
                  ? 'bg-indigo-700 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Junie
            </button>
          </div>

          {/* Path display */}
          <RulesPath />
        </div>

        {/* Right side: Action buttons */}
        <div className="w-full sm:w-auto">
          <RulesPreviewActions markdown={markdown} />
        </div>
      </div>
    </div>
  );
};

export default RulePreviewTopbar;
