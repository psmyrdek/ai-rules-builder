import { ChevronDown } from 'lucide-react';
import React, { useRef, useEffect, useState } from 'react';

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
    return <div className="rounded-lg">{children}</div>;
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
          className={`size-4 transition-transform duration-200 ${
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
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<number>(0);
    
    useEffect(() => {
      if (contentRef.current) {
        const contentHeight = contentRef.current.scrollHeight;
        setHeight(contentHeight);
      }
    }, [children, isOpen]);
    
    return (
      <div 
        className="overflow-hidden"
        style={{
          height: isOpen ? `${height}px` : '0px',
          transition: 'height 300ms cubic-bezier(0.4, 0, 0.2, 1)',
          willChange: 'height',
        }}
      >
        <div 
          ref={contentRef}
          className={`px-4 pb-4 ${className}`}
          style={{
            opacity: isOpen ? 1 : 0,
            transition: 'opacity 200ms ease-in-out',
            transitionDelay: isOpen ? '100ms' : '0ms',
          }}
        >
          {children}
        </div>
      </div>
    );
  }
);
AccordionContent.displayName = 'AccordionContent';
