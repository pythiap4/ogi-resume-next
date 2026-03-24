"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeUpDelay } from "@/lib/motion";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const glowY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section
      ref={ref}
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-[120px] pb-20 px-6"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{ y: gridY }}
          className="absolute inset-0"
          aria-hidden
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              maskImage:
                "radial-gradient(ellipse 60% 50% at 50% 50%, black 20%, transparent 70%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 60% 50% at 50% 50%, black 20%, transparent 70%)",
            }}
          />
        </motion.div>
        <motion.div
          style={{ y: glowY, opacity: glowOpacity }}
          className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px]"
          aria-hidden
        >
          <div
            className="w-full h-full animate-pulse"
            style={{
              background:
                "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
              filter: "blur(60px)",
              animationDuration: "6s",
            }}
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-[800px]">
        <motion.div
          variants={fadeUpDelay(0)}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-medium mb-8 border"
          style={{
            background: "var(--bg-card)",
            borderColor: "var(--border)",
            color: "var(--text-secondary)",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Available for opportunities
        </motion.div>

        <motion.h1
          variants={fadeUpDelay(0.1)}
          initial="hidden"
          animate="visible"
          className="text-[clamp(3rem,8vw,6.5rem)] font-black tracking-[-0.04em] leading-[1.05] mb-5"
        >
          Ognen
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--accent-gradient)" }}
          >
            Slavkovski
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUpDelay(0.2)}
          initial="hidden"
          animate="visible"
          className="text-xl font-semibold uppercase tracking-[0.15em] mb-5"
          style={{ color: "var(--accent)" }}
        >
          Software Engineer
        </motion.p>

        <motion.p
          variants={fadeUpDelay(0.35)}
          initial="hidden"
          animate="visible"
          className="text-lg max-w-[560px] mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          Full stack developer building with React, TypeScript, Node.js &amp;
          Express.
          <br />
          Based in Melbourne, Australia.
        </motion.p>

        <motion.div
          variants={fadeUpDelay(0.5)}
          initial="hidden"
          animate="visible"
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-[28px] text-white transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "var(--accent)",
              boxShadow: "0 4px 20px rgba(108, 99, 255, 0.3)",
            }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-[28px] border transition-all duration-300 hover:-translate-y-0.5"
            style={{
              borderColor: "var(--border-hover)",
              color: "var(--text-primary)",
            }}
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          variants={fadeUpDelay(0.5)}
          initial="hidden"
          animate="visible"
          className="mt-16 flex justify-center"
        >
          <div
            className="w-px h-[60px] scroll-line-anim"
            style={{
              background:
                "linear-gradient(to bottom, var(--accent), transparent)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
