import { Suspense } from "react"
import { HelpCenter } from "@/components/features/help-center"
import { FAQ } from "@/components/features/faq"
import { ContactSupport } from "@/components/features/contact-support"

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      {/* Header */}
      <section className="bg-healing-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">مركز المساعدة</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            نحن هنا لمساعدتك. ابحث عن إجابات لأسئلتك أو تواصل مع فريق الدعم
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Suspense fallback={<div className="h-96 animate-pulse bg-white dark:bg-neutral-800 rounded-lg" />}>
              <HelpCenter />
            </Suspense>

            <Suspense fallback={<div className="h-96 animate-pulse bg-white dark:bg-neutral-800 rounded-lg" />}>
              <FAQ />
            </Suspense>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Suspense fallback={<div className="h-64 animate-pulse bg-white dark:bg-neutral-800 rounded-lg" />}>
              <ContactSupport />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}

export const metadata = {
  title: "مركز المساعدة | داوينا",
  description: "احصل على المساعدة والدعم من فريق داوينا",
}
