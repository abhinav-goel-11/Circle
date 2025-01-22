import Logo from "@/components/logo";
import Image from "next/image";
import App from "./../../public/assets/App.svg";
import Play from "./../../public/assets/Play.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-svh max-w-[1440px] mx-auto flex flex-col items-center">
      <header className="h-16 sm:h-[96px] flex items-center justify-center">
        <Logo />
      </header>
      <section className=" flex items-center justify-center flex-1 ">
        <div className="flex items-center flex-col gap-14 sm:gap-8">
          <h2 className="text-white/60 text-xl sm:text-[1.75rem] font-normal text-center w-[272px] sm:w-[380px] leading-[1.3]">
            See what&apos;s happening locally within 15 km radius.
          </h2>
          <div className="flex flex-col gap-y-6 sm:flex-row items-center gap-x-8 h-[66px] sm:h-[72px]">
            <Image src={App} alt="app store" className="h-full w-auto" />
            <Image src={Play} alt="Play store" className="h-full w-auto" />
          </div>
        </div>
      </section>
      <footer className="max-w-[1200px] w-full mt-auto pb-8 gap-y-6 sm:gap-0 flex flex-col sm:flex-row  items-center sm:justify-between text-sm font-normal ">
        <div className="text-[#fff]/50">Crafted with ❤️ in INDIA</div>
        <div className="text-[#fff]/50">
          © Copyright 2025 Joincircle.life - All Rights Reserved.
        </div>
        <div className="text-[#fff]/50">
          by{" "}
          {/* <Link
            href={"http://www.linkedin.com/in/developerpramesh"}
            target="_blank"
            className="text-[#1AC95F]"
          >
            Pramesh
          </Link>{" "} */}
          &{" "}
          <Link
            href={"http://www.linkedin.com/in/souravisuncool"}
            target="_blank"
            className="text-[#1AC95F]"
          >
            Sourav
          </Link>
        </div>
      </footer>
    </main>
  );
}
