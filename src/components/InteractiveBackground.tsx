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

    // Smooth mouse coordinates with spring lerp
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

    // 1. 3D Floating Translucent Glass Spheres / Orbs
    interface GlassSphere3D {
      x: number;
      y: number;
      z: number;
      radius: number;
      baseX: number;
      baseY: number;
      color1: string;
      color2: string;
      accent: string;
      floatPhase: number;
      floatSpeed: number;
    }

    const sphereThemes = [
      { color1: 'rgba(6, 182, 212, 0.45)', color2: 'rgba(59, 130, 246, 0.2)', accent: 'rgba(6, 182, 212, 0.8)' }, // Cyan / Blue
      { color1: 'rgba(139, 92, 246, 0.5)', color2: 'rgba(217, 70, 239, 0.25)', accent: 'rgba(168, 85, 247, 0.85)' }, // Violet / Fuchsia
      { color1: 'rgba(236, 72, 153, 0.45)', color2: 'rgba(245, 158, 11, 0.2)', accent: 'rgba(244, 63, 94, 0.8)' }, // Pink / Amber
      { color1: 'rgba(16, 185, 129, 0.45)', color2: 'rgba(6, 182, 212, 0.2)', accent: 'rgba(16, 185, 129, 0.8)' }, // Emerald / Cyan
      { color1: 'rgba(245, 158, 11, 0.45)', color2: 'rgba(239, 68, 68, 0.2)', accent: 'rgba(251, 191, 36, 0.8)' }, // Amber / Gold
    ];

    const sphereCount = Math.min(Math.max(Math.floor(width / 130), 8), 16);
    const glassSpheres: GlassSphere3D[] = [];

    for (let i = 0; i < sphereCount; i++) {
      const theme = sphereThemes[i % sphereThemes.length];
      const z = Math.random() * 600 + 150;
      const x = (Math.random() - 0.5) * width * 1.3;
      const y = (Math.random() - 0.5) * height * 1.3;
      const radius = Math.random() * 32 + 24;

      glassSpheres.push({
        x,
        y,
        z,
        radius,
        baseX: x,
        baseY: y,
        color1: theme.color1,
        color2: theme.color2,
        accent: theme.accent,
        floatPhase: Math.random() * Math.PI * 2,
        floatSpeed: Math.random() * 0.015 + 0.008,
      });
    }

    // 2. 3D Audio Star Particles
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

    const particleColors = [
      'rgba(6, 182, 212,',  // Cyan
      'rgba(139, 92, 246,', // Violet
      'rgba(236, 72, 153,', // Pink
      'rgba(245, 158, 11,', // Gold
      'rgba(16, 185, 129,', // Emerald
    ];

    const particleCount = Math.min(Math.floor((width * height) / 25000), 55);
    const particles: Particle3D[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.4,
        y: (Math.random() - 0.5) * height * 1.4,
        z: Math.random() * 800 + 200,
        baseX: (Math.random() - 0.5) * width * 1.4,
        baseY: (Math.random() - 0.5) * height * 1.4,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.7 + 0.3,
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

      mouse.x += (mouse.targetX - mouse.x) * 0.07;
      mouse.y += (mouse.targetY - mouse.y) * 0.07;

      ctx.clearRect(0, 0, width, height);

      time += 0.02;

      // --- LAYER A: Interactive Cursor Spotlight Glow ---
      if (mouse.isHovered) {
        const spotGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 380);
        spotGrad.addColorStop(0, 'rgba(6, 182, 212, 0.18)');
        spotGrad.addColorStop(0.35, 'rgba(139, 92, 246, 0.12)');
        spotGrad.addColorStop(0.7, 'rgba(236, 72, 153, 0.06)');
        spotGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = spotGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 380, 0, Math.PI * 2);
        ctx.fill();
      }

      // --- LAYER B: Flowing 3D Harmonic Soundwave Horizon ---
      const waveCount = 3;
      for (let w = 0; w < waveCount; w++) {
        ctx.beginPath();
        const startY = height * 0.7 + w * 45 - (currentScroll * 0.1) % 180;
        ctx.moveTo(0, height);

        for (let x = 0; x <= width; x += 16) {
          const mouseDist = Math.abs(x - mouse.x);
          const mouseLift = mouse.isHovered ? Math.max(0, 1 - mouseDist / 380) * 45 : 0;
          const y =
            startY +
            Math.sin(x * 0.0035 + time * (0.9 + w * 0.25) + w) * 35 +
            Math.cos(x * 0.002 - time * 0.6) * 22 -
            mouseLift;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, startY - 50, width, height);
        if (w === 0) {
          grad.addColorStop(0, 'rgba(6, 182, 212, 0.18)');
          grad.addColorStop(0.5, 'rgba(139, 92, 246, 0.12)');
          grad.addColorStop(1, 'rgba(14, 21, 51, 0.0)');
          ctx.fillStyle = grad;
          ctx.fill();
          ctx.strokeStyle = 'rgba(6, 182, 212, 0.35)';
        } else if (w === 1) {
          grad.addColorStop(0, 'rgba(236, 72, 153, 0.14)');
          grad.addColorStop(0.5, 'rgba(245, 158, 11, 0.08)');
          grad.addColorStop(1, 'rgba(14, 21, 51, 0.0)');
          ctx.fillStyle = grad;
          ctx.fill();
          ctx.strokeStyle = 'rgba(236, 72, 153, 0.3)';
        } else {
          grad.addColorStop(0, 'rgba(16, 185, 129, 0.12)');
          grad.addColorStop(0.5, 'rgba(6, 182, 212, 0.08)');
          grad.addColorStop(1, 'rgba(14, 21, 51, 0.0)');
          ctx.fillStyle = grad;
          ctx.fill();
          ctx.strokeStyle = 'rgba(16, 185, 129, 0.25)';
        }
        ctx.lineWidth = 1.4;
        ctx.stroke();
      }

      // --- LAYER C: 3D Translucent Glass Spheres / Orbs with Parallax ---
      const fov = 420;
      const centerX = width / 2;
      const centerY = height / 2;

      for (let i = 0; i < glassSpheres.length; i++) {
        const s = glassSpheres[i];

        if (!prefersReducedMotion) {
          s.floatPhase += s.floatSpeed;
          // React to scroll velocity and depth
          s.z -= scrollDelta * 0.25;
          if (s.z < 80) s.z = 700;
          if (s.z > 700) s.z = 80;

          // Gentle floating sine motion
          const floatOffset = Math.sin(s.floatPhase) * 20;

          // Mouse deflection
          const dx = mouse.x - (centerX + s.x);
          const dy = mouse.y - (centerY + s.y);
          const dist = Math.hypot(dx, dy);
          const repelFactor = dist < 250 ? (1 - dist / 250) * 35 : 0;
          const repelX = dist > 0 ? -(dx / dist) * repelFactor : 0;
          const repelY = dist > 0 ? -(dy / dist) * repelFactor : 0;

          s.x = s.baseX + repelX + (mouse.x - centerX) * 0.04 * (700 / s.z);
          s.y = s.baseY + floatOffset + repelY - (currentScroll * 0.18) % height;
        }

        // Perspective projection
        const scale = fov / (fov + s.z);
        const projX = centerX + s.x * scale;
        const projY = centerY + s.y * scale;
        const projR = Math.max(12, s.radius * scale * 1.8);

        if (projX >= -projR * 2 && projX <= width + projR * 2 && projY >= -projR * 2 && projY <= height + projR * 2) {
          ctx.save();

          // 1. Outer Glass Aura Glow
          const auraGrad = ctx.createRadialGradient(projX, projY, projR * 0.5, projX, projY, projR * 1.8);
          auraGrad.addColorStop(0, s.color1);
          auraGrad.addColorStop(0.5, s.color2);
          auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
          ctx.fillStyle = auraGrad;
          ctx.beginPath();
          ctx.arc(projX, projY, projR * 1.8, 0, Math.PI * 2);
          ctx.fill();

          // 2. Translucent Glass Sphere Body
          const sphereGrad = ctx.createRadialGradient(
            projX - projR * 0.35,
            projY - projR * 0.35,
            projR * 0.1,
            projX,
            projY,
            projR
          );
          sphereGrad.addColorStop(0, 'rgba(255, 255, 255, 0.85)'); // Specular center
          sphereGrad.addColorStop(0.2, s.color1);
          sphereGrad.addColorStop(0.65, s.color2);
          sphereGrad.addColorStop(0.95, 'rgba(10, 15, 38, 0.85)'); // Deep glass shadow
          sphereGrad.addColorStop(1, s.accent); // Chromatic rim light

          ctx.fillStyle = sphereGrad;
          ctx.beginPath();
          ctx.arc(projX, projY, projR, 0, Math.PI * 2);
          ctx.fill();

          // 3. Crisp Top Specular Highlight (Simulates glossy curved glass surface)
          ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
          ctx.beginPath();
          ctx.ellipse(
            projX - projR * 0.35,
            projY - projR * 0.35,
            projR * 0.28,
            projR * 0.16,
            -Math.PI / 4,
            0,
            Math.PI * 2
          );
          ctx.fill();

          // 4. Luminous Rim Stroke
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
          ctx.lineWidth = 1;
          ctx.stroke();

          ctx.restore();
        }
      }

      // --- LAYER D: 3D Holographic Audio Rings ---
      ctx.save();
      const ringCenterX = width * 0.8;
      const ringCenterY = height * 0.35 - (currentScroll * 0.08) % 120;
      const ringRadius = Math.min(width * 0.18, 140);

      for (let r = 0; r < 2; r++) {
        ctx.beginPath();
        const rScale = 1 + r * 0.45;
        const tiltAngle = time * (0.3 + r * 0.2);
        ctx.ellipse(
          ringCenterX,
          ringCenterY,
          ringRadius * rScale,
          ringRadius * rScale * 0.35,
          tiltAngle,
          0,
          Math.PI * 2
        );
        ctx.strokeStyle = r === 0 ? 'rgba(6, 182, 212, 0.25)' : 'rgba(139, 92, 246, 0.2)';
        ctx.lineWidth = 1.2;
        ctx.setLineDash([6, 8]);
        ctx.stroke();
        ctx.setLineDash([]);
      }
      ctx.restore();

      // --- LAYER E: 3D Particles & Constellation Connections ---
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.z -= p.speed * 1.1 + scrollDelta * 0.3;
          if (p.z < 50) p.z = 1000;
          if (p.z > 1000) p.z = 50;

          p.x = p.baseX + (mouse.x - centerX) * 0.06 * (1000 / p.z);
          p.y = p.baseY + (mouse.y - centerY) * 0.06 * (1000 / p.z) - (currentScroll * 0.18) % height;
        }

        const scale = fov / (fov + p.z);
        const projX = centerX + p.x * scale;
        const projY = centerY + p.y * scale;

        if (projX >= -20 && projX <= width + 20 && projY >= -20 && projY <= height + 20) {
          const alpha = Math.min(1, Math.max(0.1, (1 - p.z / 1000) * 0.8));
          const radius = Math.max(0.8, p.size * scale * 2.4);

          ctx.beginPath();
          ctx.arc(projX, projY, radius, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color} ${alpha})`;
          ctx.fill();

          // Connect nearby projected points
          for (let j = i + 1; j < Math.min(i + 4, particles.length); j++) {
            const p2 = particles[j];
            const scale2 = fov / (fov + p2.z);
            const projX2 = centerX + p2.x * scale2;
            const projY2 = centerY + p2.y * scale2;

            const dist = Math.hypot(projX - projX2, projY - projY2);
            if (dist < 85) {
              ctx.beginPath();
              ctx.moveTo(projX, projY);
              ctx.lineTo(projX2, projY2);
              ctx.strokeStyle = `rgba(180, 160, 240, ${(1 - dist / 85) * alpha * 0.22})`;
              ctx.lineWidth = 0.5;
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

  // Parallax offsets linked to scroll
  const parallaxY1 = scrollY * 0.28;
  const parallaxY2 = -scrollY * 0.22;
  const parallaxY3 = scrollY * 0.15;
  const parallaxY4 = -scrollY * 0.12;

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-20 overflow-hidden bg-[#090d20]"
      aria-hidden="true"
    >
      {/* 1. Luminous Deep Space Canvas Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#090d20] via-[#0e1533] to-[#070b1a] opacity-90" />

      {/* 2. Living Aurora Mesh Gradient Blooms (Vibrant, high-saturation, non-black) */}
      <div
        className="absolute -top-32 -left-20 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-cyan-500/35 via-violet-600/30 to-pink-500/25 blur-[120px] mix-blend-screen transition-transform duration-700 ease-out animate-pulse-subtle"
        style={{
          transform: `translate3d(0, ${parallaxY1}px, 0)`,
        }}
      />
      <div
        className="absolute top-1/4 -right-40 w-[750px] h-[750px] rounded-full bg-gradient-to-bl from-violet-600/35 via-fuchsia-500/30 to-cyan-400/25 blur-[130px] mix-blend-screen transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(0, ${parallaxY2}px, 0)`,
        }}
      />
      <div
        className="absolute top-1/2 -left-24 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-pink-500/30 via-amber-500/25 to-violet-500/20 blur-[130px] mix-blend-screen transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(0, ${parallaxY3}px, 0)`,
        }}
      />
      <div
        className="absolute bottom-16 right-10 w-[700px] h-[700px] rounded-full bg-gradient-to-t from-emerald-500/30 via-cyan-500/25 to-blue-600/20 blur-[125px] mix-blend-screen transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(0, ${parallaxY4}px, 0)`,
        }}
      />

      {/* 3. Dynamic 3D Perspective Grid Underlay */}
      <div
        className="absolute inset-0 opacity-[0.09] mix-blend-screen"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(99, 102, 241, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
          backgroundSize: '54px 54px',
          transform: `perspective(900px) rotateX(48deg) translateY(${-(scrollY * 0.15) % 54}px)`,
          transformOrigin: 'top center',
        }}
      />

      {/* 4. High-Performance Interactive 3D Canvas (Spheres, Waves, Particles, Cursor Glow) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};
