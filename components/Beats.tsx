"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface BeatProps {
  progress: MotionValue<number>;
  range: [number, number];
  title: string;
  subtitle: string;
  align?: "left" | "center" | "right";
  isCta?: boolean;
}

function Beat({ progress, range, title, subtitle, align = "center", isCta = false }: BeatProps) {
  const [start, end] = range;
  // Fade in over 10% of range, fade out over last 10%
  // range is e.g. [0.0, 0.2]
  // actually map scroll 0..1 to this range? No, the beat is visible WHEN scroll is in this range.
  
  // Logic: 
  // opacity: 0 at start, 1 at start + 0.05, 1 at end - 0.05, 0 at end
  // y: 20 at start, 0 at start + 0.05, 0 at end - 0.05, -20 at end
  
  const buffer = 0.05; // 5% buffer for fade
  const opacity = useTransform(
    progress,
    [start, start + buffer, end - buffer, end],
    [0, 1, 1, 0]
  );
  
  const y = useTransform(
    progress,
    [start, start + buffer, end - buffer, end],
    [20, 0, 0, -20]
  );

  const alignClass = {
    left: "items-start text-left pl-10 md:pl-32",
    center: "items-center text-center",
    right: "items-end text-right pr-10 md:pr-32"
  }[align];

  return (
    <motion.div 
      className={`fixed inset-0 flex flex-col justify-center pointer-events-none ${alignClass}`}
      style={{ opacity, y }}
    >
      <h2 className={`${isCta ? "text-7xl md:text-9xl text-red-600" : "text-5xl md:text-8xl text-white/90"} font-bold tracking-tighter uppercase mb-4`}>
        {title}
      </h2>
      <p className="text-xl md:text-2xl text-white/60 font-medium tracking-wide">
        {subtitle}
      </p>
    </motion.div>
  );
}

export default function Beats() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* Beat A: 0-20% */}
      <Beat 
        progress={scrollYProgress} 
        range={[0.0, 0.20]} 
        title="Engineered to Dominate" 
        subtitle="The pinnacle of aerodynamic precision." 
      />
      
      {/* Beat B: 25-45% */}
      <Beat 
        progress={scrollYProgress} 
        range={[0.25, 0.45]} 
        title="The Heart of the Bull" 
        subtitle="Uncompromising Honda RBPT power." 
        align="left"
      />
      
      {/* Beat C: 50-70% */}
      <Beat 
        progress={scrollYProgress} 
        range={[0.50, 0.70]} 
        title="Ground Effect Mastery" 
        subtitle="Sculpted by the wind for maximum downforce." 
        align="right"
      />

      {/* Beat D: 75-95% */}
      <Beat 
        progress={scrollYProgress} 
        range={[0.75, 0.95]} 
        title="Oracle Red Bull Racing" 
        subtitle="Join the charge for the next championship." 
        isCta
      />
    </>
  );
}
