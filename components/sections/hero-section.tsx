import { Button } from "@/components/ui/button"
import { Search, MapPin, Calendar, Users, Shield, Award } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-500 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-20 w-32 h-32 bg-blue-500 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-16 h-16 bg-purple-500 rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-slate-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-slate-200">
                <Shield className="w-4 h-4 text-blue-500" />
                منصة طبية موثوقة ومعتمدة في مصر
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient">داوينا</span>
                <br />
                <span className="text-slate-900">صحتك في أيدٍ أمينة</span>
              </h1>

              <p className="text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                ابحث عن أفضل الأطباء في مصر واحجز موعدك بسهولة. أكثر من 10,000 طبيب معتمد في جميع التخصصات الطبية في
                خدمتك على مدار الساعة.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center text-white shadow-lg mx-auto mb-3">
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-slate-900">10,000+</div>
                <div className="text-sm text-slate-500">طبيب معتمد</div>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg mx-auto mb-3">
                  <Calendar className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-slate-900">50,000+</div>
                <div className="text-sm text-slate-500">موعد شهرياً</div>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg mx-auto mb-3">
                  <Award className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-slate-900">4.9</div>
                <div className="text-sm text-slate-500">تقييم المستخدمين</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="gradient" size="lg" className="text-lg px-8 py-4 h-auto" asChild>
                <Link href="/search">
                  ابحث عن طبيب الآن
                  <Search className="mr-2 h-5 w-5" />
                </Link>
              </Button>

              <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto bg-transparent" asChild>
                <Link href="/hospitals">
                  <MapPin className="mr-2 h-5 w-5" />
                  المستشفيات القريبة
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-8 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-500" />
                بيانات محمية
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-pink-500" />
                أطباء معتمدون
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-teal-500" />
                حجز فوري
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 border border-slate-200 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="aspect-square bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">أطباء متخصصون</h3>
                    <p className="text-slate-600">في جميع التخصصات الطبية</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-900">حجز سريع</div>
                  <div className="text-xs text-slate-500">في دقائق معدودة</div>
                </div>
              </div>
            </div>

            <div
              className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 animate-float"
              style={{ animationDelay: "2s" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-900">تقييمات عالية</div>
                  <div className="text-xs text-slate-500">من المرضى</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
