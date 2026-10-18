import React, { useEffect, useRef } from 'react';

export const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking with smooth lerp
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

    // Particle nodes for audio constellation
    const particleCount = Math.min(Math.floor((width * height) / 25000), 55);
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseColor: string;
      alpha: number;
    }

    const colors = [
      'rgba(6, 182, 212,',   // Cyan
      'rgba(139, 92, 246,',  // Violet
      'rgba(245, 158, 11,',  // Gold
      'rgba(236, 72, 153,',  // Pink
      'rgba(16, 185, 129,',  // Emerald
    ];

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1,
        baseColor: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    let time = 0;

    // Render loop
    const render = () => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      // Smooth cursor lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw glowing wave spectrum at bottom
      time += 0.015;
      const waveCount = 3;
      const waveGradients = [
        { stroke: 'rgba(6, 182, 212, 0.12)', fill: 'rgba(6, 182, 212, 0.015)', freq: 0.003, speed: 0.8, amp: 28 },
        { stroke: 'rgba(139, 92, 246, 0.10)', fill: 'rgba(139, 92, 246, 0.012)', freq: 0.002, speed: 1.1, amp: 35 },
        { stroke: 'rgba(245, 158, 11, 0.08)', fill: 'rgba(245, 158, 11, 0.01)', freq: 0.0025, speed: 0.6, amp: 22 },
      ];

      for (let w = 0; w < waveCount; w++) {
        const wave = waveGradients[w];
        ctx.beginPath();
        ctx.moveTo(0, height);

        for (let x = 0; x <= width; x += 15) {
          // Acoustic wave with mouse proximity reaction
          const distToMouse = Math.abs(x - mouse.x);
          const mouseFactor = mouse.isHovered ? Math.max(0, 1 - distToMouse / 400) * 20 : 0;
          const y =
            height -
            60 -
            w * 25 +
            Math.sin(x * wave.freq + time * wave.speed) * wave.amp +
            Math.cos(x * 0.001 - time * 0.4) * 15 -
            mouseFactor;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fillStyle = wave.fill;
        ctx.fill();
        ctx.strokeStyle = wave.stroke;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      // 2. Draw particle constellation with interactive links
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          // Wrap edges
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          // Mouse gravity interaction
          if (mouse.isHovered) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 180 && dist > 10) {
              const force = (180 - dist) / 180;
              p.x -= (dx / dist) * force * 0.6;
              p.y -= (dy / dist) * force * 0.6;
            }
          }
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.baseColor}${p.alpha})`;
        ctx.fill();

        // Connect nearby particles with luminous lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const lineAlpha = (1 - dist / 110) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(140, 160, 220, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
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

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-20 overflow-hidden"
      aria-hidden="true"
    >
      {/* Dynamic Colored Ambient Aurora Blooms */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-sonic-cyan/10 blur-[130px] animate-aurora mix-blend-screen" />
      <div className="absolute top-1/3 -right-40 w-[650px] h-[650px] rounded-full bg-sonic-violet/12 blur-[140px] animate-aurora [animation-delay:-5s] mix-blend-screen" />
      <div className="absolute top-2/3 left-1/4 w-[500px] h-[500px] rounded-full bg-sonic-gold/8 blur-[120px] animate-aurora [animation-delay:-10s] mix-blend-screen" />
      <div className="absolute -bottom-32 right-1/4 w-[550px] h-[550px] rounded-full bg-sonic-emerald/8 blur-[130px] animate-aurora [animation-delay:-15s] mix-blend-screen" />

      {/* Subtle Noise / Film Grain Filter */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Interactive WebGL/Canvas Particle Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};
