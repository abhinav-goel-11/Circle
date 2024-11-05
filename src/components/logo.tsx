import Image from "next/image";
import CircleSvg from "../../public/assets/CIRCLE.svg"

export default function Logo() {
  return (
    <div className="h-8">
        <Image src={CircleSvg} alt="web logo" className="h-full w-auto"/>
    </div>
  )
}
