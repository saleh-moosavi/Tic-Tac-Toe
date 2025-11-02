import { useRef, useEffect, useCallback } from "react";

interface NewYearBombsWinProps {
  durationMs?: number;
  bursts?: number;
  intensity?: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  ax: number;
  ay: number;
  size: number;
  life: number;
  ttl: number;
  color: string;
  shape: "rect" | "circle";
  rotation: number;
  vr: number;
  friction: number;
  fade: number;
}

export default function NewYearBombsWin({
  durationMs = 4000,
  bursts = 5,
  intensity = 120,
}: NewYearBombsWinProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const runningRef = useRef(false);

  // Random helpers
  const rand = (min: number, max: number): number =>
    Math.random() * (max - min) + min;
  const randInt = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1) + min);

  // Colors for confetti + sparks
  const COLORS = [
    "#ff4d4f", // red
    "#ffa940", // orange
    "#ffd666", // yellow
    "#73d13d", // green
    "#36cfc9", // teal
    "#40a9ff", // blue
    "#9254de", // purple
    "#ff85c0", // pink
    "#ffffff", // white
  ];

  // Create a burst at (x, y) with N particles
  const createBurst = useCallback(
    (x: number, y: number, n: number) => {
      const arr = particlesRef.current;
      for (let i = 0; i < n; i++) {
        const angle = rand(0, Math.PI * 2);
        const speed =
          Math.random() < 0.25 ? rand(0.6, 1.6) * 6 : rand(0.6, 1.6) * 3;
        const size = rand(1.8, 5.6);
        const life = rand(900, 2000);
        const color = COLORS[randInt(0, COLORS.length - 1)];
        const shape: Particle["shape"] =
          Math.random() < 0.6 ? "rect" : "circle";

        arr.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - rand(1.0, 3.6),
          ax: 0,
          ay: 0.006 * (1 + Math.random() * 2),
          size,
          life,
          ttl: life,
          color,
          shape,
          rotation: rand(0, Math.PI * 2),
          vr: rand(-0.12, 0.12),
          friction: 0.999 - Math.random() * 0.002,
          fade: 0.001 + Math.random() * 0.003,
        });
      }
    },
    [COLORS]
  );

  // Single frame update + draw
  const animate = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      w: number,
      h: number,
      lastTime: { current: number }
    ) => {
      const now = performance.now();
      const dt = Math.min(40, now - (lastTime.current || now));
      lastTime.current = now;

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgba(6, 6, 12, 0.2)";
      ctx.fillRect(0, 0, w, h);

      const arr = particlesRef.current;
      for (let i = arr.length - 1; i >= 0; i--) {
        const p = arr[i];
        p.vx *= p.friction;
        p.vy *= p.friction;
        p.vx += p.ax * dt;
        p.vy += p.ay * dt;
        p.x += p.vx * (dt / 16);
        p.y += p.vy * (dt / 16);
        p.rotation += p.vr * (dt / 16);
        p.ttl -= dt;

        const alpha = Math.max(0, p.ttl / p.life);

        ctx.save();
        ctx.globalAlpha = Math.min(1, alpha * 1.6);

        // Glow for small sparks
        if (p.size < 3.2) {
          ctx.beginPath();
          ctx.fillStyle = p.color;
          ctx.globalAlpha = Math.min(0.6, ctx.globalAlpha);
          ctx.arc(p.x, p.y, p.size * 1.8, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        if (p.shape === "rect") {
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size * 1.6, p.size * 0.9);
        } else {
          ctx.beginPath();
          ctx.fillStyle = p.color;
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();

        if (
          p.ttl <= 0 ||
          p.x < -100 ||
          p.x > w + 100 ||
          p.y > h + 200 ||
          p.y < -200
        ) {
          arr.splice(i, 1);
        }
      }

      // random sparkles
      if (Math.random() < 0.04) {
        const sx = rand(0, w);
        const sy = rand(0, h / 2);
        ctx.globalAlpha = 0.12;
        ctx.fillStyle = COLORS[randInt(0, COLORS.length - 1)];
        ctx.fillRect(sx, sy, 2, 2);
      }
    },
    [COLORS]
  );

  // Start a sequence of bursts
  const playBurstSequence = useCallback(
    (ctx: CanvasRenderingContext2D, w: number, h: number) => {
      if (!ctx) return;
      runningRef.current = true;
      const start = performance.now();
      const end = start + durationMs;

      for (let i = 0; i < bursts; i++) {
        const when = rand(0, durationMs);
        setTimeout(() => {
          const x = Math.random() < 0.8 ? rand(w * 0.2, w * 0.8) : rand(0, w);
          const y = rand(h * 0.08, h * 0.45);
          createBurst(x, y, intensity);
        }, when);
      }

      const bigs = Math.max(1, Math.floor(bursts / 4));
      for (let b = 0; b < bigs; b++) {
        setTimeout(() => {
          createBurst(
            w / 2 + rand(-80, 80),
            h / 3 + rand(-40, 60),
            intensity * 1.2
          );
        }, rand(0, durationMs));
      }

      setTimeout(() => {
        runningRef.current = false;
      }, end + 800);
    },
    [bursts, createBurst, durationMs, intensity]
  );

  // setup canvas + animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = canvas.clientWidth);
    let h = (canvas.height = canvas.clientHeight);

    const onResize = () => {
      w = canvas.width = canvas.clientWidth;
      h = canvas.height = canvas.clientHeight;
    };
    window.addEventListener("resize", onResize);

    const lastTime = { current: performance.now() };

    const loop = () => {
      animate(ctx, w, h, lastTime);
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    playBurstSequence(ctx, w, h);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      particlesRef.current.length = 0;
    };
  }, [animate, playBurstSequence]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ touchAction: "none" }}
      />
    </div>
  );
}
