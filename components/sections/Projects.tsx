"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Settings,
  TrendingDown,
  FileCode,
  Server,
  GitBranch,
  Layers,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface ProjectsProps {
  className?: string;
}

interface Project {
  title: string;
  period: string;
  summary: string;
  role: string[];
  result: string[];
  problem?: string[];
  solution?: string[];
  tech: string[];
  icon: React.ElementType;
  resultBadge?: string;
}

const PROJECTS: Project[] = [
  {
    title: "게임 설정 패치 자동화",
    period: "2025.02 - 2025.06",
    summary:
      "수동으로 관리되던 게임 설정 패치 프로세스를 자동화하여 휴먼 에러를 방지하고 운영 효율성을 향상",
    role: [
      "자동화 가능한 지점 정의 및 업무 흐름 설계",
      "설정 파일 정합성 검증 로직 개발",
      "운영툴에 자동화 도구 구축",
    ],
    result: [
      "휴먼 미스 발생률 0%에 가깝게 감소",
      "검증 시간 10분 → 1분으로 단축",
      "긴급 패치/롤백 작업 0건으로 안정화",
    ],
    problem: [
      "일부 값 누락 또는 오설정으로 라이브 서버에 잘못된 설정 적용",
      "복수 운영자 간 설정값 크로스 체크 시 비효율",
    ],
    solution: [
      "설정값 DB 등록으로 관리 체계화",
      "자동 정합성 검증 스크립트 실행",
      "예약 시스템 연동으로 자동 적용",
    ],
    tech: ["Node.js", "node-cron"],
    icon: Settings,
    resultBadge: "검증 10분→1분",
  },
  {
    title: "EKS 리소스 최적화 및 비용 절감",
    period: "2025.04 - 2025.06",
    summary:
      "EKS 클러스터의 리소스 사용 효율을 높이기 위해 빌드 노드를 스팟 인스턴스로 전환하고 워크로드 기반 리소스 분석",
    role: [
      "Goldilocks, Headlamp 도입 및 리소스 분석 기준 설정",
      "Terraform으로 전용 빌드 노드 그룹 구성",
      "스팟 인스턴스로 빌드 시간에만 자원 할당 최적화",
    ],
    result: [
      "월간 클러스터 비용 약 30% 절감",
      "불필요한 오토스케일링 트리거 방지",
      "운영 안정성과 자원 효율성 동시 확보",
    ],
    problem: ["운영/빌드/개발 워크로드가 단일 노드 그룹에서 혼재"],
    solution: [
      "개발용/빌드용 노드 분리",
      "빌드 노드 스팟 인스턴스 전환",
      "워크로드 기반 리소스 재조정",
    ],
    tech: ["Goldilocks", "Headlamp", "Terraform"],
    icon: TrendingDown,
    resultBadge: "비용 30% 절감",
  },
  {
    title: "CDN 패치 파일 생성 시스템 개선",
    period: "2024.07 - 2024.11",
    summary:
      "Bash 스크립트 기반 패치 파일 생성을 Go 서버로 전환하고 SvelteKit으로 시각화된 진행 UI 제공",
    role: [
      "Bash 기반 로직 분석 및 오류 요소 정리",
      "Go 언어로 전체 로직 재구현 (goroutine 동시성 처리)",
      "SvelteKit 관리용 웹 UI 설계 및 개발",
    ],
    result: [
      "패치 소요 시간 약 25% 단축",
      "에러 발생 위치 및 원인 명확히 기록",
      "패치 진행 상태 실시간 시각화",
    ],
    problem: [
      "에러 발생 시 로그가 불명확하여 원인 파악 어려움",
      "진행 상황 확인 수단 없음",
    ],
    solution: [
      "Go로 전체 리팩토링 (goroutine 동시성 처리)",
      "상세 로깅으로 에러 위치 파악 용이",
    ],
    tech: ["Go", "SvelteKit", "WebSocket"],
    icon: FileCode,
    resultBadge: "시간 25% 단축",
  },
  {
    title: "개발/테스트 환경 EKS 전환",
    period: "2024.03 - 2024.05",
    summary:
      "로컬/단일 서버 중심 테스트 환경을 AWS EKS 기반으로 전면 재구성하여 협업 효율과 비용 절감 달성",
    role: [
      "기존 테스트 인프라 분석 및 문제점 도출",
      "Terraform, Helm, ArgoCD 기반 CI/CD 인프라 설계",
      "브랜치 단위 자동 배포 및 리소스 자동 정리",
    ],
    result: [
      "클라이언트 개발자별 1:1 전용 테스트 환경 제공",
      "EC2 대비 클라우드 비용 약 50% 절감",
      "서버 담당자 부재 시에도 협업 가능",
    ],
    problem: [
      "테스트가 서버 개발자의 로컬 환경에 의존",
      "서버 담당자 부재 시 긴급 대응 어려움",
    ],
    solution: [
      "AWS EKS로 클러스터 기반 전환",
      "브랜치 기반 배포 자동화 (Argo Workflow)",
      "브랜치 삭제 시 관련 리소스 자동 정리",
    ],
    tech: ["EKS", "Jenkins", "ArgoCD", "Argo Workflow"],
    icon: Server,
    resultBadge: "비용 50% 절감",
  },
  {
    title: "서버 개발 환경 개선 및 EKS 전환",
    period: "2023.11 - 2024.01",
    summary:
      "단일 개발 서버 기반 테스트 환경을 AWS EKS 기반으로 전환하여 클라이언트 개발자별 1:1 환경 제공",
    role: [
      "기존 서버 운영 구조 및 문제점 진단",
      "Jenkins, ArgoCD 활용 EKS 기반 배포 구조 설계",
      "클라이언트 개발자별 독립 환경 CI/CD 자동화",
    ],
    result: [
      "테스트 대기 병목 해소 및 생산성 향상",
      "서버 담당자 부재 시에도 운영 중단 없이 대응",
      "기능 개발 속도 개선",
    ],
    problem: [
      "테스트 환경이 단일 개발 서버나 로컬 환경에 의존",
      "서버 개발자 부재 시 작업 내용을 컨트롤하기 힘듦",
    ],
    solution: [
      "작업 브랜치별 변경 사항 감지하여 재배포",
      "Jenkins + ArgoCD 자동화 배포 구조",
    ],
    tech: ["EKS", "Jenkins", "ArgoCD"],
    icon: GitBranch,
  },
  {
    title: "서버 구조 개선 프로젝트",
    period: "2022.07 - 2023.01",
    summary:
      "기존 MVC 구조를 모듈러 모놀리식 아키텍처로 전환하여 콘텐츠 단위 독립성과 유지보수성 확보",
    role: [
      "기존 컨트롤러 중심 로직 분석 및 도메인 단위 재정의",
      "모듈러 모놀리식 아키텍처 설계 및 적용",
      "콘텐츠별 폴더 구조와 의존성 설계",
    ],
    result: [
      "신규 기능 추가 시 기존 코드 변경 최소화",
      "주니어 개발자 온보딩 시간 단축",
      "모듈 간 결합도 감소로 유지보수성 향상",
    ],
    problem: [
      "Controller가 모든 비즈니스 로직과 데이터 처리 담당",
      "모듈 간 의존성이 높아 변경 영향 범위가 넓음",
    ],
    solution: [
      "콘텐츠 단위로 모듈 분리 (모듈러 모놀리식)",
      "각 모듈 내 Controller/Service/Repository 계층 분리",
      "모듈 간 명확한 인터페이스로 결합도 최소화",
    ],
    tech: ["Go", "Modular Monolith"],
    icon: Layers,
  },
];

export default function Projects({ className }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
            실제 서비스에서 경험한 프로젝트
          </p>
        </motion.div>

        {/* 프로젝트 카드 */}
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              className="group cursor-pointer rounded-xl bg-bg-primary p-6 shadow-sm transition-all hover:shadow-md hover:ring-2 hover:ring-accent-blue/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              onClick={() => setSelectedProject(project)}
            >
              {/* 아이콘 + 배지 */}
              <div className="mb-3 flex items-center justify-between">
                <div className="rounded-lg bg-accent-blue/10 p-2">
                  <project.icon className="h-5 w-5 text-accent-blue" />
                </div>
                {project.resultBadge && (
                  <span className="rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-600">
                    {project.resultBadge}
                  </span>
                )}
              </div>

              {/* 타이틀 + 기간 */}
              <div className="mb-4">
                <h3 className="font-semibold font-mono text-text-primary">
                  {project.title}
                </h3>
                <p className="text-xs text-text-secondary">
                  {project.period}
                </p>
              </div>

              {/* 요약 */}
              <p className="mb-4 line-clamp-2 text-sm text-text-secondary">
                {project.summary}
              </p>

              {/* 태그 */}
              <div className="flex flex-wrap gap-1">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-bg-secondary px-2 py-0.5 font-mono text-xs text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* 클릭 힌트 */}
              <p className="mt-3 text-xs text-text-secondary/50 group-hover:text-accent-blue">
                클릭하여 상세 보기 →
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 상세 모달 */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto bg-bg-primary">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-accent-blue/10 p-2">
                    <selectedProject.icon className="h-6 w-6 text-accent-blue" />
                  </div>
                  <div>
                    <DialogTitle className="text-xl font-mono text-text-primary">
                      {selectedProject.title}
                    </DialogTitle>
                    <DialogDescription className="text-text-secondary">
                      {selectedProject.period}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <div className="mt-4 space-y-6">
                {/* 요약 */}
                <div>
                  <h4 className="mb-2 font-semibold text-text-primary">요약</h4>
                  <p className="text-sm text-text-secondary">
                    {selectedProject.summary}
                  </p>
                </div>

                {/* 역할 */}
                <div>
                  <h4 className="mb-2 font-semibold text-text-primary">역할</h4>
                  <ul className="space-y-1">
                    {selectedProject.role.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-blue" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 성과 */}
                <div>
                  <h4 className="mb-2 font-semibold text-text-primary">성과</h4>
                  <ul className="space-y-1">
                    {selectedProject.result.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-green-600"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 기존 문제점 */}
                {selectedProject.problem && (
                  <div>
                    <h4 className="mb-2 font-semibold text-text-primary">
                      기존 문제점
                    </h4>
                    <ul className="space-y-1">
                      {selectedProject.problem.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 개선 내용 */}
                {selectedProject.solution && (
                  <div>
                    <h4 className="mb-2 font-semibold text-text-primary">
                      개선 내용
                    </h4>
                    <ul className="space-y-1">
                      {selectedProject.solution.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 사용 기술 */}
                <div>
                  <h4 className="mb-2 font-semibold text-text-primary">
                    사용 기술
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-accent-blue/10 px-3 py-1 font-mono text-sm text-accent-blue"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
