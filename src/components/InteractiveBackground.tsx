import React, { useEffect, useRef, useState } from 'react';

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
}

export const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const mouse = { x: -9999, y: -9999, targetX: -9999, targetY: -9999 };
    const ripples: Ripple[] = [];

    const handlePointerMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handlePointerDown = (e: MouseEvent) => {
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: 280,
        opacity: 0.8,
      });
      if (ripples.length > 6) ripples.shift();
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('mousedown', handlePointerDown, { passive: true });

    // Grid configuration
    const spacing = 44;
    const influenceRadius = 220;
    const maxWarp = 22;

    const render = () => {
      // Lerp mouse coordinates smoothly
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Subtle Static Background Mesh
      ctx.fillStyle = 'rgba(255, 255, 255, 0.025)';
      for (let x = 0; x < width; x += spacing * 2) {
        for (let y = 0; y < height; y += spacing * 2) {
          ctx.beginPath();
          ctx.arc(x, y, 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 2. Update and draw ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += 5;
        r.opacity *= 0.96;

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(34, 197, 94, ${r.opacity * 0.5})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        if (r.opacity < 0.01 || r.radius > r.maxRadius) {
          ripples.splice(i, 1);
        }
      }

      // 3. Draw Warping Kinetic Grid Nodes and Links
      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;

      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const originX = c * spacing;
          const originY = r * spacing;

          const dx = originX - mouse.x;
          const dy = originY - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let warpedX = originX;
          let warpedY = originY;
          let proximity = 0;

          if (dist < influenceRadius && dist > 0) {
            proximity = 1 - dist / influenceRadius;
            const factor = Math.sin(proximity * (Math.PI / 2));
            const warp = factor * maxWarp;
            const angle = Math.atan2(dy, dx);
            warpedX -= Math.cos(angle) * warp;
            warpedY -= Math.sin(angle) * warp;
          }

          // Apply ripple displacement
          for (const rip of ripples) {
            const rdx = originX - rip.x;
            const rdy = originY - rip.y;
            const rdist = Math.sqrt(rdx * rdx + rdy * rdy);
            const waveWidth = 40;
            const diff = Math.abs(rdist - rip.radius);
            if (diff < waveWidth) {
              const str = (1 - diff / waveWidth) * rip.opacity * 14;
              const angle = Math.atan2(rdy, rdx);
              warpedX += Math.cos(angle) * str;
              warpedY += Math.sin(angle) * str;
              proximity = Math.max(proximity, rip.opacity * 0.7);
            }
          }

          // Draw Node Dot
          const radius = proximity > 0.1 ? 1.2 + proximity * 2.2 : 0.9;
          ctx.beginPath();
          ctx.arc(warpedX, warpedY, radius, 0, Math.PI * 2);

          if (proximity > 0.2) {
            // Anime Green / Yellow interactive glow
            ctx.fillStyle = `rgba(34, 197, 94, ${0.4 + proximity * 0.6})`;
            ctx.shadowColor = 'rgba(34, 197, 94, 0.6)';
            ctx.shadowBlur = 6;
          } else {
            ctx.fillStyle = 'rgba(251, 248, 238, 0.08)';
            ctx.shadowBlur = 0;
          }
          ctx.fill();
        }
      }

      ctx.shadowBlur = 0;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mousedown', handlePointerDown);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Base Dark Graphite Background */}
      <div className="absolute inset-0 bg-graphite-950" />

      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] transition-transform duration-75 ease-out opacity-40 pointer-events-none"
        style={{
          transform: `translate3d(${cursorPos.x - 300}px, ${cursorPos.y - 300}px, 0)`,
          background:
            'radial-gradient(circle, rgba(34, 197, 94, 0.22) 0%, rgba(250, 204, 21, 0.12) 40%, transparent 70%)',
        }}
      />

      {/* Ambient Atmospheric Fixed Aura Orbs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-anime-green/10 via-anime-yellow/5 to-transparent rounded-full blur-[140px]" />
      <div className="absolute top-1/2 -right-40 w-[550px] h-[550px] bg-gradient-to-bl from-anime-yellow/10 via-anime-green/5 to-transparent rounded-full blur-[140px]" />
      <div className="absolute -bottom-40 left-1/3 w-[650px] h-[650px] bg-gradient-to-t from-anime-green/10 to-transparent rounded-full blur-[150px]" />

      {/* Interactive Kinetic Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-80" />
    </div>
  );
};
