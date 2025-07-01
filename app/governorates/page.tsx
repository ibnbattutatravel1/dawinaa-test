import { Suspense } from "react"
import { GovernoratesGrid } from "@/components/features/governorates-grid"
import { MapPin, Users, Hospital } from "lucide-react"

export default function GovernoratesPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      {/* Header */}
      <section className="bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">دليل المحافظات</h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            اختر محافظتك للعثور على أفضل الأطباء والمستشفيات في منطقتك
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-primary-50 dark:bg-primary-900/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-8 h-8 text-primary-600" />
              <div>
                <div className="text-2xl font-bold text-neutral-900 dark:text-white">27</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-300">محافظة</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Users className="w-8 h-8 text-secondary-600" />
              <div>
                <div className="text-2xl font-bold text-neutral-900 dark:text-white">10,000+</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-300">طبيب</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Hospital className="w-8 h-8 text-green-600" />
              <div>
                <div className="text-2xl font-bold text-neutral-900 dark:text-white">500+</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-300">مستشفى</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governorates Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Suspense fallback={<div className="h-96 animate-pulse bg-white dark:bg-neutral-800 rounded-lg" />}>
            <GovernoratesGrid />
          </Suspense>
        </div>
      </section>
    </div>
  )
}

export const metadata = {
  title: "دليل المحافظات | داوينا",
  description: "اختر محافظتك للعثور على أفضل الأطباء والمستشفيات في منطقتك",
}
