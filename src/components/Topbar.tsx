import { WandSparkles } from 'lucide-react';
import DependencyUploader from './rule-parser/DependencyUploader';

interface TopbarProps {
  title?: string;
}

export default function Topbar({ title = 'AI Rules Builder' }: TopbarProps) {
  return (
    <header className="sticky top-0 z-10 w-full bg-gray-900 border-b border-gray-800 p-4 px-6 shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3 group">
          <WandSparkles className="size-4 text-blue-400 group-hover:text-teal-400 transition-colors duration-300" />
          <h1 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent group-hover:from-teal-400 group-hover:to-purple-400 transition-colors duration-300">
            {title}
          </h1>
        </div>

        <DependencyUploader />
      </div>
    </header>
  );
}
