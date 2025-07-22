"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Headphones, CheckCircle, Star, Shield } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    setLoading(false)

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "الهاتف",
      details: ["16676", "02-27777777"],
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      borderColor: "border-emerald-200",
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      details: ["info@dawina.com", "support@dawina.com"],
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200",
    },
    {
      icon: MapPin,
      title: "العنوان",
      details: ["القاهرة، مصر", "شارع التحرير، وسط البلد"],
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
      borderColor: "border-amber-200",
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      details: ["الأحد - الخميس: 9:00 - 18:00", "الجمعة - السبت: 10:00 - 16:00"],
      bgColor: "bg-violet-50",
      iconColor: "text-violet-600",
      borderColor: "border-violet-200",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/50">
      {/* Hero Section */}
      <section className="healing-gradient text-white py-20 md:py-28 relative overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-white rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white rounded-full animate-float" style={{ animationDelay: "4s" }}></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-white rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/20">
            <Headphones className="w-5 h-5" />
            <span>خدمة عملاء متاحة 24/7</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            تواصل معنا
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto opacity-95 leading-relaxed mb-12">
            نحن هنا لمساعدتك في كل خطوة. فريقنا المتخصص جاهز للإجابة على جميع استفساراتك وتقديم أفضل الدعم الطبي
          </p>

          {/* Enhanced Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-white">24/7</div>
              <div className="text-sm md:text-base opacity-90">دعم متواصل</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-white">&lt;2h</div>
              <div className="text-sm md:text-base opacity-90">وقت الاستجابة</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-white">98%</div>
              <div className="text-sm md:text-base opacity-90">رضا العملاء</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 -mt-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm hover:shadow-3xl transition-all duration-300">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 medical-gradient rounded-2xl flex items-center justify-center shadow-lg">
                    <MessageCircle className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl lg:text-3xl text-slate-900 font-bold">أرسل لنا رسالة</CardTitle>
                    <p className="text-slate-600 text-sm lg:text-base">سنرد عليك في أقرب وقت ممكن</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {submitted && (
                  <div className="mb-6 p-5 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl flex items-center gap-4 shadow-sm">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-green-800 font-semibold text-lg">تم إرسال رسالتك بنجاح!</p>
                      <p className="text-green-600 text-sm">سنتواصل معك خلال 24 ساعة</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-800 mb-3">الاسم الكامل *</label>
                      <Input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="أدخل اسمك الكامل"
                        className="h-14 border-slate-300 focus:border-blue-500 focus:ring-blue-500 text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-800 mb-3">رقم الهاتف *</label>
                      <Input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="01xxxxxxxxx"
                        className="h-14 border-slate-300 focus:border-blue-500 focus:ring-blue-500 text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-3">البريد الإلكتروني *</label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@email.com"
                      className="h-14 border-slate-300 focus:border-blue-500 focus:ring-blue-500 text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-3">الموضوع *</label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full h-14 px-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-base transition-all duration-200"
                    >
                      <option value="">اختر موضوع الرسالة</option>
                      <option value="booking">مشكلة في الحجز</option>
                      <option value="technical">مشكلة تقنية</option>
                      <option value="complaint">شكوى</option>
                      <option value="suggestion">اقتراح</option>
                      <option value="other">أخرى</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-3">الرسالة *</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="اكتب رسالتك هنا..."
                      className="w-full px-4 py-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-base transition-all duration-200"
                      rows={6}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-14 medical-gradient hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-base font-semibold"
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        جاري الإرسال...
                      </div>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-3" />
                        إرسال الرسالة
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">معلومات التواصل</h2>
                <p className="text-slate-600 text-base lg:text-lg leading-relaxed">
                  يمكنك التواصل معنا من خلال الطرق التالية، وسنكون سعداء لمساعدتك في أي استفسار
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className={`hover:shadow-lg transition-all duration-300 border-l-4 ${info.borderColor} ${info.bgColor}/30`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-5">
                        <div className={`w-14 h-14 rounded-2xl ${info.bgColor} flex items-center justify-center shadow-sm`}>
                          <info.icon className={`w-7 h-7 ${info.iconColor}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-slate-900 mb-3">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-slate-600 text-base mb-1 leading-relaxed">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Emergency Contact */}
              <Card className="border-red-200 bg-gradient-to-r from-red-50 to-rose-50 border-l-4 border-l-red-400 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-red-700 mb-2">للحالات الطارئة</h3>
                      <p className="text-red-600 text-sm mb-4 leading-relaxed">في حالة الطوارئ الطبية، يرجى الاتصال بالرقم التالي فوراً</p>
                      <Button variant="destructive" size="lg" className="shadow-md hover:shadow-lg">
                        <Phone className="w-5 h-5 mr-2" />
                        123 (طوارئ)
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trust Indicators */}
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-6 border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-slate-700 font-semibold">4.9/5</span>
                </div>
                <p className="text-slate-600 text-sm">
                  أكثر من 50,000 مريض يثق في خدماتنا
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-teal-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">الأسئلة الشائعة</h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto">إجابات على أكثر الأسئلة شيوعاً حول خدماتنا</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-400 bg-gradient-to-r from-blue-50/50 to-white">
              <CardContent className="p-8">
                <h3 className="font-bold text-lg text-slate-900 mb-4">كيف يمكنني حجز موعد؟</h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  يمكنك البحث عن الطبيب المناسب واختيار الموعد المتاح، ثم ملء بياناتك لتأكيد الحجز بسهولة.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-400 bg-gradient-to-r from-green-50/50 to-white">
              <CardContent className="p-8">
                <h3 className="font-bold text-lg text-slate-900 mb-4">هل الخدمة مجانية؟</h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  البحث والحجز مجاني تماماً، تدفع فقط سعر الكشف للطبيب عند الزيارة.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-amber-400 bg-gradient-to-r from-amber-50/50 to-white">
              <CardContent className="p-8">
                <h3 className="font-bold text-lg text-slate-900 mb-4">كيف يمكنني إلغاء الموعد؟</h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  يمكنك إلغاء الموعد من خلال رقم الحجز أو الاتصال بخدمة العملاء على مدار الساعة.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-purple-400 bg-gradient-to-r from-purple-50/50 to-white">
              <CardContent className="p-8">
                <h3 className="font-bold text-lg text-slate-900 mb-4">هل الأطباء موثقون؟</h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  نعم، جميع الأطباء على المنصة مرخصون ومعتمدون من نقابة الأطباء المصرية.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
