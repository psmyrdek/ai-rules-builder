import React, { useState, useEffect, useCallback } from 'react';
import { useTechStackStore } from '../../store/techStackStore';
import { useProjectStore } from '../../store/projectStore';
import { RulePreviewTopbar } from './RulePreviewTopbar';
import { RulesBuilderService } from '../../services/rulesBuilderService';
import { styleMarkdownContent } from '../../utils/markdownStyling';
import { useDependencyUpload } from '../rule-parser/useDependencyUpload';
import { FileUp } from 'lucide-react';

export const RulePreview: React.FC = () => {
  const { selectedLibraries } = useTechStackStore();
  const { projectName, projectDescription } = useProjectStore();
  const [markdownContent, setMarkdownContent] = useState<string>('');
  const [isDragging, setIsDragging] = useState(false);
  const { isUploading, uploadStatus, uploadDependencyFile } = useDependencyUpload();

  // Generate markdown content when libraries or project metadata changes
  useEffect(() => {
    const { markdown } = RulesBuilderService.generateRulesContent(
      projectName,
      projectDescription,
      selectedLibraries
    );

    setMarkdownContent(markdown);
  }, [selectedLibraries, projectName, projectDescription]);

  // Handle drag events
  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    async (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      const files = Array.from(e.dataTransfer.files);
      if (files.length > 0) {
        const file = files[0];
        // Check if it's a valid dependency file (json or txt)
        if (file.name.endsWith('.json') || file.name.endsWith('.txt')) {
          await uploadDependencyFile(file);
        } else {
          console.warn('Invalid file type. Please drop a package.json or requirements.txt file.');
        }
      }
    },
    [uploadDependencyFile]
  );

  return (
    <div 
      className="flex flex-col h-full pb-32 overflow-y-auto relative"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <RulePreviewTopbar markdown={markdownContent} />

      <div className="flex-1 overflow-y-auto bg-gray-900 rounded-lg p-4 mt-4 relative">
        <pre className="whitespace-pre-wrap text-gray-300 font-mono text-sm">
          {styleMarkdownContent(markdownContent)}
        </pre>
        
        {/* Dropzone overlay that appears when dragging */}
        {isDragging && (
          <div className="absolute inset-0 bg-gray-800 bg-opacity-80 flex flex-col items-center justify-center z-10 border-2 border-dashed border-blue-400 rounded-lg">
            <FileUp className="size-12 text-blue-400 mb-4" />
            <p className="text-blue-400 text-lg font-medium">Drop dependency file to identify libraries</p>
            <p className="text-gray-400 text-sm mt-2">Supported: package.json, requirements.txt</p>
          </div>
        )}
      </div>
      
      {/* Upload status message */}
      {uploadStatus.message && (
        <div className={`text-xs mt-2 ${uploadStatus.success ? 'text-green-400' : 'text-red-400'}`}>
          {uploadStatus.message}
        </div>
      )}
      
      <p className="text-gray-600 mt-4">
        Adjust these rules to match your project's specific needs.
      </p>
    </div>
  );
};

export default RulePreview;
