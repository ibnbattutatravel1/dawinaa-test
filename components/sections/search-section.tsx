import { SearchForm } from "@/components/features/search-form"

export function SearchSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">ابحث عن الطبيب المناسب لك</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            اختر من بين آلاف الأطباء المعتمدين في جميع أنحاء مصر واحجز موعدك بسهولة
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <SearchForm />
        </div>
      </div>
    </section>
  )
}
