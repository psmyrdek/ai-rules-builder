import { WandSparkles } from 'lucide-react';

interface TopbarProps {
  title?: string;
}

export default function Topbar({ title = 'AI Rules Builder' }: TopbarProps) {
  return (
    <header className="sticky top-0 z-10 w-full bg-gray-900 border-b border-gray-800 p-4 px-6 shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <WandSparkles className="size-4 text-purple-400" />
          <h1 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            {title}
          </h1>
        </div>
      </div>
    </header>
  );
}
