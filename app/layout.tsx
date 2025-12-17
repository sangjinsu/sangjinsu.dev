import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { Navigation, Footer } from "@/components/layout";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "상진수 | Server Developer & DevOps Engineer",
  description:
    "게임 서버와 DevOps 인프라를 함께 다루는 서버 개발자 상진수입니다. DAU 10만 규모 모바일 게임 서버 개발 및 라이브 운영 경험.",
  keywords: [
    "서버 개발자",
    "백엔드",
    "DevOps",
    "Go",
    "Kubernetes",
    "게임 서버",
    "상진수",
  ],
  authors: [{ name: "상진수" }],
  openGraph: {
    title: "상진수 | Server Developer",
    description: "게임 서버와 DevOps 인프라를 함께 다루는 서버 개발자",
    url: "https://sangjinsu.dev",
    siteName: "상진수 포트폴리오",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${firaCode.variable} antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
