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

const SKILLS: Skill[] = [
  {
    name: "Go",
    level: "expert",
    description: [
      "실시간 서버 개발 및 구조 개선",
      "운영 시스템 이관 (Bash → Go)",
    ],
  },
  {
    name: "MySQL",
    level: "expert",
    description: [
      "안정성 중심 테이블 설계",
      "데이터 모델링, 제약 조건, 인덱스 구성",
    ],
  },
  {
    name: "Redis",
    level: "advanced",
    description: [
      "랭킹 시스템 구현",
      "Pub/Sub 구조 설계 및 운영 적용",
    ],
  },
  {
    name: "CouchBase",
    level: "intermediate",
    description: ["세션 데이터 저장 및 관리"],
  },
  {
    name: "Server Architecture",
    level: "advanced",
    description: [
      "콘텐츠 단위 모듈화",
      "방어적 코드 설계로 서버 안정성 향상",
    ],
  },
  {
    name: "DevOps / CI-CD",
    level: "advanced",
    description: ["Terraform, Helm, ArgoCD 기반 배포 자동화 및 클러스터 운영"],
  },
  {
    name: "Docker / K8S",
    level: "expert",
    description: [
      "AWS EKS 기반 개발, QA 환경 구성",
      "클러스터 자원 최적화",
    ],
  },
  {
    name: "Node.js / Express / Next.js",
    level: "intermediate",
    description: ["운영툴 API 및 프론트엔드 구성"],
  },
  {
    name: "Terraform / Helm / ArgoCD / Argo Workflow",
    level: "advanced",
    description: ["클라우드 인프라 자동화 및 배포 시스템 구성"],
  },
  {
    name: "Github Actions / Jenkins",
    level: "advanced",
    description: ["서버 자동 빌드 및 테스트 환경 구성"],
  },
  {
    name: "Headlamp / Goldilocks",
    level: "intermediate",
    description: ["EKS 리소스 시각화 및 최적화 도구"],
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

        {/* Skills */}
        <div className="grid gap-4 md:grid-cols-2">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="rounded-lg bg-bg-secondary p-4"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.05 * index,
                duration: 0.3,
              }}
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="font-medium font-mono text-text-primary">
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
      </div>
    </section>
  );
}
