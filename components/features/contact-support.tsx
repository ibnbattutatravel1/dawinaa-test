import { Phone, Mail, MessageCircle, Clock, Headphones } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ContactSupport() {
  const supportOptions = [
    {
      icon: Phone,
      title: "الهاتف",
      description: "اتصل بنا مباشرة",
      contact: "16676",
      availability: "24/7",
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900/30",
    },
    {
      icon: MessageCircle,
      title: "الدردشة المباشرة",
      description: "تحدث مع فريق الدعم",
      contact: "ابدأ المحادثة",
      availability: "9:00 - 18:00",
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      description: "أرسل لنا رسالة",
      contact: "support@dawina.com",
      availability: "رد خلال 24 ساعة",
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Contact Options */}
      <Card className="dark:bg-neutral-800 dark:border-neutral-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 dark:text-white">
            <Headphones className="w-5 h-5 text-primary-600" />
            تواصل مع الدعم
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {supportOptions.map((option, index) => (
              <div key={index} className="border border-neutral-200 dark:border-neutral-600 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-full ${option.bgColor} flex items-center justify-center`}>
                    <option.icon className={`w-5 h-5 ${option.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-neutral-900 dark:text-white mb-1">{option.title}</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-2">{option.description}</p>
                    <p className="text-sm font-medium text-neutral-900 dark:text-white mb-1">{option.contact}</p>
                    <div className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400">
                      <Clock className="w-3 h-3" />
                      {option.availability}
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-3" size="sm">
                  {option.title === "الهاتف"
                    ? "اتصل الآن"
                    : option.title === "الدردشة المباشرة"
                      ? "ابدأ المحادثة"
                      : "أرسل رسالة"}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Emergency Contact */}
      <Card className="border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800">
        <CardContent className="p-6">
          <h3 className="font-bold text-red-700 dark:text-red-400 mb-2">للحالات الطارئة</h3>
          <p className="text-red-600 dark:text-red-300 text-sm mb-3">
            في حالة الطوارئ الطبية، يرجى الاتصال بالرقم التالي فوراً
          </p>
          <Button variant="destructive" size="sm" className="w-full">
            <Phone className="w-4 h-4 mr-2" />
            123 (طوارئ)
          </Button>
        </CardContent>
      </Card>

      {/* Quick Tips */}
      <Card className="dark:bg-neutral-800 dark:border-neutral-700">
        <CardHeader>
          <CardTitle className="text-lg dark:text-white">نصائح سريعة</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
              <h4 className="font-medium text-neutral-900 dark:text-white text-sm mb-1">قبل الاتصال</h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-300">
                تأكد من وجود رقم الحجز أو رقم الهاتف المسجل معك
              </p>
            </div>
            <div className="p-3 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
              <h4 className="font-medium text-neutral-900 dark:text-white text-sm mb-1">أوقات الذروة</h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-300">
                أفضل أوقات للتواصل: 10:00 - 12:00 و 14:00 - 16:00
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
