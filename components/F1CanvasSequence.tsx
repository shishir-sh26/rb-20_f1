"use client";

import { useScroll, useSpring, useTransform, MotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function F1CanvasSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [percentLoad, setPercentLoad] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Scroll progress for the entire page (or container)
  const { scrollYProgress } = useScroll();
  
  // Smooth out the scroll value
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Load images on mount
  useEffect(() => {
    let isCancelled = false;
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      const totalFrames = 120; // As per requirements
      
      for (let i = 0; i < totalFrames; i++) {
        if (isCancelled) return;
        
        // Construct filename: frame_0.webp to frame_119.webp
        // Adapting to existing file names if needed, but assuming manual rename/convert or simple mapping
        // The current files are ezgif-frame-001.jpg etc. 
        // I will write logic to handle both or just standard logic and expect files to be renamed.
        // For now, I'll assume they will be renamed to frame_X.jpg for simplicity given the constraints,
        // or I can handle the ezgif naming if I can't rename them.
        // Let's assume standard naming frame_X.jpg for now and I'll rename them.
        const src = `/sequence/frame_${i}.jpg`; 
        
        const img = new Image();
        img.src = src;
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = () => {
             // Fallback or skip
             console.error(`Failed to load ${src}`);
             resolve(null);
          };
        });
        
        loadedImages.push(img);
        setPercentLoad(Math.round(((i + 1) / totalFrames) * 100));
      }
      
      if (!isCancelled) {
        setImages(loadedImages);
        setIsLoaded(true);
      }
    };

    loadImages();

    return () => {
      isCancelled = true;
    };
  }, []);

  // Draw frame based on scroll
  useEffect(() => {
    const render = (latest: number) => {
      if (!canvasRef.current || images.length === 0) return;
      
      const ctx = canvasRef.current.getContext("2d");
      if (!ctx) return;

      // Map 0-1 to 0-(totalFrames-1)
      const frameIndex = Math.min(
        images.length - 1,
        Math.floor(latest * (images.length - 1))
      );
      
      const img = images[frameIndex];
      if (!img) return;

      // Responsive cover/contain logic
      const canvas = canvasRef.current;
      const cw = canvas.width;
      const ch = canvas.height;
      
      // Clear
      ctx.clearRect(0, 0, cw, ch);
      
      // Calculate scale to "contain" (show full car) or "cover"
      // User said "contain" fit logic for mobile scaling
      const imgRatio = img.width / img.height;
      const canvasRatio = cw / ch;
      
      let renderW, renderH;
      
      if (canvasRatio > imgRatio) {
        // Canvas is wider than image -> constrain by height
        renderH = ch;
        renderW = ch * imgRatio;
      } else {
        // Canvas is taller/narrower -> constrain by width
        renderW = cw;
        renderH = cw / imgRatio;
      }
      
      // Center
      const offsetX = (cw - renderW) / 2;
      const offsetY = (ch - renderH) / 2;
      
      // Optimize for quality
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      
      ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
    };

    // Subscribe to spring changes
    const unsubscribe = smoothProgress.on("change", render);
    
    // Initial draw
    if (isLoaded) render(smoothProgress.get());

    return () => unsubscribe();
  }, [smoothProgress, images, isLoaded]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
        if(canvasRef.current) {
            // Set actual size in memory (scaled to account for extra pixel density)
            const dpr = window.devicePixelRatio || 1;
            canvasRef.current.width = window.innerWidth * dpr;
            canvasRef.current.height = window.innerHeight * dpr;
            
            // Normalize coordinate system to use css pixels.
            // However, since we are drawing an image, we might just want to draw to the full width/height
            // to maximize quality. The render function uses canvas.width/height (cw/ch).
            // So if we set width/height to dpr size, cw/ch will be larger, and drawImage will draw larger.
            // This is exactly what we want for crisp images.
            
            // We just need to ensure the style width/height matches the window (which it does via CSS w-full h-full)
        }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            <p className="font-mono text-xs text-white/50">INITIALIZING RB20... {percentLoad}%</p>
        </div>
      </div>
    );
  }

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#050505]">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
