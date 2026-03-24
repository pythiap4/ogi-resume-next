"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

interface Props {
  number: string;
  title: string;
}

export default function SectionHeader({ number, title }: Props) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="flex items-center gap-4 mb-16"
    >
      <span
        className="font-mono text-sm font-semibold"
        style={{ color: "var(--accent)" }}
      >
        {number}
      </span>
      <h2 className="text-3xl font-extrabold tracking-[-0.02em]">{title}</h2>
      <div
        className="flex-1 h-px"
        style={{ background: "var(--border)" }}
      />
    </motion.div>
  );
}
