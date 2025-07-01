import { Users, Target, Award, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { StatsSection } from "@/components/sections/stats-section"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "الرعاية الصحية للجميع",
      description: "نؤمن بأن الرعاية الصحية الجيدة حق لكل إنسان، ونسعى لجعلها متاحة ومتيسرة للجميع",
    },
    {
      icon: Award,
      title: "الجودة والتميز",
      description: "نلتزم بأعلى معايير الجودة في اختيار الأطباء والمستشفيات المتعاونة معنا",
    },
    {
      icon: Users,
      title: "الثقة والشفافية",
      description: "نبني علاقاتنا مع المرضى والأطباء على أساس الثقة المتبادلة والشفافية الكاملة",
    },
    {
      icon: Target,
      title: "الابتكار والتطوير",
      description: "نستخدم أحدث التقنيات لتطوير خدماتنا وتحسين تجربة المستخدمين باستمرار",
    },
  ]

  const team = [
    {
      name: "د. أحمد محمد",
      position: "المؤسس والرئيس التنفيذي",
      image: "/placeholder.svg?height=200&width=200",
      bio: "طبيب وريادي أعمال، يتمتع بخبرة 15 سنة في المجال الطبي والتكنولوجيا الصحية",
    },
    {
      name: "م. فاطمة علي",
      position: "مديرة التكنولوجيا",
      image: "/placeholder.svg?height=200&width=200",
      bio: "مهندسة برمجيات متخصصة في تطوير المنصات الطبية والذكاء الاصطناعي",
    },
    {
      name: "د. محمد حسن",
      position: "مدير الشؤون الطبية",
      image: "/placeholder.svg?height=200&width=200",
      bio: "استشاري طب الأسرة، مسؤول عن ضمان جودة الخدمات الطبية المقدمة",
    },
  ]

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-healing-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">من نحن</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            نحن منصة داوينا، نربط بين المرضى وأفضل الأطباء في مصر لتقديم رعاية صحية متميزة ومتاحة للجميع
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">قصتنا</h2>
              <div className="space-y-4 text-lg text-neutral-700 leading-relaxed">
                <p>
                  بدأت فكرة داوينا من تجربة شخصية مع صعوبة العثور على الطبيب المناسب في الوقت المناسب. أدركنا أن هناك
                  فجوة كبيرة بين المرضى الذين يبحثون عن رعاية صحية جيدة والأطباء المتميزين الذين يقدمون هذه الخدمات.
                </p>
                <p>
                  في عام 2020، قررنا إطلاق منصة داوينا لتكون الجسر الذي يربط بين المرضى والأطباء، مما يسهل عملية البحث
                  والحجز ويضمن حصول كل مريض على أفضل رعاية صحية ممكنة.
                </p>
                <p>
                  اليوم، نفخر بأن داوينا أصبحت المنصة الرائدة في مصر لحجز المواعيد الطبية، حيث نخدم آلاف المرضى شهرياً
                  ونتعاون مع أكثر من 10,000 طبيب في جميع التخصصات.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="قصة داوينا"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">رسالتنا</h2>
          <p className="text-xl text-neutral-600 max-w-4xl mx-auto mb-12">
            نسعى لتحويل تجربة الرعاية الصحية في مصر من خلال توفير منصة موثوقة وسهلة الاستخدام تربط المرضى بأفضل الأطباء
            والمستشفيات، مما يضمن حصولهم على رعاية صحية متميزة في الوقت المناسب.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">قيمنا</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              القيم التي نؤمن بها وتوجه عملنا في تقديم أفضل خدمة للمرضى والأطباء
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:scale-105 transition-transform duration-200">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="font-bold text-lg text-neutral-900 mb-3">{value.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">فريق العمل</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              تعرف على الفريق المتميز الذي يعمل بجد لتقديم أفضل خدمة لك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:scale-105 transition-transform duration-200">
                <CardContent className="p-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-bold text-xl text-neutral-900 mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.position}</p>
                  <p className="text-neutral-600 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export const metadata = {
  title: "من نحن | داوينا",
  description: "تعرف على قصة داوينا ورسالتنا في تحسين الرعاية الصحية في مصر",
}
