import React from 'react';
import { RuleBuilder } from './rule-builder';
import { RulePreview } from './rule-preview';

export default function TwoPane() {
  return (
    <div className="flex h-screen bg-gray-950">
      {/* Left Pane - Rule Builder */}
      <div className="w-1/3 border-r border-gray-800 overflow-y-auto p-4">
        <RuleBuilder />
      </div>
      
      {/* Right Pane - Rules Output */}
      <div className="w-2/3 p-4 overflow-y-auto">
        <RulePreview />
      </div>
    </div>
  );
}
