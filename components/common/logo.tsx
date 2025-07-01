import Link from "next/link"
import Image from "next/image"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
      <Image src="/logo-dawinaa.svg" alt="داوينا" width={95} height={95} className="w-[95px] h-[95px]" />
    </Link>
  )
}
