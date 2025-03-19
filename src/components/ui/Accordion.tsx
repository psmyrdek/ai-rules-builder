import { ChevronDown } from 'lucide-react';
import React from 'react';

interface AccordionProps {
  type: 'single' | 'multiple';
  collapsible?: boolean;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = React.memo(
  ({ children, className = '', ...props }) => {
    return <div className={`space-y-2 ${className}`}>{children}</div>;
  }
);
Accordion.displayName = 'Accordion';

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
}

export const AccordionItem: React.FC<AccordionItemProps> = React.memo(
  ({ children, ...props }) => {
    return <div className="overflow-hidden rounded-lg">{children}</div>;
  }
);
AccordionItem.displayName = 'AccordionItem';

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isOpen?: boolean;
}

export const AccordionTrigger: React.FC<AccordionTriggerProps> = React.memo(
  ({ children, className = '', onClick, isOpen = false, ...props }) => {
    return (
      <div
        className={`flex justify-between items-center p-4 transition-all cursor-pointer ${className}`}
        onClick={onClick}
      >
        <div className="flex-1">{children}</div>
        <ChevronDown
          className={`size-4 transition-transform duration-150 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </div>
    );
  }
);
AccordionTrigger.displayName = 'AccordionTrigger';

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
  isOpen?: boolean;
}

export const AccordionContent: React.FC<AccordionContentProps> = React.memo(
  ({ children, className = '', isOpen = false, ...props }) => {
    if (!isOpen) return null;

    return <div className={`px-4 pt-0 pb-4 ${className}`}>{children}</div>;
  }
);
AccordionContent.displayName = 'AccordionContent';
