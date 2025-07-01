import Link from "next/link"
import { MapPin, Users, Hospital } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const GOVERNORATES = [
  {
    id: "cairo",
    name: "القاهرة",
    nameEn: "Cairo",
    doctorsCount: 2500,
    hospitalsCount: 85,
    image: "/placeholder.svg?height=200&width=300",
    description: "العاصمة وأكبر المدن المصرية",
  },
  {
    id: "giza",
    name: "الجيزة",
    nameEn: "Giza",
    doctorsCount: 1800,
    hospitalsCount: 65,
    image: "/placeholder.svg?height=200&width=300",
    description: "موطن الأهرامات وأبو الهول",
  },
  {
    id: "alexandria",
    name: "الإسكندرية",
    nameEn: "Alexandria",
    doctorsCount: 1500,
    hospitalsCount: 45,
    image: "/placeholder.svg?height=200&width=300",
    description: "عروس البحر المتوسط",
  },
  {
    id: "dakahlia",
    name: "الدقهلية",
    nameEn: "Dakahlia",
    doctorsCount: 800,
    hospitalsCount: 25,
    image: "/placeholder.svg?height=200&width=300",
    description: "محافظة في دلتا النيل",
  },
  {
    id: "sharqia",
    name: "الشرقية",
    nameEn: "Sharqia",
    doctorsCount: 700,
    hospitalsCount: 22,
    image: "/placeholder.svg?height=200&width=300",
    description: "بوابة مصر الشرقية",
  },
  {
    id: "qalyubia",
    name: "القليوبية",
    nameEn: "Qalyubia",
    doctorsCount: 900,
    hospitalsCount: 30,
    image: "/placeholder.svg?height=200&width=300",
    description: "محافظة شمال القاهرة",
  },
  {
    id: "kafr-el-sheikh",
    name: "كفر الشيخ",
    nameEn: "Kafr El Sheikh",
    doctorsCount: 400,
    hospitalsCount: 15,
    image: "/placeholder.svg?height=200&width=300",
    description: "محافظة في شمال الدلتا",
  },
  {
    id: "gharbia",
    name: "الغربية",
    nameEn: "Gharbia",
    doctorsCount: 600,
    hospitalsCount: 20,
    image: "/placeholder.svg?height=200&width=300",
    description: "قلب دلتا النيل",
  },
  {
    id: "menoufia",
    name: "المنوفية",
    nameEn: "Menoufia",
    doctorsCount: 500,
    hospitalsCount: 18,
    image: "/placeholder.svg?height=200&width=300",
    description: "محافظة في وسط الدلتا",
  },
]

export function GovernoratesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {GOVERNORATES.map((governorate) => (
        <Link key={governorate.id} href={`/governorates/${governorate.id}`}>
          <Card className="overflow-hidden hover:scale-105 transition-transform duration-200 cursor-pointer dark:bg-neutral-800 dark:border-neutral-700">
            <CardContent className="p-0">
              <img
                src={governorate.image || "/placeholder.svg"}
                alt={governorate.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="font-bold text-xl text-neutral-900 dark:text-white mb-2">{governorate.name}</h3>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-4">{governorate.description}</p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary-600" />
                    <div>
                      <div className="font-semibold text-neutral-900 dark:text-white">{governorate.doctorsCount}</div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400">طبيب</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Hospital className="w-4 h-4 text-secondary-600" />
                    <div>
                      <div className="font-semibold text-neutral-900 dark:text-white">{governorate.hospitalsCount}</div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400">مستشفى</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center text-primary-600 text-sm font-medium">
                  <MapPin className="w-4 h-4 mr-2" />
                  استكشف المحافظة ←
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
