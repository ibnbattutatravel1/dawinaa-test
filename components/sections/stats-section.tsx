import { Users, Calendar, Star, Shield } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "طبيب معتمد",
    description: "في جميع التخصصات الطبية",
  },
  {
    icon: Calendar,
    value: "50,000+",
    label: "موعد شهرياً",
    description: "يتم حجزها عبر المنصة",
  },
  {
    icon: Star,
    value: "4.9",
    label: "تقييم المستخدمين",
    description: "من أصل 5 نجوم",
  },
  {
    icon: Shield,
    value: "100%",
    label: "أمان البيانات",
    description: "حماية كاملة للخصوصية",
  },
]

export function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 dark:from-blue-800 dark:via-purple-800 dark:to-teal-800">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">أرقام تتحدث عن نفسها</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            نفخر بثقة آلاف المرضى والأطباء في منصتنا الطبية الرائدة
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-blue-100 mb-1">{stat.label}</div>
              <div className="text-sm text-blue-200">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
