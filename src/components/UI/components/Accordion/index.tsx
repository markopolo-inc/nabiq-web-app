import { useState } from 'react';

interface AccordionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Accordion = ({ title, icon, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='border rounded-xl w-full shadow-sm p-6'>
      <button
        className='w-full flex items-center justify-between hover:bg-gray-50'
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='flex items-center gap-3'>
          {icon && <span>{icon}</span>}
          <span className='font-semibold text-gray-900'>{title}</span>
        </div>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill='none'
          stroke='#697586'
          viewBox='0 0 24 24'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className='pt-4'>{children}</div>
      </div>
    </div>
  );
};
