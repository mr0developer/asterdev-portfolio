"use client";

import { Suspense } from 'react';
import Projects from './projects';
import Skills from './skills';
import Blog from './blog';

function LoadingSpinner() {
  return (
    <div className="min-h-[200px] flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-violet-500"></div>
    </div>
  );
}

export default function ClientComponents({ blogs }) {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Blog blogs={blogs} />
      </Suspense>
    </>
  );
} 