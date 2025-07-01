"use client"

import type React from "react"

import { useState } from "react"
import { User, MapPin, Stethoscope, Clock, FileText, Send } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export function AddClinicForm() {
  const [formData, setFormData] = useState({
    // Doctor Info
    doctorName: "",
    specialty: "",
    subSpecialty: "",
    experience: "",
    phone: "",
    email: "",

    // Clinic Info
    clinicName: "",
    address: "",
    governorate: "",
    city: "",
    consultationFee: "",

    // Working Hours
    workingDays: [],

    // Services
    services: [],

    // Additional
    about: "",
    education: "",
    languages: [],

    // Agreement
    agreeTerms: false,
  })

  const [loading, setLoading] = useState(false)

  const specialties = [
    "باطنة",
    "أطفال",
    "نساء وتوليد",
    "عظام",
    "قلب وأوعية دموية",
    "جلدية",
    "عيون",
    "أنف وأذن وحنجرة",
    "أسنان",
    "نفسية",
    "جراحة عامة",
  ]

  const governorates = [
    "القاهرة",
    "الجيزة",
    "الإسكندرية",
    "الدقهلية",
    "الشرقية",
    "القليوبية",
    "كفر الشيخ",
    "الغربية",
    "المنوفية",
    "البحيرة",
  ]

  const workingDays = ["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"]

  const commonServices = [
    "كشف عام",
    "استشارة طبية",
    "متابعة دورية",
    "فحص شامل",
    "تحاليل طبية",
    "أشعة",
    "عمليات صغرى",
    "علاج طبيعي",
  ]

  const languages = ["العربية", "الإنجليزية", "الفرنسية", "الألمانية"]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.agreeTerms) {
      alert("يرجى الموافقة على الشروط والأحكام")
      return
    }

    setLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert("تم إرسال طلبك بنجاح! سيتم التواصل معك خلال 24 ساعة لمراجعة البيانات وتفعيل حسابك.")

    // Reset form
    setFormData({
      doctorName: "",
      specialty: "",
      subSpecialty: "",
      experience: "",
      phone: "",
      email: "",
      clinicName: "",
      address: "",
      governorate: "",
      city: "",
      consultationFee: "",
      workingDays: [],
      services: [],
      about: "",
      education: "",
      languages: [],
      agreeTerms: false,
    })

    setLoading(false)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="dark:bg-neutral-800 dark:border-neutral-700">
        <CardHeader>
          <CardTitle className="text-2xl text-center dark:text-white">تسجيل عيادة جديدة</CardTitle>
          <p className="text-center text-neutral-600 dark:text-neutral-300">
            املأ البيانات التالية وسيتم التواصل معك لتفعيل حسابك
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Doctor Information */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-primary-600" />
                معلومات الطبيب
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    اسم الطبيب *
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.doctorName}
                    onChange={(e) => setFormData({ ...formData, doctorName: e.target.value })}
                    placeholder="د. أحمد محمد"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    التخصص *
                  </label>
                  <Select
                    value={formData.specialty}
                    onValueChange={(value) => setFormData({ ...formData, specialty: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="اختر التخصص" />
                    </SelectTrigger>
                    <SelectContent>
                      {specialties.map((specialty) => (
                        <SelectItem key={specialty} value={specialty}>
                          {specialty}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    التخصص الفرعي
                  </label>
                  <Input
                    type="text"
                    value={formData.subSpecialty}
                    onChange={(e) => setFormData({ ...formData, subSpecialty: e.target.value })}
                    placeholder="أمراض الجهاز الهضمي"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    سنوات الخبرة *
                  </label>
                  <Input
                    type="number"
                    required
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    placeholder="15"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    رقم الهاتف *
                  </label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="01xxxxxxxxx"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    البريد الإلكتروني *
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="doctor@example.com"
                  />
                </div>
              </div>
            </div>

            {/* Clinic Information */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary-600" />
                معلومات العيادة
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    اسم العيادة *
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.clinicName}
                    onChange={(e) => setFormData({ ...formData, clinicName: e.target.value })}
                    placeholder="عيادة د. أحمد محمد"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    سعر الكشف (جنيه) *
                  </label>
                  <Input
                    type="number"
                    required
                    value={formData.consultationFee}
                    onChange={(e) => setFormData({ ...formData, consultationFee: e.target.value })}
                    placeholder="300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    المحافظة *
                  </label>
                  <Select
                    value={formData.governorate}
                    onValueChange={(value) => setFormData({ ...formData, governorate: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="اختر المحافظة" />
                    </SelectTrigger>
                    <SelectContent>
                      {governorates.map((gov) => (
                        <SelectItem key={gov} value={gov}>
                          {gov}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    المدينة/المنطقة *
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="مدينة نصر"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    العنوان التفصيلي *
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="شارع عباس العقاد، برج الأطباء، الدور الخامس"
                  />
                </div>
              </div>
            </div>

            {/* Working Days */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary-600" />
                أيام العمل
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {workingDays.map((day) => (
                  <div key={day} className="flex items-center space-x-2">
                    <Checkbox
                      id={day}
                      checked={formData.workingDays.includes(day)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setFormData({ ...formData, workingDays: [...formData.workingDays, day] })
                        } else {
                          setFormData({ ...formData, workingDays: formData.workingDays.filter((d) => d !== day) })
                        }
                      }}
                    />
                    <label htmlFor={day} className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      {day}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-primary-600" />
                الخدمات المتاحة
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {commonServices.map((service) => (
                  <div key={service} className="flex items-center space-x-2">
                    <Checkbox
                      id={service}
                      checked={formData.services.includes(service)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setFormData({ ...formData, services: [...formData.services, service] })
                        } else {
                          setFormData({ ...formData, services: formData.services.filter((s) => s !== service) })
                        }
                      }}
                    />
                    <label htmlFor={service} className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      {service}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary-600" />
                معلومات إضافية
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    نبذة عن الطبيب
                  </label>
                  <textarea
                    value={formData.about}
                    onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                    placeholder="اكتب نبذة مختصرة عن خبرتك وتخصصك..."
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none dark:bg-neutral-700 dark:text-white"
                    rows={4}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    المؤهلات العلمية
                  </label>
                  <textarea
                    value={formData.education}
                    onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                    placeholder="بكالوريوس الطب والجراحة - جامعة القاهرة 2008&#10;ماجستير الباطنة - جامعة القاهرة 2012"
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none dark:bg-neutral-700 dark:text-white"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    اللغات
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {languages.map((language) => (
                      <div key={language} className="flex items-center space-x-2">
                        <Checkbox
                          id={language}
                          checked={formData.languages.includes(language)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setFormData({ ...formData, languages: [...formData.languages, language] })
                            } else {
                              setFormData({ ...formData, languages: formData.languages.filter((l) => l !== language) })
                            }
                          }}
                        />
                        <label
                          htmlFor={language}
                          className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
                        >
                          {language}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="border-t border-neutral-200 dark:border-neutral-600 pt-6">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={formData.agreeTerms}
                  onCheckedChange={(checked) => setFormData({ ...formData, agreeTerms: checked })}
                />
                <label htmlFor="terms" className="text-sm text-neutral-700 dark:text-neutral-300">
                  أوافق على{" "}
                  <a href="/terms" className="text-primary-600 hover:underline">
                    الشروط والأحكام
                  </a>{" "}
                  و{" "}
                  <a href="/privacy" className="text-primary-600 hover:underline">
                    سياسة الخصوصية
                  </a>{" "}
                  الخاصة بمنصة داوينا
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button type="submit" size="lg" loading={loading} disabled={!formData.agreeTerms} className="px-12">
                <Send className="w-5 h-5 mr-2" />
                إرسال الطلب
              </Button>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-3">
                سيتم مراجعة طلبك والتواصل معك خلال 24 ساعة
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
