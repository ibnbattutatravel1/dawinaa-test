"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const faqItems = [
    {
      question: "كيف يمكنني حجز موعد مع طبيب؟",
      answer:
        "يمكنك البحث عن الطبيب المناسب من خلال صفحة البحث، ثم اختيار الموعد المتاح وملء بياناتك لتأكيد الحجز. ستتلقى رسالة تأكيد خلال 30 دقيقة.",
    },
    {
      question: "هل يمكنني إلغاء أو تعديل الحجز؟",
      answer:
        "نعم، يمكنك إلغاء أو تعديل الحجز من خلال صفحة إدارة الحجوزات باستخدام رقم الحجز أو رقم الهاتف. يُفضل الإلغاء قبل 24 ساعة من الموعد.",
    },
    {
      question: "هل الخدمة مجانية؟",
      answer: "نعم، البحث والحجز مجاني تماماً. تدفع فقط سعر الكشف للطبيب عند الزيارة. لا توجد رسوم إضافية أو عمولات.",
    },
    {
      question: "كيف أعرف أن الطبيب موثق؟",
      answer:
        "جميع الأطباء على المنصة مرخصون ومعتمدون من نقابة الأطباء المصرية. الأطباء الموثقون يحملون علامة 'موثق' على ملفاتهم الشخصية.",
    },
    {
      question: "ماذا لو تأخر الطبيب عن الموعد؟",
      answer:
        "في حالة تأخر الطبيب أكثر من 30 دقيقة، يمكنك التواصل مع خدمة العملاء على 16676 وسنساعدك في إعادة جدولة الموعد أو العثور على بديل مناسب.",
    },
    {
      question: "كيف يمكنني تقييم الطبيب؟",
      answer:
        "بعد زيارة الطبيب، ستتلقى رابط لتقييم التجربة. يمكنك أيضاً تقييم الطبيب من خلال صفحته الشخصية باستخدام رقم الحجز.",
    },
    {
      question: "هل يمكنني حجز موعد لشخص آخر؟",
      answer: "نعم، يمكنك حجز موعد لأحد أفراد العائلة أو الأصدقاء. فقط تأكد من إدخال بيانات المريض الصحيحة عند الحجز.",
    },
    {
      question: "كيف أضيف عيادتي للمنصة؟",
      answer:
        "يمكنك إضافة عيادتك من خلال صفحة 'أضف عيادتك' وملء النموذج المطلوب. سيتم مراجعة طلبك والتواصل معك خلال 24 ساعة لتفعيل حسابك.",
    },
  ]

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <Card className="dark:bg-neutral-800 dark:border-neutral-700">
      <CardHeader>
        <CardTitle className="dark:text-white">الأسئلة الشائعة</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-neutral-200 dark:border-neutral-600 rounded-lg">
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-4 text-right flex items-center justify-between hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
              >
                <span className="font-medium text-neutral-900 dark:text-white">{item.question}</span>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-neutral-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-neutral-500" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="p-4 pt-0 border-t border-neutral-200 dark:border-neutral-600">
                  <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
