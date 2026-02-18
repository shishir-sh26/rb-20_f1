"use client";

import { useScroll, useSpring, useTransform, MotionValue } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function F1ImageSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [percentLoad, setPercentLoad] = useState(0);
  const [images, setImages] = useState<string[]>([]);

  // Scroll progress relative to this component's container
  // We need to lift the ref to the parent or wrap this in the container. 
  // Actually, let's keep it simple: track window scroll, but mapped?
  // Easier: useScrollTarget logic. 
  // Let's rely on the sticky behavior and window scroll for now to fix the bug first.
  
  const { scrollYProgress } = useScroll();
  
  // Smooth scroll
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Preload
  useEffect(() => {
    const totalFrames = 232; // Updated to match actual asset count
    const loadedUrls: string[] = [];
    let loadedCount = 0;

    const loadBatch = async () => {
      for (let i = 0; i < totalFrames; i++) {
        // Use standard naming convention
        const src = `/sequence/frame_${i}.jpg`;
        const img = new Image();
        img.src = src;
        await new Promise((resolve) => {
           img.onload = resolve;
           img.onerror = resolve; // Continue even on error
        });
        loadedUrls.push(src);
        loadedCount++;
        setPercentLoad(Math.round((loadedCount / totalFrames) * 100));
      }
      setImages(loadedUrls);
      setIsLoaded(true);
    };

    loadBatch();
  }, []);

  // Update frame on scroll
  useEffect(() => {
    const updateFrame = (latest: number) => {
      if (images.length === 0) return;
      const maxFrame = images.length - 1;
      const frameIndex = Math.min(
        maxFrame, 
        Math.floor(latest * maxFrame)
      );
      setCurrentFrame(frameIndex);
    };

    const unsubscribe = smoothProgress.on("change", updateFrame);
    return () => unsubscribe();
  }, [smoothProgress, images]);

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#050505] text-white z-50">
        <div className="flex flex-col items-center gap-4">
            <div className="h-1 w-64 bg-gray-800 rounded overflow-hidden">
                <div 
                    className="h-full bg-red-600 transition-all duration-100 ease-out"
                    style={{ width: `${percentLoad}%` }}
                />
            </div>
            <p className="font-mono text-xs text-white/50">LOADING ASSETS... {percentLoad}%</p>
        </div>
      </div>
    );
  }

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#050505] flex items-center justify-center">
      {/* 
        Using native img tag for best quality matching. 
        object-contain ensures we see the whole car without cropping.
      */}
      <img 
        src={`/sequence/frame_${currentFrame}.jpg`} 
        alt="RB20 Sequence"
        className="max-w-full max-h-full object-contain pointer-events-none"
        style={{
             // Hardware acceleration hint
             willChange: 'transform',
        }}
      />
      {/* Hide Watermark with Logo */}
      <img 
        src="/red-bull-racing-f1-logo-png_seeklogo-406796.png" 
        alt="Red Bull Racing" 
        className="absolute bottom-4 right-6 w-32 object-contain z-50 pointer-events-none opacity-80"
      />
    </div>
  );
}
