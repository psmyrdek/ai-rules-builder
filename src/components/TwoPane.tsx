import React from 'react';
import { RuleBuilder } from './rule-builder';
import { RulePreview } from './rule-preview';

export default function TwoPane() {
  return (
    <main className="flex flex-grow bg-gray-950 overflow-hidden">
      {/* Left Pane - Rule Builder */}
      <div className="w-1/3 border-r border-gray-800 overflow-y-auto p-4">
        <RuleBuilder />
      </div>

      {/* Right Pane - Rules Output */}
      <div className="w-2/3 overflow-y-auto p-4">
        <RulePreview />
      </div>
    </main>
  );
}
