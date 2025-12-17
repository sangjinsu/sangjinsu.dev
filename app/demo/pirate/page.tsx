import HeroPirate from "@/components/hero/HeroPirate";

export const metadata = {
  title: "해적선 콘셉트 | 상진수",
  description: "해적선 Hero 섹션 데모 페이지",
};

export default function PirateDemo() {
  return (
    <main>
      <HeroPirate copyVariant="bug-ocean" />
    </main>
  );
}
