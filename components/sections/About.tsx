"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";
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
    year: "2018",
    title: "우크라이나 어학연수",
    description: "르비우 국립대학교에서 우크라이나어 전공",
    icon: GraduationCap,
  },
  {
    year: "2019",
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
    title: "트리노드",
    description: "포코팡타운 게임 서버 개발자 (서버 파트 리더)",
    icon: Briefcase,
  },
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
            지금은 <strong className="text-text-primary">DAU 10만 규모</strong>의
            게임 서버를 운영하며,
            <br className="hidden md:block" />
            &ldquo;버그의 바다&rdquo;를 항해하고 있습니다. 🏴‍☠️
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
                  <span className="text-sm font-medium text-accent-blue">
                    {item.year}
                  </span>
                </div>
                <h3 className="font-semibold text-text-primary">{item.title}</h3>
                <p className="mt-1 text-sm text-text-secondary">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

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
