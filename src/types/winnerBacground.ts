export interface NewYearBombsWinProps {
  durationMs?: number;
  bursts?: number;
  intensity?: number;
}

export interface Particle {
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