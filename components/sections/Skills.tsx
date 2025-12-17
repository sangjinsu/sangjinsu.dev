"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillsProps {
  className?: string;
}

interface Skill {
  name: string;
  level: "expert" | "advanced" | "intermediate";
  description: string[];
}

interface SkillCategory {
  title: string;
  color: string;
  skills: Skill[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend & Database",
    color: "bg-blue-500",
    skills: [
      {
        name: "Go (Golang)",
        level: "expert",
        description: [
          "메인 서버 개발 언어로 3년 이상 실무 사용",
          "실시간 게임 서버 구조 설계 및 개선",
        ],
      },
      {
        name: "MySQL",
        level: "expert",
        description: [
          "안정성 중심 테이블 설계",
          "카디널리티를 고려한 인덱스 구성",
        ],
      },
      {
        name: "Redis",
        level: "advanced",
        description: [
          "랭킹 시스템 구현",
          "캐싱 전략 수립 및 실시간 데이터 처리",
        ],
      },
      {
        name: "CouchBase",
        level: "intermediate",
        description: ["세션 데이터 저장 및 관리"],
      },
      {
        name: "Node.js",
        level: "intermediate",
        description: ["운영툴 API 구성"],
      },
    ],
  },
  {
    title: "Infrastructure & DevOps",
    color: "bg-green-500",
    skills: [
      {
        name: "Kubernetes & Docker",
        level: "expert",
        description: [
          "AWS EKS 기반 개발, QA 환경 구성",
          "클러스터 자원 최적화",
        ],
      },
      {
        name: "DevOps / CI-CD",
        level: "advanced",
        description: [
          "Terraform, Helm, ArgoCD 기반 배포 자동화",
          "Jenkins, GitHub Actions 파이프라인 구성",
        ],
      },
      {
        name: "AWS",
        level: "advanced",
        description: ["EKS, EC2, RDS, S3, CloudWatch"],
      },
      {
        name: "Monitoring",
        level: "advanced",
        description: ["Grafana, Prometheus"],
      },
    ],
  },
  {
    title: "Frontend (운영툴)",
    color: "bg-purple-500",
    skills: [
      {
        name: "SvelteKit / Next.js",
        level: "intermediate",
        description: ["반응형 어드민 대시보드 개발"],
      },
      {
        name: "TypeScript",
        level: "advanced",
        description: ["타입 안전한 프론트엔드 개발"],
      },
    ],
  },
];

const LEVEL_STYLES = {
  expert: "bg-accent-blue text-white",
  advanced: "bg-accent-blue/70 text-white",
  intermediate: "bg-accent-blue/40 text-text-primary",
};

const LEVEL_LABELS = {
  expert: "상",
  advanced: "중",
  intermediate: "하",
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
          className="mb-8 text-center"
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

        {/* 범례 */}
        <motion.div
          className="mb-12 flex flex-wrap items-center justify-center gap-6 text-sm text-text-secondary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-text-secondary/60">전문성 수준:</span>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-accent-blue" />
            <span>상 (Expert)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-accent-blue/70" />
            <span>중 (Advanced)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-accent-blue/40" />
            <span>하 (Intermediate)</span>
          </div>
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
              <div className="mb-6 flex items-center gap-3">
                <div className={cn("h-3 w-3 rounded-full", category.color)} />
                <h3 className="text-lg font-semibold text-text-primary">
                  {category.title}
                </h3>
              </div>

              {/* 스킬 카드 */}
              <div className="grid gap-4 md:grid-cols-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="rounded-lg bg-bg-secondary p-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.1 * categoryIndex + 0.05 * skillIndex,
                      duration: 0.3,
                    }}
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-medium text-text-primary">
                        {skill.name}
                      </span>
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 text-xs font-medium",
                          LEVEL_STYLES[skill.level]
                        )}
                      >
                        {LEVEL_LABELS[skill.level]}
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {skill.description.map((desc, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-text-secondary/40" />
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
