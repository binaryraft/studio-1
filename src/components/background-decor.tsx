'use client';

import { useEffect, useState } from 'react';

const BackgroundDecor = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-50 h-full w-full bg-white pointer-events-none overflow-hidden">
      {/* High-end architectual grid - slightly more defined for premium feel */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:48px_48px] opacity-[0.2]"></div>

      {/* Subtle, focused glow instead of large haze */}
      <div
        className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/[0.03] to-transparent"
      />
    </div>
  );
};

export default BackgroundDecor;
