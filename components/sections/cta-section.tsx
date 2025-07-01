import { Button } from "@/components/ui/button"
import { ArrowLeft, Smartphone, Calendar, Shield } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 dark:from-blue-800 dark:via-purple-800 dark:to-teal-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">ابدأ رحلتك الصحية اليوم</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            انضم إلى آلاف المرضى الذين يثقون في داوينا للحصول على أفضل رعاية طبية
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-4">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">سهولة الاستخدام</h3>
            <p className="text-blue-100">واجهة بسيطة وسهلة للجميع</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-4">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">حجز فوري</h3>
            <p className="text-blue-100">احجز موعدك في دقائق معدودة</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">أمان تام</h3>
            <p className="text-blue-100">حماية كاملة لبياناتك الشخصية</p>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 h-auto" asChild>
              <Link href="/search">
                ابحث عن طبيب الآن
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 h-auto bg-transparent"
              asChild
            >
              <Link href="/doctor-login">انضم كطبيب</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
