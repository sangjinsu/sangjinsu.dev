"use client";

import { motion } from "framer-motion";
import { Terminal, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroTerminalProps {
  className?: string;
}

interface CommandLine {
  command: string;
  output: string;
}

const TERMINAL_COMMANDS: CommandLine[] = [
  { command: "whoami", output: "상진수" },
  { command: "cat job.txt", output: "Server Developer" },
  { command: 'grep -r "버그" ./production', output: "0 results found ✨" },
];

export default function HeroTerminal({ className }: HeroTerminalProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4",
        "bg-gradient-to-b from-bg-primary to-bg-secondary",
        className
      )}
    >
      {/* 터미널 윈도우 */}
      <motion.div
        className="mb-8 w-full max-w-lg overflow-hidden rounded-lg shadow-2xl"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* 타이틀 바 */}
        <div className="flex items-center gap-2 bg-[#3c3c3c] px-4 py-3">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="ml-2 font-mono text-sm text-gray-400">terminal</span>
        </div>

        {/* 터미널 바디 */}
        <div className="bg-[#1e1e1e] p-4 font-mono text-sm md:text-base">
          {TERMINAL_COMMANDS.map((line, index) => (
            <motion.div
              key={index}
              className="mb-3"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.4 }}
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
                transition={{ delay: 0.5 + index * 0.4 }}
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
            transition={{ delay: 1.5 }}
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
      </motion.div>

      {/* 이름 및 직업 */}
      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-text-primary md:text-5xl">
          상진수
        </h1>
        <p className="mt-2 text-lg text-text-secondary">Server Developer</p>
      </motion.div>

      {/* CTA 버튼 */}
      <motion.div
        className="flex flex-col gap-4 sm:flex-row"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Button size="lg" className="gap-2">
          <Terminal className="h-4 w-4" />
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
