import { Suspense } from "react"
import type { Metadata } from "next"
import { GovernorateProfile } from "@/components/features/governorate-profile"
import { GovernorateDoctors } from "@/components/features/governorate-doctors"
import { GovernorateHospitals } from "@/components/features/governorate-hospitals"

interface GovernoratePageProps {
  params: { slug: string }
}

export default async function GovernoratePage({ params }: GovernoratePageProps) {
  // Mock governorate data
  const governorate = {
    id: params.slug,
    name: "القاهرة",
    nameEn: "Cairo",
    description: "العاصمة وأكبر المدن المصرية، تضم أفضل المستشفيات والأطباء في مصر",
    image: "/placeholder.svg?height=400&width=800",
    doctorsCount: 2500,
    hospitalsCount: 85,
    population: "10 مليون نسمة",
    area: "606 كم²",
    cities: [
      { id: "nasr-city", name: "مدينة نصر", doctorsCount: 450 },
      { id: "heliopolis", name: "مصر الجديدة", doctorsCount: 380 },
      { id: "maadi", name: "المعادي", doctorsCount: 320 },
      { id: "zamalek", name: "الزمالك", doctorsCount: 280 },
      { id: "downtown", name: "وسط البلد", doctorsCount: 250 },
    ],
    topSpecialties: [
      { name: "باطنة", count: 380 },
      { name: "أطفال", count: 320 },
      { name: "نساء وتوليد", count: 280 },
      { name: "عظام", count: 250 },
      { name: "قلب وأوعية دموية", count: 180 },
    ],
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <GovernorateProfile governorate={governorate} />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Suspense fallback={<div className="h-96 animate-pulse bg-white dark:bg-neutral-800 rounded-lg" />}>
              <GovernorateDoctors governorateId={governorate.id} />
            </Suspense>

            <Suspense fallback={<div className="h-96 animate-pulse bg-white dark:bg-neutral-800 rounded-lg" />}>
              <GovernorateHospitals governorateId={governorate.id} />
            </Suspense>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Cities */}
              <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 border border-neutral-200 dark:border-neutral-700">
                <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-4">المدن والمناطق</h3>
                <div className="space-y-3">
                  {governorate.cities.map((city) => (
                    <div key={city.id} className="flex items-center justify-between">
                      <span className="text-neutral-700 dark:text-neutral-300">{city.name}</span>
                      <span className="text-sm text-neutral-500 dark:text-neutral-400">{city.doctorsCount} طبيب</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Specialties */}
              <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 border border-neutral-200 dark:border-neutral-700">
                <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-4">أهم التخصصات</h3>
                <div className="space-y-3">
                  {governorate.topSpecialties.map((specialty) => (
                    <div key={specialty.name} className="flex items-center justify-between">
                      <span className="text-neutral-700 dark:text-neutral-300">{specialty.name}</span>
                      <span className="text-sm text-neutral-500 dark:text-neutral-400">{specialty.count} طبيب</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateMetadata({ params }: GovernoratePageProps): Promise<Metadata> {
  return {
    title: `أطباء القاهرة | داوينا`,
    description: `ابحث عن أفضل الأطباء والمستشفيات في القاهرة واحجز موعدك بسهولة`,
  }
}
