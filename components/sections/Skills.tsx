"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillsProps {
  className?: string;
}

const SKILL_CATEGORIES = [
  {
    title: "Backend",
    color: "bg-blue-500",
    skills: [
      { name: "Go", level: "expert" },
      { name: "Node.js", level: "advanced" },
      { name: "MySQL", level: "expert" },
      { name: "Redis", level: "advanced" },
      { name: "CouchBase", level: "intermediate" },
    ],
  },
  {
    title: "Infrastructure",
    color: "bg-green-500",
    skills: [
      { name: "Kubernetes", level: "expert" },
      { name: "Docker", level: "expert" },
      { name: "Terraform", level: "advanced" },
      { name: "Helm", level: "advanced" },
      { name: "ArgoCD", level: "advanced" },
      { name: "AWS", level: "advanced" },
    ],
  },
  {
    title: "Frontend",
    color: "bg-purple-500",
    skills: [
      { name: "Next.js", level: "intermediate" },
      { name: "SvelteKit", level: "intermediate" },
      { name: "TypeScript", level: "advanced" },
    ],
  },
];

const LEVEL_STYLES = {
  expert: "bg-accent-blue text-white",
  advanced: "bg-accent-blue/70 text-white",
  intermediate: "bg-accent-blue/40 text-text-primary",
};

export default function Skills({ className }: SkillsProps) {
  return (
    <section
      id="skills"
      className={cn(
        "relative px-4 py-24 md:py-32",
        "bg-bg-primary",
        className
      )}
    >
      <div className="mx-auto max-w-4xl">
        {/* 섹션 제목 */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
            Skills
          </h2>
          <p className="mt-4 text-text-secondary">
            서버부터 인프라까지, 풀스택에 가까운 백엔드
          </p>
        </motion.div>

        {/* 스킬 카테고리 */}
        <div className="space-y-12">
          {SKILL_CATEGORIES.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * categoryIndex, duration: 0.5 }}
            >
              {/* 카테고리 제목 */}
              <div className="mb-4 flex items-center gap-3">
                <div className={cn("h-3 w-3 rounded-full", category.color)} />
                <h3 className="text-lg font-semibold text-text-primary">
                  {category.title}
                </h3>
              </div>

              {/* 스킬 태그 */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill.name}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-medium",
                      LEVEL_STYLES[skill.level as keyof typeof LEVEL_STYLES]
                    )}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.1 * categoryIndex + 0.05 * skillIndex,
                      duration: 0.3,
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 범례 */}
        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-text-secondary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-accent-blue" />
            <span>Expert</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-accent-blue/70" />
            <span>Advanced</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-accent-blue/40" />
            <span>Intermediate</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
