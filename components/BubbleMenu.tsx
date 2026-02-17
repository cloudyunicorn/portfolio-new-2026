import type { CSSProperties, ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { gsap } from 'gsap';

type MenuItem = {
  label: string;
  href: string;
  ariaLabel?: string;
  rotation?: number;
  hoverStyles?: {
    bgColor?: string;
    textColor?: string;
  };
};

export type BubbleMenuProps = {
  logo?: ReactNode | string;
  onMenuClick?: (open: boolean) => void;
  className?: string;
  style?: CSSProperties;
  menuAriaLabel?: string;
  menuBg?: string;
  menuContentColor?: string;
  itemMenuBg?: string;
  useFixedPosition?: boolean;
  fixedOverlay?: boolean;
  items?: MenuItem[];
};

const DEFAULT_ITEMS: MenuItem[] = [
  {
    label: 'home',
    href: '#',
    ariaLabel: 'Home',
    rotation: -8,
    hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
  },
  {
    label: 'about',
    href: '#',
    ariaLabel: 'About',
    rotation: 8,
    hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
  },
  {
    label: 'projects',
    href: '#',
    ariaLabel: 'Documentation',
    rotation: 8,
    hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
  },
  {
    label: 'blog',
    href: '#',
    ariaLabel: 'Blog',
    rotation: 8,
    hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
  },
  {
    label: 'contact',
    href: '#',
    ariaLabel: 'Contact',
    rotation: -8,
    hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
  }
];

export default function BubbleMenu({
  logo,
  onMenuClick,
  className,
  style,
  menuAriaLabel = 'Toggle menu',
  menuBg = '#fff',
  menuContentColor = '#111',
  itemMenuBg,
  useFixedPosition = false,
  fixedOverlay = false,
  items,
}: BubbleMenuProps) {
  // ... existing hooks

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const overlayRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<HTMLAnchorElement[]>([]);
  const labelRefs = useRef<HTMLSpanElement[]>([]);

  const menuItems = items?.length ? items : DEFAULT_ITEMS;

  const containerClassName = [
    'bubble-menu',
    useFixedPosition ? 'fixed' : (className?.includes('relative') || className?.includes('static') ? '' : 'absolute'),
    !(className?.includes('top-') || className?.includes('relative') || className?.includes('static')) && 'left-0 right-0 top-8',
    'flex items-center',
    logo ? 'justify-between' : 'justify-end',
    !(className?.includes('px-') || className?.includes('relative')) && 'gap-4 px-8',
    'pointer-events-none',
    'z-[1001]',
    className
  ]
    .filter(Boolean)
    .join(' ');

  const handleToggle = () => {
    const nextState = !isMenuOpen;
    if (nextState) setShowOverlay(true);
    setIsMenuOpen(nextState);
    onMenuClick?.(nextState);
  };

  useEffect(() => {
    const overlay = overlayRef.current;
    const card = cardRef.current;
    if (!overlay || !card) return;

    if (isMenuOpen) {
      overlay.style.display = 'grid';
      gsap.fromTo(card,
        { scale: 0.8, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.3, ease: 'back.out(1.7)' }
      );
    } else if (showOverlay) {
      gsap.to(card, {
        scale: 0.9,
        opacity: 0,
        y: 10,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          overlay.style.display = 'none';
          setShowOverlay(false);
        }
      });
    }
  }, [isMenuOpen, showOverlay]);

  useEffect(() => {
    const handleResize = () => {
      if (isMenuOpen) {
        const bubbles = bubblesRef.current.filter(Boolean);
        const isDesktop = window.innerWidth >= 900;
        bubbles.forEach((bubble, i) => {
          const item = menuItems[i];
          if (bubble && item) {
            const rotation = isDesktop ? (item.rotation ?? 0) : 0;
            bubble.style.transform = `rotate(${rotation}deg)`;
          }
        });
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen, menuItems]);

  return (
    <>
      {/* ... styles ... */}
      <style>{`
        /* ... existing styles ... */
        .bubble-menu .menu-line {
          transition: transform 0.3s ease, opacity 0.3s ease;
          transform-origin: center;
        }
        @media (min-width: 900px) {
          .bubble-menu-items .pill-list .pill-col {
             flex: 0 0 33.3333%;
          }
          .bubble-menu-items .pill-link:hover {
            transform: scale(1.1);
            background: var(--hover-bg) !important;
            color: var(--hover-color) !important;
          }
        }
        @media (max-width: 899px) {
           .bubble-menu-items .pill-list .pill-col {
             width: 100% !important;
             flex: 0 0 100% !important;
           }
          .bubble-menu-items .pill-link:hover {
            transform: scale(1.05);
            background: var(--hover-bg);
            color: var(--hover-color);
          }
        }
      `}</style>

      <nav className={containerClassName} style={style} aria-label="Main navigation">
        {/* ... logo and button ... */}
        {logo && (
          <div
            className={[
              'bubble logo-bubble',
              'inline-flex items-center justify-center',
              'rounded-full',
              'bg-white',
              'shadow-[0_4px_16px_rgba(0,0,0,0.12)]',
              'pointer-events-auto',
              'h-12 md:h-14',
              'px-4 md:px-8',
              'gap-2',
              'will-change-transform'
            ].join(' ')}
            aria-label="Logo"
            style={{
              background: menuBg,
              minHeight: '48px',
              borderRadius: '9999px'
            }}
          >
            <span
              className={['logo-content', 'inline-flex items-center justify-center', 'w-[120px] h-full'].join(' ')}
              style={
                {
                  ['--logo-max-height']: '60%',
                  ['--logo-max-width']: '100%'
                } as CSSProperties
              }
            >
              {typeof logo === 'string' ? (
                <img src={logo} alt="Logo" className="bubble-logo max-h-[60%] max-w-full object-contain block" />
              ) : (
                logo
              )}
            </span>
          </div>
        )}

        <button
          type="button"
          className={[
            'bubble toggle-bubble menu-btn',
            isMenuOpen ? 'open' : '',
            'inline-flex flex-col items-center justify-center',
            'rounded-full',
            'bg-white',
            'shadow-[0_4px_16px_rgba(0,0,0,0.12)]',
            'pointer-events-auto',
            'w-12 h-12 md:w-14 md:h-14',
            'border-0 cursor-pointer p-0',
            'will-change-transform'
          ].join(' ')}
          onClick={handleToggle}
          aria-label={menuAriaLabel}
          aria-pressed={isMenuOpen}
          style={{ background: menuBg }}
        >
          <span
            className="menu-line block mx-auto rounded-[2px]"
            style={{
              width: 26,
              height: 2,
              background: menuContentColor,
              transform: isMenuOpen ? 'translateY(4px) rotate(45deg)' : 'none'
            }}
          />
          <span
            className="menu-line short block mx-auto rounded-[2px]"
            style={{
              marginTop: '6px',
              width: 26,
              height: 2,
              background: menuContentColor,
              transform: isMenuOpen ? 'translateY(-4px) rotate(-45deg)' : 'none'
            }}
          />
        </button>
      </nav>

      {showOverlay && mounted && createPortal(
        <div
          ref={overlayRef}
          className={[
            'bubble-menu-items',
            'fixed',
            'top-0 left-0 w-full h-screen', // Changed w-screen to w-full
            'grid place-items-start md:place-items-center',
            'justify-items-center',
            'pt-32 md:pt-0',
            'pointer-events-none',
            'z-[9999]'
          ].join(' ')}
          style={{ display: 'none' }} // Ensure hidden initially
          aria-hidden={!isMenuOpen}
        >
          <div
            ref={cardRef} // Applied cardRef
            className={[
              'menu-card',
              'relative',
              'bg-background/95',
              'backdrop-blur-2xl',
              'border border-border/50',
              'rounded-[2.5rem]',
              'p-8 md:p-12',
              'shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]',
              'w-[92vw] md:max-w-2xl',
              'max-h-[80vh]',
              'overflow-y-auto',
              'pointer-events-auto',
              'mx-auto'
            ].join(' ')}>
            <ul
              className={[
                'pill-list',
                'list-none m-0',
                'w-full',
                'flex flex-wrap',
                'gap-x-0 gap-y-2',
                'pointer-events-auto'
              ].join(' ')}
              role="menu"
              aria-label="Menu links"
            >
              {menuItems.map((item, idx) => (
                <li
                  key={idx}
                  role="none"
                  className={[
                    'pill-col',
                    'flex justify-center items-stretch',
                    'w-1/2',
                    'box-border'
                  ].join(' ')}
                >
                  <a
                    role="menuitem"
                    href={item.href}
                    onClick={handleToggle}
                    aria-label={item.ariaLabel || item.label}
                    className={[
                      'pill-link',
                      'w-full',
                      'rounded-[999px]',
                      'no-underline',
                      'bg-transparent',
                      'text-inherit',
                      'flex items-center justify-center',
                      'relative',
                      'transition-[transform,background,color] duration-300 ease-in-out',
                      'box-border',
                      'whitespace-nowrap overflow-hidden'
                    ].join(' ')}
                    style={
                      {
                        ['--item-rot']: `${item.rotation ?? 0}deg`,
                        ['--pill-bg']: 'transparent',
                        ['--pill-color']: menuContentColor,
                        ['--hover-bg']: item.hoverStyles?.bgColor || 'var(--foreground)',
                        ['--hover-color']: item.hoverStyles?.textColor || 'var(--background)',
                        color: 'var(--pill-color)',
                        minHeight: 'var(--pill-min-h, 70px)',
                        padding: 'clamp(0.5rem, 1.5vw, 1.5rem) 0',
                        fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)',
                        fontWeight: 600,
                        lineHeight: 1.2,
                        willChange: 'transform',
                      } as CSSProperties
                    }
                    ref={el => {
                      if (el) bubblesRef.current[idx] = el;
                    }}
                  >
                    <span
                      className="pill-label inline-block"
                      style={{
                        willChange: 'transform, opacity',
                      }}
                      ref={el => {
                        if (el) labelRefs.current[idx] = el;
                      }}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
