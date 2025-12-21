"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  GraduationCap,
  Briefcase,
  Code,
  Plane,
  Dumbbell,
  PenLine,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AboutProps {
  className?: string;
}

const TIMELINE = [
  {
    year: "2014 - 2021",
    title: "한국외대 글로벌캠퍼스",
    description: "우크라이나어과 / 융복합소프트웨어 복수전공",
    icon: GraduationCap,
  },
  {
    year: "2018.06 - 2019.01",
    title: "우크라이나 어학연수",
    description: "르비우 국립대학교에서 우크라이나어 전공",
    icon: GraduationCap,
  },
  {
    year: "2019.01 - 2019.06",
    title: "IT 스타트업 인턴",
    description: "우크라이나 현지 스타트업에서 개발의 매력을 발견",
    icon: Briefcase,
  },
  {
    year: "2021.07 - 2022.04",
    title: "SSAFY 6기 수료",
    description: "삼성 청년 SW 아카데미에서 본격적인 개발 교육",
    icon: GraduationCap,
  },
  {
    year: "2022.04 - 2025.10",
    title: "포코팡 타운 서버 개발자",
    description: "DAU 10만 규모 퍼즐 게임 서버 개발 및 라이브 운영",
    icon: Briefcase,
  },
  {
    year: "2025.11 - 현재",
    title: "NHN 게임 기술 PM",
    description: "게임 프로젝트 기술 관리 및 PM 업무",
    icon: Briefcase,
  },
];

const EXPERIENCES = [
  {
    icon: Code,
    title: "개발 실험",
    description:
      "다양한 개발 언어나 도구를 직접 사용해보며 구현과 개선의 재미를 느낍니다.",
  },
  {
    icon: Plane,
    title: "해외연수",
    description:
      "우크라이나에서 1년간 어학연수와 IT 스타트업 인턴을 경험하며 글로벌 협업과 문화 적응력을 키웠습니다.",
  },
  {
    icon: Dumbbell,
    title: "운동",
    description: "헬스, 러닝, 클라이밍으로 체력과 집중력을 함께 관리합니다.",
  },
  {
    icon: PenLine,
    title: "기술 블로그",
    description:
      "서버 구조 개선, 인프라 자동화 등 실무 기반 지식을 공유합니다.",
  },
];

const HOW_I_WORK = [
  "새로운 기술이나 도구를 직접 사용해보며 개선과 실험의 재미를 찾습니다.",
  "서비스의 안정성과 운영 효율을 높이는 일이 가장 큰 동기부여가 됩니다.",
  "문제가 발생해도 피하지 않고, 현실적인 대안을 찾아 실행하는 편입니다.",
  "함께 정한 약속과 마감은 반드시 지키려고 노력합니다.",
  "나의 성장이 팀과 서비스에 기여할 수 있도록 지속적으로 학습하고 공유합니다.",
];

export default function About({ className }: AboutProps) {
  return (
    <section
      id="about"
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
            About Me
          </h2>
          <p className="mt-4 text-text-secondary">
            비전공자에서 서버 개발자가 되기까지
          </p>
        </motion.div>

        {/* 인트로 */}
        <motion.div
          className="mb-16 rounded-lg bg-bg-primary p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="text-lg leading-relaxed text-text-secondary">
            우크라이나어를 전공하다가 개발의 세계에 빠졌습니다.
            <br className="hidden md:block" />
            낯선 땅에서 새로운 언어를 배우듯, 코드라는 언어를 배우는 것도
            즐거웠습니다.
            <br className="hidden md:block" />
            <strong className="text-text-primary">DAU 10만 규모</strong>의 게임
            서버를 운영했었으며,
            <br className="hidden md:block" />
            지금도 &ldquo;버그의 바다&rdquo;를 항해하고 있습니다. 🏴‍☠️
          </p>
        </motion.div>

        {/* 타임라인 */}
        <div className="relative">
          {/* 중앙 라인 */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-accent-blue/20 md:left-1/2 md:-translate-x-1/2" />

          {TIMELINE.map((item, index) => (
            <motion.div
              key={item.year}
              className={cn(
                "relative mb-8 flex items-start gap-4 pl-12 md:mb-12",
                index % 2 === 0
                  ? "md:flex-row md:pl-0 md:pr-[50%]"
                  : "md:flex-row-reverse md:pl-[50%] md:pr-0"
              )}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              {/* 점 */}
              <div
                className={cn(
                  "absolute left-2.5 top-1 h-3 w-3 rounded-full bg-accent-blue",
                  "md:left-1/2 md:-translate-x-1/2"
                )}
              />

              {/* 카드 */}
              <div
                className={cn(
                  "flex-1 rounded-lg bg-bg-primary p-4 shadow-sm",
                  "md:mx-8"
                )}
              >
                <div className="mb-2 flex items-center gap-2">
                  <item.icon className="h-4 w-4 text-accent-blue" />
                  <span className="text-sm font-medium font-mono text-accent-blue">
                    {item.year}
                  </span>
                </div>
                <h3 className="font-semibold text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-text-secondary">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3 className="mb-6 text-center text-xl font-semibold text-text-primary">
            Experience
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={exp.title}
                className="rounded-lg bg-bg-primary p-4"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                <div className="mb-2 flex items-center gap-2">
                  <exp.icon className="h-5 w-5 text-accent-blue" />
                  <span className="font-medium text-text-primary">
                    {exp.title}
                  </span>
                </div>
                <p className="text-sm text-text-secondary">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How I work */}
        <motion.div
          className="mt-12 rounded-lg bg-bg-primary p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="mb-4 text-xl font-semibold text-text-primary">
            How I work
          </h3>
          <ul className="space-y-3 text-text-secondary">
            {HOW_I_WORK.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-blue" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* 현재 위치 */}
        <motion.div
          className="mt-12 flex items-center justify-center gap-2 text-text-secondary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <MapPin className="h-4 w-4" />
          <span>인천 남동구 / 성남시 분당구</span>
        </motion.div>
      </div>
    </section>
  );
}
