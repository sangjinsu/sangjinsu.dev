"use client";

import { motion } from "framer-motion";
import { Server, Cloud, Wrench, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectsProps {
  className?: string;
}

const PROJECTS = [
  {
    title: "포코팡타운 서버 운영",
    period: "2022.04 - 2025.10",
    description: "DAU 10만 규모 모바일 퍼즐 게임의 서버 파트 리더",
    highlights: [
      "신규 콘텐츠 설계 및 개발",
      "라이브 서비스 운영",
      "아키텍처 개선 및 최적화",
    ],
    icon: Server,
    tags: ["Go", "MySQL", "Redis", "CouchBase"],
  },
  {
    title: "AWS EKS 마이그레이션",
    period: "2023",
    description: "EC2 기반 인프라를 Kubernetes로 전환",
    highlights: [
      "Terraform으로 IaC 구축",
      "Helm + ArgoCD 기반 GitOps",
      "인프라 비용 30% 절감",
    ],
    icon: Cloud,
    tags: ["Kubernetes", "Terraform", "Helm", "ArgoCD", "AWS"],
    result: "비용 30% 절감",
  },
  {
    title: "패치 파일 생성 툴 재구축",
    period: "2023",
    description: "레거시 시스템을 현대적인 아키텍처로 전환",
    highlights: [
      "Bash + Node.js → Go + SvelteKit",
      "RESTful API 서버 설계",
      "반응형 어드민 대시보드",
    ],
    icon: Wrench,
    tags: ["Go", "SvelteKit", "TypeScript"],
  },
  {
    title: "글로벌 서비스 운영",
    period: "2022 - 2024",
    description: "라인 게임즈 퍼블리셔와 협업한 해외 서비스",
    highlights: [
      "대만, 일본 지역 서비스",
      "다국어 이벤트 동시 운영",
      "시차를 고려한 배포 전략",
    ],
    icon: Globe,
    tags: ["글로벌", "대만", "일본"],
  },
];

export default function Projects({ className }: ProjectsProps) {
  return (
    <section
      id="projects"
      className={cn(
        "relative px-4 py-24 md:py-32",
        "bg-bg-secondary",
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
            Projects
          </h2>
          <p className="mt-4 text-text-secondary">
            실제 서비스에서 경험한 프로젝트들
          </p>
        </motion.div>

        {/* 프로젝트 카드 */}
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              className="group rounded-xl bg-bg-primary p-6 shadow-sm transition-shadow hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              {/* 헤더 */}
              <div className="mb-4 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-accent-blue/10 p-2">
                    <project.icon className="h-5 w-5 text-accent-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">
                      {project.title}
                    </h3>
                    <p className="text-xs text-text-secondary">
                      {project.period}
                    </p>
                  </div>
                </div>
                {project.result && (
                  <span className="rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-600">
                    {project.result}
                  </span>
                )}
              </div>

              {/* 설명 */}
              <p className="mb-4 text-sm text-text-secondary">
                {project.description}
              </p>

              {/* 하이라이트 */}
              <ul className="mb-4 space-y-1">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-center gap-2 text-sm text-text-secondary"
                  >
                    <span className="h-1 w-1 rounded-full bg-accent-blue" />
                    {highlight}
                  </li>
                ))}
              </ul>

              {/* 태그 */}
              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-bg-secondary px-2 py-0.5 text-xs text-text-secondary"
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
