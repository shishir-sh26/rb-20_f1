"use client";

import F1ImageSequence from "@/components/F1ImageSequence";
import Beats from "@/components/Beats";

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen">
      {/* 
        Scroll container
        Height determines total scroll distance.
        400vh = 4 screens of scroll distance.
      */}
      <div className="relative h-[800vh]">
        {/* Sticky 3D/Image Layer */}
        <F1ImageSequence />

        {/* Text Overlays (Fixed position handled inside component or absolute here) */}
        {/* But they need to be fixed relative to viewport, or useTransform based on scroll */}
        {/* Beats component handles positioning via fixed/absolute */}
        <Beats />
      </div>

      {/* Specs Section */}
      <section className="bg-[#050505] text-white py-32 px-6 md:px-24 border-t border-white/10 relative z-10 shadow-2xl">
        <div className="max-w-7xl mx-auto">
           <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-16">TECHNICAL SPECS</h2>
           
           {/* Primary Specs Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-lg text-white/70 mb-24">
              {/* Power Unit */}
              <div>
                  <h3 className="text-2xl text-white font-bold mb-4 border-l-4 border-red-600 pl-4">POWER UNIT</h3>
                  <ul className="space-y-4">
                    <li className="flex justify-between border-b border-white/10 py-2">
                        <span>Manufacturer</span> <span className="text-white font-mono">Honda RBPT</span>
                    </li>
                    <li className="flex justify-between border-b border-white/10 py-2">
                        <span>Config</span> <span className="text-white font-mono">90° V6 Turbo Hybrid</span>
                    </li>
                    <li className="flex justify-between border-b border-white/10 py-2">
                        <span>Displacement</span> <span className="text-white font-mono">1,600cc</span>
                    </li>
                    <li className="flex justify-between border-b border-white/10 py-2">
                        <span>Max RPM</span> <span className="text-white font-mono">15,000</span>
                    </li>
                    <li className="flex justify-between border-b border-white/10 py-2">
                        <span>Power</span> <span className="text-white font-mono">900HP+ (Est)</span>
                    </li>
                  </ul>
              </div>

              {/* Chassis & Transmission */}
              <div>
                  <h3 className="text-2xl text-white font-bold mb-4 border-l-4 border-red-600 pl-4">CHASSIS</h3>
                  <ul className="space-y-4">
                    <li className="flex justify-between border-b border-white/10 py-2">
                        <span>Material</span> <span className="text-white font-mono text-right text-sm">Carbon Composite Monocoque</span>
                    </li>
                    <li className="flex justify-between border-b border-white/10 py-2">
                        <span>Weight</span> <span className="text-white font-mono">798kg (Min)</span>
                    </li>
                     <li className="flex justify-between border-b border-white/10 py-2">
                        <span>Transmission</span> <span className="text-white font-mono text-right text-sm">8-Speed Semi-Auto</span>
                    </li>
                     <li className="flex justify-between border-b border-white/10 py-2">
                        <span>Brakes</span> <span className="text-white font-mono">Carbon-Carbon</span>
                    </li>
                     <li className="flex justify-between border-b border-white/10 py-2">
                        <span>System</span> <span className="text-white font-mono">Brake-by-Wire</span>
                    </li>
                  </ul>
              </div>

               {/* Dimensions & Components */}
              <div>
                  <h3 className="text-2xl text-white font-bold mb-4 border-l-4 border-red-600 pl-4">DIMENSIONS</h3>
                  <ul className="space-y-4">
                    <li className="flex justify-between border-b border-white/10 py-2">
                        <span>Length</span> <span className="text-white font-mono">~5,500mm</span>
                    </li>
                    <li className="flex justify-between border-b border-white/10 py-2">
                        <span>Width</span> <span className="text-white font-mono">2,000mm</span>
                    </li>
                    <li className="flex justify-between border-b border-white/10 py-2">
                        <span>Height</span> <span className="text-white font-mono">970mm</span>
                    </li>
                    <li className="flex justify-between border-b border-white/10 py-2">
                        <span>Wheels</span> <span className="text-white font-mono">18&quot; BBS Forged</span>
                    </li>
                     <li className="flex justify-between border-b border-white/10 py-2">
                        <span>Tyres</span> <span className="text-white font-mono">Pirelli P Zero</span>
                    </li>
                  </ul>
              </div>
           </div>

           {/* Performance Stats */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-12 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                <div className="text-center">
                    <p className="text-white/50 text-sm tracking-[0.2em] uppercase mb-4">Top Speed</p>
                    <p className="text-6xl md:text-7xl font-black text-white italic tracking-tighter">350<span className="text-3xl not-italic ml-2 text-red-600">km/h+</span></p>
                </div>
                <div className="text-center md:border-l md:border-r border-white/10 py-8 md:py-0 border-t border-b md:border-t-0 md:border-b-0 my-8 md:my-0">
                     <p className="text-white/50 text-sm tracking-[0.2em] uppercase mb-4">0 - 100 km/h</p>
                    <p className="text-6xl md:text-7xl font-black text-white italic tracking-tighter">2.6<span className="text-3xl not-italic ml-2 text-red-600">s</span></p>
                </div>
                <div className="text-center">
                     <p className="text-white/50 text-sm tracking-[0.2em] uppercase mb-4">Lateral Force</p>
                    <p className="text-6xl md:text-7xl font-black text-white italic tracking-tighter">5.5<span className="text-3xl not-italic ml-2 text-red-600">G</span></p>
                </div>
           </div>
        </div>
      </section>

      {/* Deep Dive Section */}
       <section className="bg-[#050505] text-white py-32 px-6 md:px-24 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-1">
                 <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-red-600">AERO<br/>DOMINANCE</h2>
                 <p className="text-xl text-white/60 leading-relaxed">
                    The RB20 represents a radical evolution of the ground-effect concept. Notable for its aggressive sidepod inlets and the 'cannon' style engine cover cooling solution, optimizing airflow to the rear beam wing.
                 </p>
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-500 group">
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-red-500 transition-colors">DRS EFFICIENCY</h3>
                    <p className="text-white/60">
                       A sophisticated drag reduction system that stalls the rear wing more effectively than any rival, providing a decisive top-speed advantage on straights.
                    </p>
                 </div>
                 <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-500 group">
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-red-500 transition-colors">SUSPENSION GEOMETRY</h3>
                    <p className="text-white/60">
                       Pull-rod front and push-rod rear suspension configuration designed to maintain a stable aerodynamic platform under extreme braking and cornering loads.
                    </p>
                 </div>
                 <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-500 group">
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-red-500 transition-colors">FLOOR SEALING</h3>
                    <p className="text-white/60">
                       Intricate floor edge wing details create powerful vortices to seal the underfloor, maximizing downforce generation without porpoising.
                    </p>
                 </div>
                  <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-500 group">
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-red-500 transition-colors">RACE STRATEGY</h3>
                    <p className="text-white/60">
                       Built for tire preservation, allowing aggressive strategy calls and longer stints on softer compounds.
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="h-screen md:h-96 flex flex-col items-center justify-center bg-[#050505] text-white border-t border-white/10 relative z-10">
          <p className="text-white/40 text-xs md:text-sm tracking-[0.3em] uppercase mb-6">Creativity meets Engineering</p>
          
          <div className="flex items-center gap-3 mb-8">
            <span className="text-white/60 font-light text-lg">Created by</span>
            <span className="font-black text-2xl md:text-3xl text-red-600 tracking-wider">SHISHIR</span>
          </div>

          <a 
            href="https://github.com/shishir-sh26/rb-20_f1.git"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-3 border border-white/20 rounded-full hover:bg-white/10 hover:border-red-600/50 transition-all duration-300 flex items-center gap-3 bg-white/5 backdrop-blur-sm"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white/80 group-hover:text-white transition-colors"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            <span className="text-sm font-medium text-white/90 group-hover:text-white">View Source Code</span>
          </a>
      </footer>
    </main>
  );
}
