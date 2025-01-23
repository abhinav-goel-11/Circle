import Logo from "@/components/logo";
import Image from "next/image";
import Link from "next/link";
import Heart from "../../public/assets/pixel-heart.svg";
import Apple from "../../public/assets/apple-logo.svg";
import Playstore from "../../public/assets/playstore-logo.svg";
import fingers from "../../public/assets/🤞🏻.png";
export default function Home() {
  return (
    <main className="min-h-svh max-w-[1440px] mx-auto flex flex-col items-center">
      <header className="h-16 sm:h-[96px] flex items-center justify-center">
        <Logo />
      </header>
      <section className=" flex items-center justify-center flex-1 ">
        <div className="flex items-center flex-col gap-14 sm:gap-8">
          <h1 className="text-white/60 text-xl sm:text-[1.75rem] font-normal text-center w-[272px] sm:w-[380px] leading-[1.3]">
            see what&apos;s happening locally within 15 km radius
          </h1>
          <div className="flex flex-col gap-y-6 sm:flex-row items-center gap-x-8 h-[66px] sm:h-[72px]">
            <div className="bg-[#1AC95F] hover:bg-white rounded-2xl w-[200px] h-[72px] flex  items-center justify-center gap-x-[14px] group cursor-pointer">
              <div>
                <Image
                  src={Apple}
                  alt="apple logo"
                  className="h-[38px] w-[38px] group-hover:hidden"
                />
                <Image
                  src={fingers}
                  alt="apple logo"
                  className="h-8 w-8 hidden group-hover:block"
                />
              </div>

              <div className="flex flex-col group-hover:hidden">
                <p className="text-[#0B5127] font-medium text-xs">
                  Coming soon to the
                </p>
                <p className="text-[#0B5127] font-semibold text-xl">
                  App Store
                </p>
              </div>
              <div className="text-base font-semibold text-[#1AC95F] hidden group-hover:block">
                Still in making!
              </div>
            </div>
            <div className="bg-[#1AC95F] hover:bg-white rounded-2xl h-[72px] w-[200px] flex items-center justify-center gap-x-[14px] group cursor-pointer">
              <div>
                <Image
                  src={Playstore}
                  alt="playstore logo"
                  className="h-[38px] w-[38px] group-hover:hidden"
                />
                <Image
                  src={fingers}
                  alt="apple logo"
                  className="h-8 w-8 hidden group-hover:block"
                />
              </div>
              <div className="flex flex-col group-hover:hidden">
                <p className="text-[#0B5127] font-medium text-xs">
                  Coming soon to the
                </p>
                <p className="text-[#0B5127] font-semibold text-xl">
                  Play Store
                </p>
              </div>
              <div className="text-base font-semibold text-[#1AC95F] hidden group-hover:block">
                Still in making!
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="max-w-[1200px] w-full mt-auto pb-8 gap-y-6 sm:gap-0 flex flex-col sm:flex-row  items-center sm:justify-between text-sm font-normal ">
        <div className="text-[#fff]/50 flex items-center">
          <Image src={Heart} alt="heart" className="h-14 w-14" />{" "}
          <span>Made with passion in INDIA</span>
        </div>
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
          {/* &{" "} */}
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
