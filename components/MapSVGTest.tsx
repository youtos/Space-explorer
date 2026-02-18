import React from 'react';

interface MapSVGProps {
  theme: 'light' | 'dark';
}

export function MapSVGTest({ theme }: MapSVGProps) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-auto">
      <circle cx="50" cy="50" r="40" fill={theme === 'dark' ? 'white' : 'black'} />
      <text x="50" y="55" textAnchor="middle" fill={theme === 'dark' ? 'black' : 'white'}>Test</text>
    </svg>
  );
}
