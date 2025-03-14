import { WandSparkles } from 'lucide-react';

interface TopbarProps {
  title?: string;
}

export default function Topbar({ title = 'AI Rules Builder' }: TopbarProps) {
  return (
    <header className="sticky top-0 z-10 w-full bg-gray-900 border-b border-gray-800 p-4 shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <WandSparkles className="size-4 mr-2 text-purple-500" />
          <h1 className="text-xl font-semibold text-white">{title}</h1>
        </div>
      </div>
    </header>
  );
}
