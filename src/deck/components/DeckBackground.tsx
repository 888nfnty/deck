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

      {/* Liquid-metal sheen */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.25] mix-blend-screen"
        style={{
          background:
            'linear-gradient(120deg, rgba(255,255,255,0.14) 0%, rgba(0,38,255,0.20) 35%, rgba(255,255,255,0.04) 60%, rgba(76,82,111,0.22) 100%), radial-gradient(1000px circle at 15% 20%, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0) 55%), radial-gradient(1200px circle at 85% 80%, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 60%)',
        }}
      />

      {/* Color wash */}
      <div
        className="pointer-events-none fixed inset-0 mix-blend-color opacity-[0.35]"
        style={{
          background:
            'radial-gradient(900px circle at 70% 10%, rgba(0,38,255,0.40) 0%, rgba(0,38,255,0.0) 55%), radial-gradient(800px circle at 20% 70%, rgba(76,82,111,0.28) 0%, rgba(76,82,111,0.0) 60%)',
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
