import { Suspense } from "react"
import { BookingManager } from "@/components/features/booking-manager"

export default function ManageBookingPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      {/* Header */}
      <section className="bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">إدارة الحجوزات</h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            يمكنك البحث عن حجزك وإدارته أو تعديله من هنا
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Suspense fallback={<div className="h-96 animate-pulse bg-white dark:bg-neutral-800 rounded-lg" />}>
            <BookingManager />
          </Suspense>
        </div>
      </section>
    </div>
  )
}

export const metadata = {
  title: "إدارة الحجوزات | داوينا",
  description: "ابحث عن حجزك وقم بإدارته أو تعديله بسهولة",
}
