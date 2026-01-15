import React, { useMemo, useState } from 'react';
import { DECK_META } from '../deckContent';

type NavItem = {
  id: string;
  label: string;
};

type DeckSidebarProps = {
  items: readonly NavItem[];
  activeId: string;
  onNavigate: (id: string) => void;
};

export const DeckSidebar: React.FC<DeckSidebarProps> = ({ items, activeId, onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeLabel = useMemo(
    () => items.find((i) => i.id === activeId)?.label ?? items[0]?.label ?? 'Deck',
    [activeId, items]
  );

  return (
    <>
      {/* Desktop */}
      <aside className="hidden md:fixed md:inset-y-0 md:left-0 md:z-30 md:flex md:w-64 md:flex-col md:border-r md:border-white/10 md:bg-black/30 md:p-8 md:backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <img src="/better-isotype-light.svg" alt="BETTER" className="h-8 w-auto" />
          <div className="text-[12px] text-white/70">VC Deck</div>
        </div>

        <div className="mt-8 space-y-2">
          {items.map((item) => {
            const isActive = item.id === activeId;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={
                  `w-full text-left text-[12px] tracking-wide ` +
                  `border border-white/10 px-3 py-2 transition ` +
                  (isActive
                    ? 'bg-white/10 text-white border-white/20'
                    : 'bg-transparent text-white/70 hover:bg-white/5 hover:text-white')
                }
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="mt-auto pt-8">
          <a
            href={DECK_META.calendlyUrl}
            target="_blank"
            rel="noreferrer"
            className="block border border-white/20 bg-white/5 px-4 py-3 text-center text-[12px] tracking-wide text-white hover:bg-white/10"
          >
            Get in Touch
          </a>
          <div className="mt-4 text-[11px] leading-5 text-white/55">
            {DECK_META.siteUrl}
            <br />
            {DECK_META.handle} · {DECK_META.email}
          </div>
        </div>
      </aside>

      {/* Mobile */}
      <div className="md:hidden sticky top-0 z-40 border-b border-white/10 bg-black/55 backdrop-blur-xl">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <img src="/better-isotype-light.svg" alt="BETTER" className="h-7 w-auto" />
            <div className="text-[11px] text-white/70">{activeLabel}</div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={DECK_META.calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="border border-white/20 bg-white/5 px-3 py-2 text-[11px] text-white"
            >
              Get in Touch
            </a>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="border border-white/20 bg-transparent px-3 py-2 text-[11px] text-white/80"
            >
              Menu
            </button>
          </div>
        </div>
        {mobileOpen ? (
          <div className="border-t border-white/10 bg-black/70 px-2 py-2">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileOpen(false);
                }}
                className={
                  `w-full text-left px-3 py-2 text-[12px] border border-transparent ` +
                  (item.id === activeId ? 'text-white bg-white/10 border-white/10' : 'text-white/70')
                }
              >
                {item.label}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};
