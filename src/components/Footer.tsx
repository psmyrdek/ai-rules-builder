import { Bot, Wrench, Rocket } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 p-4 border-t border-gray-800">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
          <span className="text-sm">
            {new Date().getFullYear()} AI Rules Builder by 10xDevs
          </span>
        </div>
        <div className="flex gap-6 text-sm">
          <a
            href="https://10xdevs.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 ease-in-out flex items-center"
          >
            <Rocket className="size-4 mr-1" />
            10xDevs
          </a>
          <a
            href="https://opanuj.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 ease-in-out flex items-center"
          >
            <Bot className="size-4 mr-1" />
            Opanuj.ai
          </a>
          <a
            href="https://github.com/przeprogramowani/ai-rules-builder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 ease-in-out flex items-center"
          >
            <Wrench className="size-4 mr-1" />
            Contribute
          </a>
        </div>
      </div>
    </footer>
  );
}
