"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Github, Linkedin, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const SOCIAL_LINKS = [
  {
    name: "Blog",
    href: "https://velog.io/@sangjinsu/posts",
    icon: BookOpen,
  },
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
];

const NAV_ITEMS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-bg-primary/80 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* 로고 */}
        <a
          href="#"
          className="text-lg font-bold text-text-primary"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          상진수
        </a>

        {/* 데스크탑 네비게이션 */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* 구분선 */}
          <div className="h-4 w-px bg-border" />

          {/* 소셜 링크 */}
          <div className="flex items-center gap-1">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm text-text-secondary transition-colors hover:bg-bg-secondary hover:text-text-primary"
              >
                <link.icon className="h-4 w-4" />
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* 모바일 메뉴 버튼 */}
        <button
          className="p-2 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="메뉴 토글"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5 text-text-primary" />
          ) : (
            <Menu className="h-5 w-5 text-text-primary" />
          )}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isMobileMenuOpen && (
        <motion.div
          className="border-t border-bg-secondary bg-bg-primary md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <ul className="px-4 py-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block py-3 text-text-secondary transition-colors hover:text-text-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* 모바일 소셜 링크 */}
          <div className="border-t border-bg-secondary px-4 py-4">
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-secondary transition-colors hover:text-text-primary"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                  <span className="text-sm">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
