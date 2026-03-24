"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import SectionHeader from "./SectionHeader";

const details = [
  { label: "Location", value: "St Kilda, Melbourne" },
  { label: "Focus", value: "Full Stack Development" },
  { label: "Certification", value: "AWS Cloud Practitioner" },
  { label: "Education", value: "BSc (Hons) — University of Melbourne" },
];

export default function About() {
  return (
    <section id="about" className="py-[120px] max-md:py-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <SectionHeader number="01" title="About" />
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 md:gap-16 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <p
              className="text-xl md:text-2xl font-medium leading-relaxed mb-5"
              style={{ color: "var(--text-primary)" }}
            >
              I&apos;m a full stack developer with a passion for clean,
              maintainable code and elegant solutions.
            </p>
            <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
              Currently at{" "}
              <strong style={{ color: "var(--text-primary)" }}>
                National Australia Bank
              </strong>
              , I build internal developer platforms using React, TypeScript,
              and Node.js. My work spans front-end interfaces to backend API
              layers, with a focus on developer experience and robust testing.
            </p>
            <p style={{ color: "var(--text-secondary)" }}>
              I transitioned into software engineering from healthcare — a
              career change that gave me strong communication skills, attention
              to detail, and the ability to work effectively under pressure. I
              bring that same precision and empathy to writing code.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-5 p-7 rounded-[20px] border"
            style={{
              background: "var(--bg-card)",
              borderColor: "var(--border)",
            }}
          >
            {details.map((d) => (
              <div key={d.label} className="flex flex-col gap-1">
                <span
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--text-muted)" }}
                >
                  {d.label}
                </span>
                <span
                  className="text-[0.95rem] font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  {d.value}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
