"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface ContactProps {
  className?: string;
}

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/sangjinsu",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sangjinsu/",
    icon: Linkedin,
  },
  {
    name: "Blog",
    href: "https://velog.io/@sangjinsu/posts",
    icon: BookOpen,
  },
];

export default function Contact({ className }: ContactProps) {
  return (
    <section
      id="contact"
      className={cn(
        "relative px-4 py-24 md:py-32",
        "bg-bg-primary",
        className
      )}
    >
      <div className="mx-auto max-w-2xl text-center">
        {/* 섹션 제목 */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
            Contact
          </h2>
          <p className="mt-4 text-text-secondary">
            새로운 기회나 협업에 열려 있습니다
          </p>
        </motion.div>

        {/* 이메일 버튼 */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Button
            size="lg"
            className="gap-2"
            onClick={() =>
              (window.location.href = "mailto:climbplant39@kakao.com")
            }
          >
            <Mail className="h-4 w-4" />
            climbplant39@kakao.com
          </Button>
        </motion.div>

        {/* 소셜 링크 */}
        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <TooltipProvider>
            {SOCIAL_LINKS.map((link) => (
              <Tooltip key={link.name}>
                <TooltipTrigger asChild>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-12 w-12 items-center justify-center rounded-full bg-bg-secondary transition-colors hover:bg-accent-blue/10"
                  >
                    <link.icon className="h-5 w-5 text-text-secondary transition-colors group-hover:text-accent-blue" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{link.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </motion.div>

        {/* 위트 카피 */}
        <motion.p
          className="mt-12 text-sm text-text-secondary/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          &ldquo;좋은 코드는 좋은 대화에서 시작됩니다&rdquo; ☕
        </motion.p>
      </div>
    </section>
  );
}
