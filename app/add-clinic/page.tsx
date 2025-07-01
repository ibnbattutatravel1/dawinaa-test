import { AddClinicForm } from "@/components/features/add-clinic-form"

export default function AddClinicPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      {/* Header */}
      <section className="bg-healing-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">أضف عيادتك إلى داوينا</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            انضم إلى آلاف الأطباء الذين يثقون في داوينا لإدارة مواعيدهم وتوسيع قاعدة مرضاهم
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">لماذا تختار داوينا؟</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300">مزايا الانضمام إلى منصة داوينا</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-2">زيادة عدد المرضى</h3>
              <p className="text-neutral-600 dark:text-neutral-300">وصول أوسع للمرضى الباحثين عن خدماتك الطبية</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-2">إدارة المواعيد</h3>
              <p className="text-neutral-600 dark:text-neutral-300">نظام متطور لإدارة المواعيد وتنظيم الجدول</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-2">مجاني تماماً</h3>
              <p className="text-neutral-600 dark:text-neutral-300">لا توجد رسوم اشتراك أو عمولات على الحجوزات</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AddClinicForm />
        </div>
      </section>
    </div>
  )
}

export const metadata = {
  title: "أضف عيادتك | داوينا",
  description: "انضم إلى منصة داوينا وابدأ في استقبال المرضى من خلال منصتنا المتطورة",
}
