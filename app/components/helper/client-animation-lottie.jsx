"use client";

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const LottieAnimation = dynamic(() => import('./animation-lottie'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-violet-500"></div>
    </div>
  )
});

export default function ClientAnimationLottie({ animationPath, width }) {
  return (
    <Suspense fallback={
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-violet-500"></div>
      </div>
    }>
      <LottieAnimation animationPath={animationPath} width={width} />
    </Suspense>
  );
} 