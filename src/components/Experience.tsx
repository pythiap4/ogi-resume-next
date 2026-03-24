"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import SectionHeader from "./SectionHeader";

interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const nabAchievements: Achievement[] = [
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>,
    title: "Frontend Development",
    description: "Built web applications with TypeScript, React, JSX, and Next.js. Developed an internal platform for API creation, management and sharing across NAB's engineering teams. Wrote end-to-end tests in Cypress.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    title: "Pagination Rewrite",
    description: "Rewrote pagination logic for a shared React component used across multiple pages, resolving a critical bug where sort-by-column conflicted with pagination state.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
    title: "Backend & APIs",
    description: "Created API endpoints with Node.js, Express and TypeScript backed by PostgreSQL. Built Swagger definition validators to enforce company API standards, and a deep-search utility for arrays and JSON objects — all with comprehensive Jest tests.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
    title: "Cloud & Infrastructure",
    description: "Troubleshot AWS infrastructure across EC2, Parameter Store, and RDS. Gained AWS Cloud Practitioner certification. Managed CI/CD pipelines via Jenkins with GitHub integration.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
    title: "Observability & Knowledge Sharing",
    description: "Authored structured error logs with appropriate codes for Splunk diagnostics. Wrote Confluence documentation and led technical sessions to share learnings across the team.",
  },
];

const coteAchievements: Achievement[] = [
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
    title: "Template Development",
    description: "Created and modified digitally generated communications using HTML and CSS, customising stylesheets shared across multiple templates. Updated C# logic controlling template generation and transmission.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>,
    title: "Data & Agile",
    description: "Managed internal and external data communication via XML/XSD models. Worked within an agile methodology with regular sprints and retrospectives.",
  },
];

function TechPill({ label }: { label: string }) {
  return (
    <span
      className="inline-block px-3 py-1 text-xs font-semibold font-mono rounded-full border"
      style={{
        background: "var(--accent-glow)",
        color: "var(--accent-light)",
        borderColor: "rgba(108, 99, 255, 0.15)",
      }}
    >
      {label}
    </span>
  );
}

function AchievementItem({ achievement }: { achievement: Achievement }) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex gap-4 items-start"
    >
      <div
        className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center border"
        style={{
          background: "var(--bg-secondary)",
          borderColor: "var(--border)",
          color: "var(--accent)",
        }}
      >
        {achievement.icon}
      </div>
      <div>
        <h4 className="font-bold mb-1">{achievement.title}</h4>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {achievement.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-[120px] max-md:py-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <SectionHeader number="03" title="Experience" />

        {/* NAB — Featured */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="rounded-[20px] border overflow-hidden mb-8 relative transition-all duration-300 hover:shadow-[var(--shadow-md)]"
          style={{
            background: "var(--bg-card)",
            borderColor: "rgba(108, 99, 255, 0.15)",
          }}
        >
          {/* Accent top bar */}
          <div
            className="absolute top-0 left-0 right-0 h-[3px]"
            style={{ background: "var(--accent-gradient)" }}
          />

          <div
            className="px-6 md:px-9 pt-8 pb-6 border-b"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="flex items-baseline gap-3 mb-2">
              <h3 className="text-2xl font-extrabold tracking-[-0.02em]">
                National Australia Bank
              </h3>
              <span
                className="text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                Melbourne
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-4">
              <span
                className="font-semibold"
                style={{ color: "var(--accent)" }}
              >
                Software Engineering Intern
              </span>
              <span
                className="text-sm font-mono"
                style={{ color: "var(--text-muted)" }}
              >
                Feb 2022 — Present
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["React", "TypeScript", "Node.js", "Express", "Jest", "PostgreSQL", "AWS", "Jenkins", "Splunk"].map(
                (t) => (
                  <TechPill key={t} label={t} />
                )
              )}
            </div>
          </div>

          <div className="px-6 md:px-9 py-7">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              {nabAchievements.map((a) => (
                <AchievementItem key={a.title} achievement={a} />
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Cote Ltd */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="rounded-[20px] border overflow-hidden mb-8 transition-all duration-300 hover:shadow-[var(--shadow-md)]"
          style={{
            background: "var(--bg-card)",
            borderColor: "var(--border)",
          }}
        >
          <div
            className="px-6 md:px-9 pt-8 pb-6 border-b"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="flex items-baseline gap-3 mb-2">
              <h3 className="text-2xl font-extrabold tracking-[-0.02em]">
                Cote Ltd
              </h3>
              <span
                className="text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                Melbourne
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-4">
              <span
                className="font-semibold"
                style={{ color: "var(--accent)" }}
              >
                Web Template Developer
              </span>
              <span
                className="text-sm font-mono"
                style={{ color: "var(--text-muted)" }}
              >
                Oct 2021 — Feb 2022
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["HTML", "CSS", "C#", "XML", "XSD"].map((t) => (
                <TechPill key={t} label={t} />
              ))}
            </div>
          </div>

          <div className="px-6 md:px-9 py-7">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              {coteAchievements.map((a) => (
                <AchievementItem key={a.title} achievement={a} />
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Prior Experience */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-3 p-6 md:px-9 md:py-7 rounded-[20px] border"
          style={{
            background: "var(--bg-card)",
            borderColor: "var(--border)",
          }}
        >
          <h4
            className="text-xs font-semibold uppercase tracking-wider mb-4"
            style={{ color: "var(--text-muted)" }}
          >
            Prior Experience
          </h4>
          <div className="flex flex-col gap-3">
            {[
              { company: "AGFA Healthcare", role: "Applications Specialist", date: "2017–2019" },
              { company: "Imaging Solutions", role: "Applications Specialist", date: "2016–2017" },
            ].map((item) => (
              <div
                key={item.company}
                className="flex flex-wrap items-center gap-2 md:gap-4 text-sm"
              >
                <span
                  className="font-semibold min-w-[160px]"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.company}
                </span>
                <span
                  className="flex-1"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.role}
                </span>
                <span
                  className="font-mono text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  {item.date}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
