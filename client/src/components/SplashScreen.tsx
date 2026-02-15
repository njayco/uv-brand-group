import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import uvBrandLogo from "@assets/IMG_1421_1771122238957.PNG";

interface SplashScreenProps {
  onEnter: () => void;
}

export default function SplashScreen({ onEnter }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);

  const startLoading = useCallback(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    if (!loading) return;

    const duration = 2800;
    const interval = 30;
    const increment = (interval / duration) * 100;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= 100) {
        current = 100;
        clearInterval(timer);
        setTimeout(() => setReady(true), 300);
      }
      setProgress(Math.min(current, 100));
    }, interval);

    return () => clearInterval(timer);
  }, [loading]);

  useEffect(() => {
    if (ready) {
      const timeout = setTimeout(onEnter, 600);
      return () => clearTimeout(timeout);
    }
  }, [ready, onEnter]);

  return (
    <AnimatePresence>
      {!ready && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0a]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 opacity-[0.03]">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex flex-col items-center gap-10 px-6"
          >
            <div className="relative">
              <div className="w-48 h-48 sm:w-64 sm:h-64 relative flex items-center justify-center">
                <img
                  src={uvBrandLogo}
                  alt="UV Brand"
                  className="w-full h-full object-contain invert opacity-90"
                  style={{ filter: "invert(1) brightness(1.2)" }}
                />
              </div>

              <motion.div
                className="absolute -inset-4 rounded-full border border-white/5"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <div className="text-center space-y-2">
              <h1
                className="text-white text-2xl sm:text-3xl tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Unrevealed Brand
              </h1>
              <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <p className="text-white/40 text-xs tracking-[0.2em] uppercase">
                A Subsidiary of UV Music Group
              </p>
            </div>

            {!loading ? (
              <motion.button
                data-testid="button-enter-site"
                onClick={startLoading}
                className="relative mt-4 px-12 py-3 border border-white/20 text-white/80 text-sm tracking-[0.25em] uppercase transition-all duration-300 hover:border-white/40 hover:text-white"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span className="relative z-10">Enter</span>
              </motion.button>
            ) : (
              <motion.div
                className="mt-4 w-64 sm:w-80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase">
                    Initializing
                  </span>
                  <span className="text-white/60 text-[10px] font-mono">
                    {Math.round(progress)}%
                  </span>
                </div>

                <div className="relative h-[2px] w-full bg-white/10 overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-white/70"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.05 }}
                  />
                </div>

                <div className="mt-3 flex justify-between">
                  <span className="text-white/20 text-[8px] tracking-[0.15em] uppercase">
                    Licensed to Build Revenue
                  </span>
                  <span className="text-white/20 text-[8px] tracking-[0.15em]">
                    EST. 2014
                  </span>
                </div>
              </motion.div>
            )}
          </motion.div>

          <div className="absolute bottom-8 text-white/15 text-[9px] tracking-[0.2em] uppercase">
            &copy; 2026 Unrevealed Brand. All rights reserved.
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
