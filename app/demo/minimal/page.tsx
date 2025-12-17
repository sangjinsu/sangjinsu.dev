import HeroMinimal from "@/components/hero/HeroMinimal";

export const metadata = {
  title: "미니멀 콘셉트 | 상진수",
  description: "미니멀 타이포 Hero 섹션 데모 페이지",
};

export default function MinimalDemo() {
  return (
    <main>
      <HeroMinimal copyVariant="short-code" />
    </main>
  );
}
