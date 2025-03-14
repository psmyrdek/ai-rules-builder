import { useState } from 'react';
import { Upload } from 'lucide-react';
import { useTechStackStore } from '../../store/techStackStore';
import { Library } from '../../data/dictionaries';

export default function DependencyUploader() {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});
  const { selectLibrary } = useTechStackStore();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const form = event.currentTarget;
    const formData = new FormData(form);
    const fileInput = form.querySelector('input[type="file"]') as HTMLInputElement;
    const file = fileInput?.files?.[0];
    
    if (!file) {
      setUploadStatus({
        success: false,
        message: 'Please select a file'
      });
      return;
    }
    
    try {
      setIsUploading(true);
      setUploadStatus({});
      
      console.log('Uploading file:', file.name, file.type, file.size);
      
      // Ensure formData has the file with the correct name
      formData.set('file', file);
      
      const response = await fetch('/api/upload-dependencies', {
        method: 'POST',
        // Do not set Content-Type header manually, let the browser set it with the boundary
        body: formData
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to upload file');
      }
      
      // Update the tech stack store with identified libraries
      if (data.libraries && Array.isArray(data.libraries)) {
        data.libraries.forEach((lib: Library) => {
          selectLibrary(lib);
        });
        
        setUploadStatus({
          success: true,
          message: `Found ${data.mappedLibraries} libraries from ${data.identifiedDependencies} dependencies`
        });
      } else {
        setUploadStatus({
          success: true,
          message: 'No libraries were identified in the file'
        });
      }
      
      // Reset the form
      form.reset();
      
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadStatus({
        success: false,
        message: error instanceof Error ? error.message : 'Failed to process file'
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Automatically submit the form when a file is selected
      const form = event.target.closest('form');
      if (form) {
        form.requestSubmit();
      }
    }
  };

  return (
    <div className="flex items-center flex-col sm:flex-row">
      <form 
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="flex items-center"
      >
        <label 
          htmlFor="file-upload"
          className={`
            flex items-center space-x-2 px-3 py-1.5 rounded-md 
            bg-gray-800 hover:bg-gray-700 text-gray-200 text-sm 
            transition-colors duration-200 cursor-pointer
            ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}
          `}
        >
          <Upload className="size-4" />
          <span>{isUploading ? 'Uploading...' : 'Upload from deps'}</span>
          <input
            id="file-upload"
            name="file"
            type="file"
            accept=".json,.txt"
            disabled={isUploading}
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
        <button 
          type="submit" 
          disabled={isUploading}
          className="hidden"
        >
          Upload
        </button>
      </form>
      
      {uploadStatus.message && (
        <div className={`text-xs ml-2 ${uploadStatus.success ? 'text-green-400' : 'text-red-400'}`}>
          {uploadStatus.message}
        </div>
      )}
    </div>
  );
}
