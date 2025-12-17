"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CopyVariant = "short-code";

interface HeroMinimalProps {
  className?: string;
  copyVariant?: CopyVariant;
}

const COPY_VARIANTS: Record<CopyVariant, string> = {
  "short-code": "일은 프로답게, 삶은 나답게",
};

export default function HeroMinimal({
  className,
  copyVariant = "short-code",
}: HeroMinimalProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4",
        "bg-gradient-to-b from-bg-primary to-bg-secondary",
        className
      )}
    >
      {/* 이름 - 큰 타이포그래피 */}
      <motion.h1
        className="cursor-default text-5xl font-bold text-text-primary md:text-7xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
      >
        상진수
      </motion.h1>

      {/* 서브텍스트 - 직업 */}
      <motion.p
        className="mt-4 text-lg text-text-secondary md:text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        서버 개발자, 가끔 DevOps
      </motion.p>

      {/* 구분선 */}
      <motion.div
        className="my-8 h-px w-48 bg-text-secondary/30 md:w-64"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      />

      {/* 한 줄 위트 */}
      <motion.p
        className="text-center text-lg text-text-secondary/80 md:text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        &ldquo;{COPY_VARIANTS[copyVariant]}&rdquo;
      </motion.p>

      {/* CTA 버튼 */}
      <motion.div
        className="mt-12 flex flex-col gap-4 sm:flex-row"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Button size="lg" className="gap-2">
          <ArrowRight className="h-4 w-4" />
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
