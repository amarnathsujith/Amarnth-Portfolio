/**
 * IntroAnimation.tsx
 * ─────────────────────────────────────────────────────
 * Cinematic split-layout intro:
 *   0.0s  Black screen → glowing orb
 *   0.8s  Orb bursts → particle scatter
 *   1.5s  Left: Name text slides in from left
 *   2.0s  Right: Photo slides up into frame
 *   2.6s  Subtitle + badge fades in
 *   3.4s  Navbar fades in from top
 *   4.2s  Overlay fades out → website revealed
 *
 * Customise: HEADLINE, SUBTITLE, PHOTO_SRC, NAV_LINKS
 */

import React, { useEffect, useRef, useState, useCallback } from 'react';

const FIRST_NAME = 'AMARNATH';
const LAST_NAME  = 'SUJITH';
const SUBTITLE   = 'Product Designer  ·  AI Data Analyst & Dev';
const PHOTO_SRC  = '/assets/intro-photo.png';
const NAV_LINKS  = ['HOME', 'ABOUT', 'SERVICE', 'PORTFOLIO', 'CONTACT'];

interface IntroAnimationProps {
  onComplete: () => void;
}
interface Particle {
  x: number; y: number; vx: number; vy: number;
  alpha: number; radius: number; decay: number;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);
  const parts     = useRef<Particle[]>([]);

  const [phase, setPhase] = useState<
    'orb' | 'burst' | 'text' | 'photo' | 'sub' | 'nav' | 'exit'
  >('orb');

  /* ── particles ── */
  const spawn = useCallback((cx: number, cy: number) => {
    parts.current = Array.from({ length: 200 }, () => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 5.5 + 1.5;
      return {
        x: cx, y: cy,
        vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
        alpha: Math.random() * 0.75 + 0.25,
        radius: Math.random() * 2.5 + 0.5,
        decay: Math.random() * 0.013 + 0.006,
      };
    });
  }, []);

  const draw = useCallback(() => {
    const c = canvasRef.current; if (!c) return;
    const ctx = c.getContext('2d'); if (!ctx) return;
    ctx.fillStyle = '#090909';
    ctx.fillRect(0, 0, c.width, c.height);
    parts.current.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      p.vx *= 0.97; p.vy *= 0.97; p.alpha -= p.decay;
      if (p.alpha <= 0) return;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${p.alpha})`; ctx.fill();
    });
    parts.current = parts.current.filter(p => p.alpha > 0);
    if (parts.current.length > 0) rafRef.current = requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, c.width, c.height);
  }, []);

  /* ── timeline ── */
  useEffect(() => {
    const t: ReturnType<typeof setTimeout>[] = [];
    t.push(setTimeout(() => {
      setPhase('burst');
      const c = canvasRef.current;
      if (c) { spawn(c.width / 2, c.height / 2); draw(); }
    }, 800));
    t.push(setTimeout(() => setPhase('text'),  1500));
    t.push(setTimeout(() => setPhase('photo'), 2000));
    t.push(setTimeout(() => setPhase('sub'),   2600));
    t.push(setTimeout(() => setPhase('nav'),   3400));
    t.push(setTimeout(() => setPhase('exit'),  4200));
    t.push(setTimeout(() => onComplete(),       5000));
    return () => { t.forEach(clearTimeout); cancelAnimationFrame(rafRef.current); };
  }, [spawn, draw, onComplete]);

  useEffect(() => {
    const set = () => {
      const c = canvasRef.current;
      if (c) { c.width = window.innerWidth; c.height = window.innerHeight; }
    };
    set(); window.addEventListener('resize', set);
    return () => window.removeEventListener('resize', set);
  }, []);

  const showText  = ['text','photo','sub','nav','exit'].includes(phase);
  const showPhoto = ['photo','sub','nav','exit'].includes(phase);
  const showSub   = ['sub','nav','exit'].includes(phase);
  const showNav   = ['nav','exit'].includes(phase);
  const isExiting = phase === 'exit';

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: '#090909',
      overflow: 'hidden',
      opacity: isExiting ? 0 : 1,
      transition: isExiting ? 'opacity 0.85s cubic-bezier(0.4,0,0.2,1)' : 'none',
      pointerEvents: isExiting ? 'none' : 'all',
    }}>

      {/* Canvas particle burst */}
      <canvas ref={canvasRef} style={{
        position: 'absolute', inset: 0,
        opacity: phase === 'burst' ? 1 : 0,
        transition: 'opacity 0.6s ease',
      }} />

      {/* Glowing orb */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        width: phase === 'orb' ? 18 : 280,
        height: phase === 'orb' ? 18 : 280,
        marginTop: phase === 'orb' ? -9 : -140,
        marginLeft: phase === 'orb' ? -9 : -140,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.95) 0%, transparent 70%)',
        boxShadow: '0 0 80px 30px rgba(255,255,255,0.25)',
        opacity: ['orb','burst'].includes(phase) ? 1 : 0,
        transform: `scale(${phase === 'burst' ? 5 : 1})`,
        transition: phase === 'orb' ? 'none' : 'width 0.45s,height 0.45s,margin 0.45s,transform 0.45s,opacity 0.55s',
        zIndex: 2,
      }} />

      {/* Vignette */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 80% 90% at center, transparent 50%, rgba(0,0,0,0.75) 100%)',
      }} />

      {/* ── Navbar ── */}
      <nav style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '22px 52px', zIndex: 10,
        opacity: showNav ? 1 : 0,
        transform: showNav ? 'translateY(0)' : 'translateY(-18px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}>
        <span style={{ fontWeight: 800, fontSize: 20, color: 'white', letterSpacing: '0.06em', fontFamily: 'system-ui,sans-serif' }}>
          AS<span style={{ color: '#FFB800' }}>.</span>
        </span>
        <div style={{ display: 'flex', gap: 32 }}>
          {NAV_LINKS.map((l, i) => (
            <span key={l} style={{
              fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', cursor: 'pointer',
              color: i === 0 ? '#FFB800' : 'rgba(255,255,255,0.6)',
              fontFamily: 'system-ui,sans-serif',
            }}>{l}</span>
          ))}
        </div>
        <button style={{
          padding: '8px 20px', borderRadius: 8,
          border: '1px solid rgba(255,255,255,0.22)', background: 'transparent',
          color: 'white', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em',
          cursor: 'pointer', fontFamily: 'system-ui,sans-serif',
        }}>HIRE ME</button>
      </nav>

      {/* ── Main split layout ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 5,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '80px 52px 40px',
        gap: '5vw',
      }}>

        {/* LEFT: Text */}
        <div style={{
          flex: '0 0 auto',
          display: 'flex', flexDirection: 'column',
          alignItems: 'flex-start',
          maxWidth: 520,
          opacity: showText ? 1 : 0,
          transform: showText ? 'translateX(0)' : 'translateX(-60px)',
          transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
        }}>

          {/* thin accent line */}
          <div style={{
            width: 48, height: 3, borderRadius: 2,
            background: '#FFB800', marginBottom: 24,
            opacity: showText ? 1 : 0,
            transition: 'opacity 0.6s ease 0.15s',
          }} />

          {/* First name */}
          <h1 style={{
            margin: 0, padding: 0, lineHeight: 0.88,
            fontFamily: '"Inter", system-ui, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(52px, 8.5vw, 110px)',
            letterSpacing: '-0.03em',
            color: 'white',
          }}>{FIRST_NAME}</h1>

          {/* Last name — golden accent */}
          <h1 style={{
            margin: 0, padding: 0, lineHeight: 0.88,
            fontFamily: '"Inter", system-ui, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(52px, 8.5vw, 110px)',
            letterSpacing: '-0.03em',
            color: '#FFB800',
          }}>{LAST_NAME}</h1>

          {/* Subtitle */}
          <div style={{
            marginTop: 28,
            display: 'flex', flexDirection: 'column', gap: 14,
            opacity: showSub ? 1 : 0,
            transform: showSub ? 'translateY(0)' : 'translateY(14px)',
            transition: 'opacity 0.65s ease, transform 0.65s ease',
          }}>
            {/* role text */}
            <p style={{
              margin: 0,
              fontFamily: 'system-ui, sans-serif',
              fontSize: 'clamp(13px, 1.5vw, 16px)',
              color: 'rgba(255,255,255,0.55)',
              letterSpacing: '0.04em',
              fontWeight: 400,
            }}>{SUBTITLE}</p>

            {/* badges row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                padding: '6px 14px', borderRadius: 999,
                border: '1px solid rgba(34,197,94,0.35)',
                background: 'rgba(34,197,94,0.08)',
              }}>
                <span style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: '#22c55e', boxShadow: '0 0 8px #22c55e',
                  display: 'inline-block', flexShrink: 0,
                }} />
                <span style={{
                  fontFamily: 'system-ui,sans-serif', fontSize: 11,
                  fontWeight: 600, color: '#22c55e', letterSpacing: '0.08em',
                }}>OPEN TO WORK</span>
              </span>

              <button style={{
                padding: '7px 22px', borderRadius: 8,
                border: 'none', background: '#FFB800',
                color: '#111', fontFamily: 'system-ui,sans-serif',
                fontSize: 12, fontWeight: 700, letterSpacing: '0.08em',
                cursor: 'pointer',
              }}>CONTACT →</button>
            </div>
          </div>
        </div>

        {/* RIGHT: Photo */}
        <div style={{
          flex: '0 0 auto',
          position: 'relative',
          width: 'min(340px, 36vw)',
          height: 'min(480px, 70vh)',
          opacity: showPhoto ? 1 : 0,
          transform: showPhoto ? 'translateY(0) scale(1)' : 'translateY(70px) scale(0.96)',
          transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1.2s cubic-bezier(0.16,1,0.3,1)',
        }}>
          {/* Glow halo behind photo */}
          <div style={{
            position: 'absolute', inset: -20,
            borderRadius: 24,
            background: 'radial-gradient(ellipse at center, rgba(255,184,0,0.18) 0%, transparent 70%)',
            filter: 'blur(20px)',
          }} />

          {/* Photo — transparent cutout sits directly on dark bg */}
          <div style={{
            position: 'relative', width: '100%', height: '100%',
            overflow: 'visible',
          }}>
            <img
              src={PHOTO_SRC}
              alt="Amarnath Sujith"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'top center',
                display: 'block',
                filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.5))',
              }}
            />
          </div>

          {/* floating name tag */}
          <div style={{
            position: 'absolute', bottom: -18, left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(255,255,255,0.06)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 12, padding: '8px 20px',
            whiteSpace: 'nowrap',
            opacity: showSub ? 1 : 0,
            transition: 'opacity 0.6s ease 0.3s',
          }}>
            <p style={{
              margin: 0, fontFamily: 'system-ui,sans-serif',
              fontSize: 12, fontWeight: 600,
              color: 'rgba(255,255,255,0.8)', letterSpacing: '0.06em',
            }}>Amarnath Sujith</p>
          </div>
        </div>
      </div>
    </div>
  );
};
