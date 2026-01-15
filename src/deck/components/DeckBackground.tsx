import React from 'react';

export const DeckBackground: React.FC = () => {
  return (
    <>
      {/* Grid overlay */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '96px 96px',
        }}
      />

      {/* Color wash */}
      <div
        className="pointer-events-none fixed inset-0 mix-blend-color opacity-[0.35]"
        style={{
          background:
            'radial-gradient(900px circle at 70% 10%, rgba(0,38,255,0.35) 0%, rgba(0,38,255,0.0) 55%), radial-gradient(700px circle at 20% 70%, rgba(0,255,0,0.12) 0%, rgba(0,255,0,0.0) 55%)',
        }}
      />

      {/* Vignette */}
      <div
        className="pointer-events-none fixed inset-0 opacity-80"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.55) 100%)',
        }}
      />
    </>
  );
};
