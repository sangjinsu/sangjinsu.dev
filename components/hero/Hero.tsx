"use client";

import { motion } from "framer-motion";
import { Anchor, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroProps {
  className?: string;
}

const TERMINAL_COMMANDS = [
  { command: "whoami", output: "상진수" },
  { command: "cat job.txt", output: "Server Developer" },
  { command: "fortune", output: '"일은 프로답게, 삶은 나답게" 🎯' },
  { command: 'grep -r "버그" ./production', output: "0 results found ⛵" },
];

export default function Hero({ className }: HeroProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-16",
        "md:flex-row md:justify-center md:gap-16 lg:gap-24",
        "bg-gradient-to-b from-bg-primary to-bg-secondary",
        className
      )}
    >
      {/* 좌측: 텍스트 콘텐츠 */}
      <div className="flex flex-col items-center text-center md:items-start md:text-left">
        {/* 이름 - 미니멀 스타일 */}
        <motion.h1
          className="cursor-default text-5xl font-bold text-text-primary md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
        >
          상진수
        </motion.h1>

        {/* 직업 */}
        <motion.p
          className="mt-4 text-lg text-text-secondary md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          서버 개발자, 가끔 DevOps
        </motion.p>

        {/* 위트 카피 - 해적선 스타일 */}
        <motion.p
          className="mt-8 text-lg text-text-secondary/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          &ldquo;버그의 바다를 항해 중...&rdquo; 🏴‍☠️
        </motion.p>

        {/* 파도 라인 */}
        <motion.div
          className="my-6 w-full max-w-xs overflow-hidden text-xl text-accent-blue/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0 }}
        >
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: [0, -200] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
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
          transition={{ delay: 2.2, duration: 0.6 }}
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
      </div>

      {/* 우측: 터미널 */}
      <motion.div
        className="mt-12 w-full max-w-md md:mt-0"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {/* 터미널 윈도우 */}
        <div className="overflow-hidden rounded-lg shadow-2xl">
          {/* 타이틀 바 */}
          <div className="flex items-center gap-2 bg-[#3c3c3c] px-4 py-3">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <span className="ml-2 font-mono text-sm text-gray-400">
              terminal
            </span>
          </div>

          {/* 터미널 바디 */}
          <div className="bg-[#1e1e1e] p-4 font-mono text-sm md:text-base">
            {TERMINAL_COMMANDS.map((line, index) => (
              <motion.div
                key={index}
                className="mb-3"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.4 }}
              >
                {/* 명령어 */}
                <div className="flex items-center gap-2">
                  <span className="text-[#00ff00]">$</span>
                  <span className="text-gray-300">{line.command}</span>
                </div>
                {/* 결과 */}
                <motion.div
                  className="ml-4 mt-1 text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 + index * 0.4 }}
                >
                  <span className="text-gray-500">&gt;</span> {line.output}
                </motion.div>
              </motion.div>
            ))}

            {/* 깜빡이는 커서 */}
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7 }}
            >
              <span className="text-[#00ff00]">$</span>
              <motion.span
                className="inline-block h-5 w-2.5 bg-gray-300"
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* 스크롤 인디케이터 */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 2.5 },
          y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <span className="text-sm text-text-secondary">↓ 스크롤</span>
      </motion.div>
    </section>
  );
}
