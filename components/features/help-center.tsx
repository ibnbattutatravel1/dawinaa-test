"use client"

import { useState } from "react"
import { Search, Book, Users, Calendar, CreditCard, Settings, MessageCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("")

  const helpCategories = [
    {
      icon: Calendar,
      title: "حجز المواعيد",
      description: "كيفية البحث عن الأطباء وحجز المواعيد",
      articles: 12,
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      icon: Users,
      title: "إدارة الحساب",
      description: "إنشاء وإدارة حسابك الشخصي",
      articles: 8,
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900/30",
    },
    {
      icon: CreditCard,
      title: "الدفع والفواتير",
      description: "معلومات حول الدفع وأسعار الكشف",
      articles: 6,
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
    },
    {
      icon: Book,
      title: "للأطباء",
      description: "دليل الأطباء لاستخدام المنصة",
      articles: 15,
      color: "text-orange-600",
      bgColor: "bg-orange-100 dark:bg-orange-900/30",
    },
    {
      icon: Settings,
      title: "الإعدادات",
      description: "تخصيص إعدادات حسابك وتفضيلاتك",
      articles: 5,
      color: "text-red-600",
      bgColor: "bg-red-100 dark:bg-red-900/30",
    },
    {
      icon: MessageCircle,
      title: "التواصل والدعم",
      description: "كيفية التواصل مع الدعم الفني",
      articles: 4,
      color: "text-teal-600",
      bgColor: "bg-teal-100 dark:bg-teal-900/30",
    },
  ]

  const popularArticles = [
    "كيفية حجز موعد مع طبيب",
    "كيفية إلغاء أو تعديل الحجز",
    "ما هي أسعار الكشف؟",
    "كيفية تقييم الطبيب بعد الزيارة",
    "كيفية البحث عن طبيب في منطقتي",
    "ماذا أفعل إذا تأخر الطبيب؟",
    "كيفية إضافة عيادة للمنصة",
    "كيفية تحديث معلومات الطبيب",
  ]

  return (
    <div className="space-y-8">
      {/* Search */}
      <Card className="dark:bg-neutral-800 dark:border-neutral-700">
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">كيف يمكننا مساعدتك؟</h2>
            <p className="text-neutral-600 dark:text-neutral-300">ابحث عن إجابات لأسئلتك</p>
          </div>
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="ابحث في مركز المساعدة..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Button>
              <Search className="w-4 h-4 mr-2" />
              بحث
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <div>
        <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">تصفح حسب الفئة</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {helpCategories.map((category, index) => (
            <Card
              key={index}
              className="hover:scale-105 transition-transform duration-200 cursor-pointer dark:bg-neutral-800 dark:border-neutral-700"
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-full ${category.bgColor} flex items-center justify-center mb-4`}>
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">{category.title}</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-3">{category.description}</p>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">{category.articles} مقال</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Popular Articles */}
      <Card className="dark:bg-neutral-800 dark:border-neutral-700">
        <CardHeader>
          <CardTitle className="dark:text-white">المقالات الأكثر شيوعاً</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {popularArticles.map((article, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors cursor-pointer"
              >
                <span className="text-neutral-700 dark:text-neutral-300">{article}</span>
                <span className="text-neutral-400">←</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
