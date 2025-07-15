import Image from "next/image";
import { GlowingEffectDemo } from "@/components/glowingEffectDemo";
import { NavbarDemo } from "@/components/navBarDemo";
import { InfiniteMovingCardsDemo } from "@/components/infiniteMovingCardsDemo";
import { AnimatedModalDemo } from "@/components/animatedModalDemo";
import { BackgroundBeamsDemo } from "@/components/backgroundBeamsDemo";
import { CoverDemo } from "@/components/coverDemo";
import { FlipWordsDemo } from "@/components/flipWordsDemo";
import { HeroHighlightDemo } from "@/components/heroHighlightDemo";

export default function Home() {
  return (
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}
        <NavbarDemo />
        <BackgroundBeamsDemo />
       <HeroHighlightDemo />
        <GlowingEffectDemo />
        <InfiniteMovingCardsDemo />
        
      </main>
  );
}
