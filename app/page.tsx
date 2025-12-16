"use client";

import dynamic from "next/dynamic";

const CoreScene = dynamic(() => import("@/components/three/CoreScene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-accent-blue border-t-transparent" />
    </div>
  ),
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-bg-primary">
      <div className="relative h-[60vh] w-full max-w-4xl">
        <CoreScene />
        <div className="pointer-events-none absolute bottom-8 left-0 right-0 text-center">
          <h1 className="text-4xl font-bold text-text-primary">
            안녕하세요, 서버 개발자 상진수입니다
          </h1>
          <p className="mt-4 text-lg text-text-secondary">
            게임 서버와 DevOps 인프라를 함께 다루는 개발자
          </p>
        </div>
      </div>
    </main>
  );
}
