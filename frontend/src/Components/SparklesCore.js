"use client";
import React, { useId, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { cn } from '../utils.js' 
import { motion, useAnimation } from "framer-motion";

export const SparklesCore = (props) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;
  const [init, setInit] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container) => {
    if (container) {
      controls.start({
        opacity: 1,
        transition: { duration: 1 },
      });
    }
  };

  const generatedId = useId();
  return (
    <motion.div animate={controls} className={cn("opacity-0", className)}>
      {init && (
        <Particles
          id={id || generatedId}
          className={cn("h-full w-full")}
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: { value: background || "#0d47a1" },
            },
            fullScreen: { enable: false, zIndex: 1 },
            fpsLimit: 120,
            interactivity: {
              events: {
                resize: true,
              },
            },
            particles: {
              color: { value: particleColor || "#ffffff" },
              move: {
                directions: "none",
                enable: true,
                random: false,
                speed: speed || 0.6,
                straight: false,
              },
              number: {
                density: { enable: true, area: 800 },
                value: particleDensity || 80,
              },
              opacity: {
                animation: {
                  enable: true,
                  speed: 0.6,
                  sync: true,
                },
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: { enable: true, minimumValue: 0.1 },
                value: { min: minSize || 0.1, max: maxSize || 3 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  );
};
