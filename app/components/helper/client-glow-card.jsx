"use client";

import { useEffect, useState } from 'react';
import GlowCard from './glow-card';

export default function ClientGlowCard({ children, identifier }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="glow-container">
        <article className="h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full">
          {children}
        </article>
      </div>
    );
  }

  return <GlowCard identifier={identifier}>{children}</GlowCard>;
} 