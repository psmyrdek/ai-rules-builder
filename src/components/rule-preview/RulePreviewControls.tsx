import React, { useState } from 'react';
import { useProjectStore } from '../../store/projectStore';

interface RulePreviewControlsProps {
  markdown: string;
}

export const RulePreviewControls: React.FC<RulePreviewControlsProps> = ({
  markdown,
}) => {
  const { projectName } = useProjectStore();
  const [selectedFormat, setSelectedFormat] = useState<
    'github' | 'cursor' | 'windsurf'
  >('github');
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);

  // Get the appropriate file path based on the selected format
  const getFilePath = (): string => {
    switch (selectedFormat) {
      case 'github':
        return '.github/copilot-instructions.md';
      case 'cursor':
        return '.cursor/rules.md';
      case 'windsurf':
        return '.windsurfrules';
    }
  };

  // Copy the markdown content to clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      setShowCopiedMessage(true);
      setTimeout(() => setShowCopiedMessage(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = markdown;
      textArea.style.position = 'fixed';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        const successful = document.execCommand('copy');
        if (successful) {
          setShowCopiedMessage(true);
          setTimeout(() => setShowCopiedMessage(false), 2000);
        }
      } catch (err) {
        console.error('Fallback: Could not copy text: ', err);
      }

      document.body.removeChild(textArea);
    }
  };

  // Download the markdown content as a file
  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([markdown], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = getFilePath().split('/').pop() || 'rules.md';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="mt-4 p-4 bg-gray-800 rounded-lg">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-400">Export for:</span>
          <div className="flex space-x-1">
            <button
              onClick={() => setSelectedFormat('github')}
              className={`px-3 py-1 text-xs rounded-md ${
                selectedFormat === 'github'
                  ? 'bg-indigo-700 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              GitHub Copilot
            </button>
            <button
              onClick={() => setSelectedFormat('cursor')}
              className={`px-3 py-1 text-xs rounded-md ${
                selectedFormat === 'cursor'
                  ? 'bg-indigo-700 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Cursor
            </button>
            <button
              onClick={() => setSelectedFormat('windsurf')}
              className={`px-3 py-1 text-xs rounded-md ${
                selectedFormat === 'windsurf'
                  ? 'bg-indigo-700 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Windsurf
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <div className="text-sm text-gray-400 flex-1 sm:flex-none">
            Path: <span className="text-white font-mono">{getFilePath()}</span>
          </div>
          <button
            onClick={handleCopy}
            className={`px-3 py-1 ${
              showCopiedMessage
                ? 'bg-green-700 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            } rounded-md flex items-center transition-colors duration-200`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {showCopiedMessage ? (
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              ) : (
                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
              )}
              {!showCopiedMessage && (
                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
              )}
            </svg>
            {showCopiedMessage ? 'Copied!' : 'Copy'}
          </button>
          <button
            onClick={handleDownload}
            className="px-3 py-1 bg-indigo-700 text-white rounded-md hover:bg-indigo-600 flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default RulePreviewControls;
