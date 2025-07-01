import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const featuredDoctors = [
  {
    id: "1",
    name: "د. أحمد محمد علي",
    specialty: "أمراض القلب والأوعية الدموية",
    hospital: "مستشفى القاهرة الجديدة",
    location: "القاهرة الجديدة",
    rating: 4.9,
    reviewsCount: 245,
    price: 300,
    image: "/placeholder.svg?height=120&width=120",
    available: true,
  },
  {
    id: "2",
    name: "د. سارة أحمد حسن",
    specialty: "أمراض النساء والتوليد",
    hospital: "مستشفى الشروق",
    location: "مدينة نصر",
    rating: 4.8,
    reviewsCount: 189,
    price: 250,
    image: "/placeholder.svg?height=120&width=120",
    available: true,
  },
  {
    id: "3",
    name: "د. محمد حسام الدين",
    specialty: "جراحة العظام والمفاصل",
    hospital: "مستشفى دار الفؤاد",
    location: "مدينة نصر",
    rating: 4.7,
    reviewsCount: 156,
    price: 400,
    image: "/placeholder.svg?height=120&width=120",
    available: false,
  },
]

export function FeaturedDoctorsSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">أطباء مميزون</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            تعرف على نخبة من أفضل الأطباء المعتمدين والحاصلين على أعلى التقييمات
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredDoctors.map((doctor) => (
            <Card key={doctor.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <Image
                      src={doctor.image || "/placeholder.svg"}
                      alt={doctor.name}
                      width={80}
                      height={80}
                      className="rounded-full object-cover"
                    />
                    {doctor.available && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">{doctor.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{doctor.specialty}</p>

                    <div className="flex items-center gap-1 mb-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{doctor.rating}</span>
                      <span className="text-sm text-gray-500">({doctor.reviewsCount})</span>
                    </div>

                    <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <MapPin className="w-4 h-4" />
                      {doctor.location}
                    </div>

                    <div className="text-lg font-bold text-primary mb-3">{doctor.price} جنيه</div>

                    {doctor.available ? (
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                      >
                        متاح الآن
                      </Badge>
                    ) : (
                      <Badge
                        variant="secondary"
                        className="bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                      >
                        غير متاح
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1" disabled={!doctor.available}>
                    <Calendar className="w-4 h-4 ml-2" />
                    احجز موعد
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href={`/doctor/${doctor.id}`}>
                      <ArrowLeft className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/search">
              عرض جميع الأطباء
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
