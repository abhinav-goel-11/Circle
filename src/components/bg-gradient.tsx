import Image from "next/image";
import Noise from "../../public/assets/Noise.png";

export default function BgGradient() {
  return (
    <div className="fixed -z-50 min-h-screen w-full bg-black ">
      {/*_______Green Blob_______*/}
      <div className=" bg-accent rounded-full w-[588px] sm:w-[999px] h-[572px] sm:h-[971px] absolute top-1/2 left-1/2 -translate-x-1/2 blur-[150px] opacity-40 sm:opacity-50 sm:blur-[254px]" />
      {/*_______Noise ________*/}
      <Image
        src={Noise}
        alt="noise"
        className=" absolute inset-0 object-fill opacity-40 bg-blend-color-burn"
      />
    </div>
  );
}
