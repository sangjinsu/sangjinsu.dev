"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Anchor, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CopyVariant = "bug-ocean" | "storm-deploy" | "no-sink";

interface HeroPirateProps {
  className?: string;
  copyVariant?: CopyVariant;
}

const COPY_VARIANTS: Record<CopyVariant, string> = {
  "bug-ocean": "버그의 바다를 항해 중...",
  "storm-deploy": "폭풍우 속에서도 배포는 계속된다",
  "no-sink": "3년간 침몰 0회",
};

const COPY_EMOJI: Record<CopyVariant, string> = {
  "bug-ocean": "🏴‍☠️",
  "storm-deploy": "⛵",
  "no-sink": "🚢",
};

export default function HeroPirate({
  className,
  copyVariant = "bug-ocean",
}: HeroPirateProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4",
        "bg-gradient-to-b from-bg-primary to-bg-secondary",
        className
      )}
    >
      {/* 배 애니메이션 */}
      <motion.div
        className="mb-8 cursor-pointer select-none text-8xl md:text-9xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={isHovered ? "hover" : "idle"}
        variants={{
          idle: {
            rotate: [0, -2, 0, 2, 0],
            y: [0, -4, 0, -4, 0],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          },
          hover: {
            rotate: [-8, 8, -8, 8, 0],
            transition: {
              duration: 0.6,
              ease: "easeInOut",
            },
          },
        }}
        whileTap={{ scale: 0.95 }}
        role="img"
        aria-label="항해 중인 해적선"
      >
        ⛵
      </motion.div>

      {/* 카피 텍스트 */}
      <motion.p
        className="mb-6 text-lg text-text-secondary md:text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {COPY_VARIANTS[copyVariant]} {COPY_EMOJI[copyVariant]}
      </motion.p>

      {/* 이름 및 직업 */}
      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h1 className="text-4xl font-bold text-text-primary md:text-5xl">
          상진수
        </h1>
        <p className="mt-2 text-lg text-text-secondary">Server Developer</p>
      </motion.div>

      {/* 파도 라인 */}
      <motion.div
        className="mb-12 w-full max-w-md overflow-hidden text-2xl text-accent-blue/40 md:text-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -200],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <span>～～～～～～～～～～～～～～～～</span>
          <span>～～～～～～～～～～～～～～～～</span>
        </motion.div>
      </motion.div>

      {/* CTA 버튼 */}
      <motion.div
        className="flex flex-col gap-4 sm:flex-row"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Button size="lg" className="gap-2">
          <Anchor className="h-4 w-4" />
          프로젝트 보기
        </Button>
        <Button variant="outline" size="lg" className="gap-2">
          <Mail className="h-4 w-4" />
          연락하기
        </Button>
      </motion.div>

      {/* 스크롤 인디케이터 */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.2 },
          y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <span className="text-sm text-text-secondary">↓ 스크롤</span>
      </motion.div>
    </section>
  );
}
