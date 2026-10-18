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

    // 3D Audio Particle Starfield that moves with scroll & time
    interface Particle3D {
      x: number;
      y: number;
      z: number;
      baseX: number;
      baseY: number;
      color: string;
      size: number;
      speed: number;
    }

    const colorPalette = [
      'rgba(139, 92, 246,', // Neon Violet
      'rgba(236, 72, 153,', // Hot Pink
      'rgba(6, 182, 212,',  // Cyber Cyan
      'rgba(245, 158, 11,', // Electric Amber
    ];

    const particleCount = Math.min(Math.floor((width * height) / 22000), 65);
    const particles: Particle3D[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * 800 + 200,
        baseX: (Math.random() - 0.5) * width * 1.5,
        baseY: (Math.random() - 0.5) * height * 1.5,
        color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.8 + 0.3,
      });
    }

    let time = 0;
    let prevScroll = window.scrollY;

    const render = () => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const currentScroll = window.scrollY;
      const scrollDelta = currentScroll - prevScroll;
      prevScroll = currentScroll;

      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      ctx.clearRect(0, 0, width, height);

      time += 0.02;

      // Draw flowing 3D perspective sound wave mesh
      const waveCount = 2;
      for (let w = 0; w < waveCount; w++) {
        ctx.beginPath();
        const startY = height * 0.75 + w * 40 - (currentScroll * 0.12) % 150;
        ctx.moveTo(0, height);

        for (let x = 0; x <= width; x += 18) {
          const mouseDist = Math.abs(x - mouse.x);
          const mouseLift = mouse.isHovered ? Math.max(0, 1 - mouseDist / 350) * 35 : 0;
          const y =
            startY +
            Math.sin(x * 0.003 + time * (0.8 + w * 0.3)) * 30 +
            Math.cos(x * 0.0015 - time * 0.5) * 20 -
            mouseLift;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, startY - 40, width, height);
        if (w === 0) {
          grad.addColorStop(0, 'rgba(139, 92, 246, 0.12)');
          grad.addColorStop(0.5, 'rgba(236, 72, 153, 0.08)');
          grad.addColorStop(1, 'rgba(6, 182, 212, 0.0)');
          ctx.fillStyle = grad;
          ctx.fill();
          ctx.strokeStyle = 'rgba(139, 92, 246, 0.25)';
        } else {
          grad.addColorStop(0, 'rgba(6, 182, 212, 0.1)');
          grad.addColorStop(0.5, 'rgba(245, 158, 11, 0.06)');
          grad.addColorStop(1, 'rgba(139, 92, 246, 0.0)');
          ctx.fillStyle = grad;
          ctx.fill();
          ctx.strokeStyle = 'rgba(6, 182, 212, 0.2)';
        }
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      // Draw 3D Depth Particles moving with scroll velocity
      const fov = 400;
      const centerX = width / 2;
      const centerY = height / 2;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          // Particles advance towards viewer and react to scroll velocity
          p.z -= p.speed * 1.2 + scrollDelta * 0.4;

          // Loop particles when they pass camera or go too far
          if (p.z < 50) p.z = 1000;
          if (p.z > 1000) p.z = 50;

          // Mouse sway
          p.x = p.baseX + (mouse.x - centerX) * 0.08 * (1000 / p.z);
          p.y = p.baseY + (mouse.y - centerY) * 0.08 * (1000 / p.z) - (currentScroll * 0.2) % height;
        }

        // 3D perspective projection
        const scale = fov / (fov + p.z);
        const projX = centerX + p.x * scale;
        const projY = centerY + p.y * scale;

        if (projX >= -20 && projX <= width + 20 && projY >= -20 && projY <= height + 20) {
          const alpha = Math.min(1, Math.max(0.1, (1 - p.z / 1000) * 0.7));
          const radius = Math.max(0.8, p.size * scale * 2.2);

          ctx.beginPath();
          ctx.arc(projX, projY, radius, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color} ${alpha})`;
          ctx.fill();

          // Connect nearby projected points
          for (let j = i + 1; j < Math.min(i + 5, particles.length); j++) {
            const p2 = particles[j];
            const scale2 = fov / (fov + p2.z);
            const projX2 = centerX + p2.x * scale2;
            const projY2 = centerY + p2.y * scale2;

            const dist = Math.hypot(projX - projX2, projY - projY2);
            if (dist < 90) {
              ctx.beginPath();
              ctx.moveTo(projX, projY);
              ctx.lineTo(projX2, projY2);
              ctx.strokeStyle = `rgba(180, 160, 240, ${(1 - dist / 90) * alpha * 0.25})`;
              ctx.lineWidth = 0.6;
              ctx.stroke();
            }
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

  // Parallax offsets based on scroll position
  const parallaxY1 = scrollY * 0.25;
  const parallaxY2 = -scrollY * 0.18;
  const parallaxY3 = scrollY * 0.12;

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-20 overflow-hidden bg-obsidian-950"
      aria-hidden="true"
    >
      {/* Dynamic 3D Moving Aurora Mesh Blobs (Transforms with Page Scroll) */}
      <div
        className="absolute -top-40 -left-32 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-sonic-violet/30 via-sonic-pink/20 to-transparent blur-[130px] mix-blend-screen transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(0, ${parallaxY1}px, 0)`,
        }}
      />
      <div
        className="absolute top-1/4 -right-48 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-sonic-cyan/25 via-sonic-sky/20 to-transparent blur-[140px] mix-blend-screen transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(0, ${parallaxY2}px, 0)`,
        }}
      />
      <div
        className="absolute top-1/2 left-10 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-sonic-pink/20 via-sonic-amber/15 to-transparent blur-[140px] mix-blend-screen transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(0, ${parallaxY3}px, 0)`,
        }}
      />
      <div
        className="absolute bottom-10 right-1/4 w-[650px] h-[650px] rounded-full bg-gradient-to-t from-sonic-emerald/20 via-sonic-cyan/15 to-transparent blur-[130px] mix-blend-screen transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(0, ${-parallaxY1 * 0.7}px, 0)`,
        }}
      />

      {/* 3D Perspective Grid Underlay */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-screen"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          transform: `perspective(900px) rotateX(45deg) translateY(${-(scrollY * 0.15) % 48}px)`,
          transformOrigin: 'top center',
        }}
      />

      {/* Interactive 3D Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};
