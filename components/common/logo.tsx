import Link from "next/link"
import Image from "next/image"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
      <Image src="/logo-dawinaa.svg" alt="داوينا" width={40} height={40} className="w-10 h-10" />
      <span className="text-xl font-bold text-gradient">داوينا</span>
    </Link>
  )
}
