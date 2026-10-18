import React, { useEffect, useRef, useState } from 'react';

export const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates with smooth spring lerp
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      isHovered: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouse.isHovered = false;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize, { passive: true });

    // 1. Floating Cinematic Embers / Fireflies
    interface Ember {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      color: string;
      swayOffset: number;
      swaySpeed: number;
    }

    const emberColors = [
      'rgba(245, 158, 11,',  // Sunset Amber
      'rgba(251, 191, 36,',  // Warm Gold
      'rgba(234, 88, 12,',   // Vermilion
      'rgba(244, 63, 94,',   // Crimson Rose
      'rgba(254, 243, 199,', // Champagne Glow
    ];

    const emberCount = Math.min(Math.floor((width * height) / 24000), 45);
    const embers: Ember[] = [];

    for (let i = 0; i < emberCount; i++) {
      embers.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.2 + 0.8,
        speedY: -(Math.random() * 0.45 + 0.2),
        speedX: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.6 + 0.2,
        color: emberColors[Math.floor(Math.random() * emberColors.length)],
        swayOffset: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.015 + 0.008,
      });
    }

    // 2. Interactive Acoustic Tension Wires (Inspired by Silent Soul Reference)
    interface Wire {
      startX: number;
      startY: number;
      endX: number;
      endY: number;
      controlX: number;
      controlY: number;
      targetControlY: number;
      vy: number;
    }

    const wires: Wire[] = [
      {
        startX: 0,
        startY: height * 0.25,
        endX: width,
        endY: height * 0.45,
        controlX: width * 0.5,
        controlY: height * 0.35,
        targetControlY: height * 0.35,
        vy: 0,
      },
      {
        startX: 0,
        startY: height * 0.72,
        endX: width,
        endY: height * 0.58,
        controlX: width * 0.5,
        controlY: height * 0.65,
        targetControlY: height * 0.65,
        vy: 0,
      },
    ];

    let time = 0;

    const render = () => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);
      time += 0.02;

      // --- LAYER 1: Ambient Warm Cursor Spotlight ---
      if (mouse.isHovered) {
        const spotGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 340);
        spotGrad.addColorStop(0, 'rgba(245, 158, 11, 0.12)');
        spotGrad.addColorStop(0.4, 'rgba(153, 27, 27, 0.08)');
        spotGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = spotGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 340, 0, Math.PI * 2);
        ctx.fill();
      }

      // --- LAYER 2: Acoustic Tension Strings with Pluck Physics ---
      for (let i = 0; i < wires.length; i++) {
        const wire = wires[i];

        // Pluck reaction when mouse is near string midpoint
        const distToMouse = Math.hypot(wire.controlX - mouse.x, wire.controlY - mouse.y);
        if (mouse.isHovered && distToMouse < 180) {
          const force = (1 - distToMouse / 180) * (mouse.y > wire.controlY ? 35 : -35);
          wire.targetControlY = (wire.startY + wire.endY) / 2 + force;
        } else {
          wire.targetControlY = (wire.startY + wire.endY) / 2 + Math.sin(time + i) * 6;
        }

        // Spring physics
        const dy = wire.targetControlY - wire.controlY;
        wire.vy = wire.vy * 0.88 + dy * 0.08;
        wire.controlY += wire.vy;

        // Render string
        ctx.beginPath();
        ctx.moveTo(wire.startX, wire.startY);
        ctx.quadraticCurveTo(wire.controlX, wire.controlY, wire.endX, wire.endY);
        ctx.strokeStyle = i === 0 ? 'rgba(245, 158, 11, 0.16)' : 'rgba(153, 27, 27, 0.2)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Harmonic node on wire
        const nodeX = wire.controlX;
        const nodeY = wire.controlY;
        ctx.beginPath();
        ctx.arc(nodeX, nodeY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(251, 191, 36, 0.6)';
        ctx.fill();
      }

      // --- LAYER 3: Ascending Atmospheric Embers ---
      for (let i = 0; i < embers.length; i++) {
        const ember = embers[i];

        if (!prefersReducedMotion) {
          ember.swayOffset += ember.swaySpeed;
          ember.y += ember.speedY;
          ember.x += ember.speedX + Math.sin(ember.swayOffset) * 0.4;

          // Mouse airflow deflection
          const dx = mouse.x - ember.x;
          const dy = mouse.y - ember.y;
          const dist = Math.hypot(dx, dy);
          if (mouse.isHovered && dist < 120) {
            const repel = (1 - dist / 120) * 2;
            ember.x -= (dx / dist) * repel;
            ember.y -= (dy / dist) * repel;
          }

          // Loop embers at screen edges
          if (ember.y < -20) {
            ember.y = height + 10;
            ember.x = Math.random() * width;
          }
          if (ember.x < -20) ember.x = width + 10;
          if (ember.x > width + 20) ember.x = -10;
        }

        // Draw ember with soft glowing halo
        ctx.beginPath();
        ctx.arc(ember.x, ember.y, ember.size, 0, Math.PI * 2);
        ctx.fillStyle = `${ember.color} ${ember.opacity})`;
        ctx.fill();

        if (ember.size > 1.6) {
          ctx.beginPath();
          ctx.arc(ember.x, ember.y, ember.size * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `${ember.color} ${ember.opacity * 0.25})`;
          ctx.fill();
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Parallax offsets linked to scroll
  const parallaxY1 = scrollY * 0.2;
  const parallaxY2 = -scrollY * 0.15;

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-20 overflow-hidden bg-[#07080c]"
      aria-hidden="true"
    >
      {/* 1. Deep Obsidian Base with Twilight Crimson & Sunset Amber Ambient Blobs */}
      <div
        className="absolute -top-32 left-1/4 w-[750px] h-[550px] rounded-full bg-gradient-to-br from-red-950/25 via-amber-900/15 to-transparent blur-[140px] pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(0, ${parallaxY1}px, 0)`,
        }}
      />
      <div
        className="absolute top-1/2 -right-24 w-[650px] h-[600px] rounded-full bg-gradient-to-bl from-amber-950/20 via-red-950/15 to-transparent blur-[150px] pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(0, ${parallaxY2}px, 0)`,
        }}
      />

      {/* 2. Fine Cinematic Grid / Acoustic Lattice Texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(245, 158, 11, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(245, 158, 11, 0.4) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* 3. Subtle Vignette Border Mask */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none opacity-80" />

      {/* 4. Interactive Canvas Layer (Embers, Plucked Acoustic Strings, Warm Spotlight) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  );
};
