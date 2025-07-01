import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { SPECIALTIES } from "@/lib/constants/brand"

export function SpecialtiesSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">التخصصات الطبية</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            اختر التخصص المناسب لحالتك من بين مجموعة واسعة من التخصصات الطبية المتاحة
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {SPECIALTIES.slice(0, 8).map((specialty) => (
            <Card key={specialty.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{specialty.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{specialty.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{specialty.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/specialties">
              عرض جميع التخصصات
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
