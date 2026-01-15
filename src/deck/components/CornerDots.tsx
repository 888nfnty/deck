import React from 'react';

export const CornerDots: React.FC = () => {
  return (
    <>
      <span className="pointer-events-none absolute -top-px -left-px h-3 w-3 border-t border-l border-white/70" />
      <span className="pointer-events-none absolute -top-px -right-px h-3 w-3 border-t border-r border-white/70" />
      <span className="pointer-events-none absolute -bottom-px -left-px h-3 w-3 border-b border-l border-white/70" />
      <span className="pointer-events-none absolute -bottom-px -right-px h-3 w-3 border-b border-r border-white/70" />
    </>
  );
};
