import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  opacity: number;
  hue: number;
};

type Props = {
  isDark: boolean;
};

export default function ParticleNetwork({ isDark }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: Particle[] = [];
    const count = 44;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 2.5 + 0.8,
        opacity: Math.random() * 0.6 + 0.15,
        hue: Math.random() > 0.5 ? 192 : 162,
      });
    }

    const connectionDistance = 120;
    const particleLightness = isDark ? 68 : 45;
    const particleSaturation = isDark ? 80 : 65;
    const connectionAlphaMultiplier = isDark ? 0.18 : 0.12;
    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
        grd.addColorStop(0, `hsla(${p.hue}, ${particleSaturation}%, ${particleLightness}%, ${p.opacity})`);
        grd.addColorStop(1, `hsla(${p.hue}, ${particleSaturation}%, ${particleLightness}%, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, ${particleSaturation}%, ${particleLightness}%, ${p.opacity + 0.2})`;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * connectionAlphaMultiplier;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `hsla(192, ${particleSaturation}%, ${particleLightness}%, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: isDark ? 0.26 : 0.16 }}
    />
  );
}
