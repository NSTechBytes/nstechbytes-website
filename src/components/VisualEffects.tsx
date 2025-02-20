
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const ShapeDivider = () => {
  return (
    <div className="shape-divider">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
      </svg>
    </div>
  );
};

export const MouseTrailEffect = () => {
  const [trails, setTrails] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    let trailId = 0;

    const createTrailElement = (x: number, y: number) => {
      setTrails(prev => [...prev, { x, y, id: trailId++ }].slice(-15));
    };

    const handleMouseMove = (e: MouseEvent) => {
      createTrailElement(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {trails.map((trail) => (
        <motion.div
          key={trail.id}
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'fixed',
            left: trail.x,
            top: trail.y,
            width: '8px',
            height: '8px',
            backgroundColor: 'hsl(var(--primary))',
            borderRadius: '50%',
            pointerEvents: 'none',
            mixBlendMode: 'screen',
          }}
        />
      ))}
    </>
  );
};

export const BackgroundParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `floating ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export const InteractiveSvgBackground = () => {
  return (
    <svg 
      className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
      style={{ filter: 'blur(40px)' }}
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.2 }} />
          <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 0.2 }} />
        </linearGradient>
      </defs>
      <motion.circle
        cx="50%"
        cy="50%"
        r="30%"
        fill="url(#grad1)"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
          r: ["30%", "35%", "30%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.circle
        cx="70%"
        cy="30%"
        r="20%"
        fill="url(#grad1)"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.3, 0.2],
          r: ["20%", "25%", "20%"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </svg>
  );
};

