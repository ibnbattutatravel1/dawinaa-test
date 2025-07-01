import { Users, Hospital, Building } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface GovernorateProfileProps {
  governorate: {
    name: string
    description: string
    image: string
    doctorsCount: number
    hospitalsCount: number
    population: string
    area: string
  }
}

export function GovernorateProfile({ governorate }: GovernorateProfileProps) {
  return (
    <section className="bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              أطباء {governorate.name}
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
              {governorate.description}
            </p>

            <div className="grid grid-cols-2 gap-4">
              <Card className="dark:bg-neutral-700 dark:border-neutral-600">
                <CardContent className="p-4 text-center">
                  <Users className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-neutral-900 dark:text-white">{governorate.doctorsCount}</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-300">طبيب</div>
                </CardContent>
              </Card>

              <Card className="dark:bg-neutral-700 dark:border-neutral-600">
                <CardContent className="p-4 text-center">
                  <Hospital className="w-8 h-8 text-secondary-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-neutral-900 dark:text-white">
                    {governorate.hospitalsCount}
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-300">مستشفى</div>
                </CardContent>
              </Card>

              <Card className="dark:bg-neutral-700 dark:border-neutral-600">
                <CardContent className="p-4 text-center">
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-lg font-bold text-neutral-900 dark:text-white">{governorate.population}</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-300">نسمة</div>
                </CardContent>
              </Card>

              <Card className="dark:bg-neutral-700 dark:border-neutral-600">
                <CardContent className="p-4 text-center">
                  <Building className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-lg font-bold text-neutral-900 dark:text-white">{governorate.area}</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-300">مساحة</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Image */}
          <div>
            <img
              src={governorate.image || "/placeholder.svg"}
              alt={governorate.name}
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
