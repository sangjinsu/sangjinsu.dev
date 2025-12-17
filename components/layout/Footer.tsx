"use client";

import { Github, Linkedin, BookOpen } from "lucide-react";

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

export default function Footer() {
  return (
    <footer className="border-t border-bg-secondary bg-bg-primary px-4 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        {/* 카피라이트 */}
        <p className="text-sm text-text-secondary">
          &copy; {new Date().getFullYear()} 상진수. All rights reserved.
        </p>

        {/* 소셜 링크 */}
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary transition-colors hover:text-text-primary"
              aria-label={link.name}
            >
              <link.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
