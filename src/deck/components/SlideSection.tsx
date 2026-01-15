import React from 'react';

type SlideSectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export const SlideSection: React.FC<SlideSectionProps> = ({ id, children, className }) => {
  return (
    <section
      id={id}
      data-deck-slide
      className={
        `relative min-h-screen snap-start scroll-mt-24 border-b border-white/10 ` +
        `flex items-stretch ${className ?? ''}`
      }
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-10 md:py-20">
        {children}
      </div>
    </section>
  );
};
