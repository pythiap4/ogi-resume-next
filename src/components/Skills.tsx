"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, scaleIn } from "@/lib/motion";
import SectionHeader from "./SectionHeader";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; primary?: boolean }[];
}

const categories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    ),
    skills: [
      { name: "React", primary: true },
      { name: "TypeScript", primary: true },
      { name: "JavaScript", primary: true },
      { name: "Next.js" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JSX" },
      { name: "Cypress" },
    ],
  },
  {
    title: "Backend",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
    ),
    skills: [
      { name: "Node.js", primary: true },
      { name: "Express", primary: true },
      { name: "PostgreSQL" },
      { name: "Sequelize" },
      { name: "C#" },
      { name: "REST APIs" },
      { name: "Jest" },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
    ),
    skills: [
      { name: "AWS", primary: true },
      { name: "Jenkins" },
      { name: "Splunk" },
      { name: "GitHub" },
      { name: "Postman" },
      { name: "Swagger / OAS" },
      { name: "Agile" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-[120px] max-md:py-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <SectionHeader number="02" title="Skills" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="p-8 rounded-[20px] border transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border)",
              }}
              whileHover={{ borderColor: "var(--border-hover)" }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                style={{
                  background: "var(--accent-glow)",
                  color: "var(--accent)",
                }}
              >
                {cat.icon}
              </div>
              <h3 className="text-lg font-bold mb-4">{cat.title}</h3>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    variants={scaleIn}
                    className="inline-block px-3.5 py-1.5 text-xs font-medium rounded-full border transition-all duration-300 hover:-translate-y-px"
                    style={
                      skill.primary
                        ? {
                            background: "var(--accent-glow)",
                            color: "var(--accent-light)",
                            borderColor: "rgba(108, 99, 255, 0.2)",
                          }
                        : {
                            background: "var(--bg-secondary)",
                            color: "var(--text-secondary)",
                            borderColor: "var(--border)",
                          }
                    }
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
