"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    setLoading(false)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "الهاتف",
      details: ["16676", "02-27777777"],
      color: "text-green-600",
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      details: ["info@dawina.com", "support@dawina.com"],
      color: "text-blue-600",
    },
    {
      icon: MapPin,
      title: "العنوان",
      details: ["القاهرة، مصر", "شارع التحرير، وسط البلد"],
      color: "text-red-600",
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      details: ["الأحد - الخميس: 9:00 - 18:00", "الجمعة - السبت: 10:00 - 16:00"],
      color: "text-purple-600",
    },
  ]

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-healing-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">تواصل معنا</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            نحن هنا لمساعدتك. تواصل معنا في أي وقت وسنكون سعداء للإجابة على استفساراتك
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">أرسل لنا رسالة</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">الاسم الكامل *</label>
                      <Input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="أدخل اسمك الكامل"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">رقم الهاتف *</label>
                      <Input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="01xxxxxxxxx"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">البريد الإلكتروني *</label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">الموضوع *</label>
                    <Input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="موضوع الرسالة"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">الرسالة *</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="اكتب رسالتك هنا..."
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full" loading={loading}>
                    <Send className="w-4 h-4 mr-2" />
                    إرسال الرسالة
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">معلومات التواصل</h2>
                <p className="text-neutral-600 mb-8">
                  يمكنك التواصل معنا من خلال الطرق التالية، وسنكون سعداء لمساعدتك في أي استفسار
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center`}>
                          <info.icon className={`w-6 h-6 ${info.color}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-neutral-900 mb-2">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-neutral-600 text-sm">
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
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-red-700 mb-2">للحالات الطارئة</h3>
                  <p className="text-red-600 text-sm mb-3">في حالة الطوارئ الطبية، يرجى الاتصال بالرقم التالي فوراً</p>
                  <Button variant="destructive" size="sm">
                    <Phone className="w-4 h-4 mr-2" />
                    123 (طوارئ)
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">الأسئلة الشائعة</h2>
            <p className="text-lg text-neutral-600">إجابات على أكثر الأسئلة شيوعاً</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-neutral-900 mb-2">كيف يمكنني حجز موعد؟</h3>
                <p className="text-neutral-600 text-sm">
                  يمكنك البحث عن الطبيب المناسب واختيار الموعد المتاح، ثم ملء بياناتك لتأكيد الحجز.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-neutral-900 mb-2">هل الخدمة مجانية؟</h3>
                <p className="text-neutral-600 text-sm">
                  البحث والحجز مجاني تماماً، تدفع فقط سعر الكشف للطبيب عند الزيارة.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-neutral-900 mb-2">كيف يمكنني إلغاء الموعد؟</h3>
                <p className="text-neutral-600 text-sm">
                  يمكنك إلغاء الموعد من خلال رقم الحجز أو الاتصال بخدمة العملاء.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-neutral-900 mb-2">هل الأطباء موثقون؟</h3>
                <p className="text-neutral-600 text-sm">
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
