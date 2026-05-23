"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Lock scroll during preloader execution
    document.body.style.overflow = "hidden";

    // Hide panel smoothly after 1.5 seconds (gives the spring logo assembly time to showcase)
    const hideTimeout = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "";
    }, 1500);

    return () => {
      clearTimeout(hideTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 0.98,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white overflow-hidden"
        >
          {/* Centered Website Logo Graphic Only */}
          <div className="relative flex items-center justify-center">
            <motion.img 
              src="/silicon.webp"
              alt="Silicon Computing Ltd Logo"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="h-16 w-auto object-contain select-none"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
