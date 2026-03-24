"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import SectionHeader from "./SectionHeader";

const highlights = [
  {
    number: "01",
    title: "API Platform",
    text: "Built an internal platform at NAB for API creation, management and sharing — used by engineering teams across the organisation to standardise API development.",
    tags: ["React", "TypeScript", "Node.js"],
  },
  {
    number: "02",
    title: "Swagger Validator",
    text: "Developed a validation engine to check Swagger/OAS definitions against NAB's API standards — ensuring consistency across hundreds of internal APIs.",
    tags: ["Node.js", "OpenAPI", "Jest"],
  },
  {
    number: "03",
    title: "Component Rewrite",
    text: "Rewrote shared pagination logic across multiple React pages, fixing a persistent sort + paginate bug that affected the developer experience across the platform.",
    tags: ["React", "TypeScript", "Cypress"],
  },
  {
    number: "04",
    title: "AWS Certified",
    text: "Earned AWS Cloud Practitioner certification while actively working with EC2, RDS, and Parameter Store for production infrastructure at NAB.",
    tags: ["AWS", "EC2", "RDS"],
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="py-[120px] max-md:py-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <SectionHeader number="04" title="Highlights" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((h) => (
            <motion.div
              key={h.number}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="relative p-9 max-md:p-6 rounded-[20px] border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)] group"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border)",
              }}
            >
              {/* Hover gradient overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent-glow) 0%, transparent 50%)",
                }}
              />

              <span
                className="relative font-mono text-xs font-semibold mb-4 block"
                style={{ color: "var(--accent)" }}
              >
                {h.number}
              </span>
              <h3 className="relative text-xl font-extrabold mb-3">
                {h.title}
              </h3>
              <p
                className="relative text-sm leading-relaxed mb-5"
                style={{ color: "var(--text-secondary)" }}
              >
                {h.text}
              </p>
              <div className="relative flex flex-wrap gap-1.5">
                {h.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-[0.7rem] font-semibold font-mono rounded-full border"
                    style={{
                      background: "var(--bg-secondary)",
                      color: "var(--text-muted)",
                      borderColor: "var(--border)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
