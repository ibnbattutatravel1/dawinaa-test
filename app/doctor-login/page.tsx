import { DoctorLoginForm } from "@/components/features/doctor-login-form"

export default function DoctorLoginPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      {/* Header */}
      <section className="bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">دخول الأطباء</h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            ادخل إلى حسابك لإدارة مواعيدك ومتابعة حجوزات المرضى
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <DoctorLoginForm />
        </div>
      </section>
    </div>
  )
}

export const metadata = {
  title: "دخول الأطباء | داوينا",
  description: "دخول الأطباء إلى منصة داوينا لإدارة المواعيد والحجوزات",
}
