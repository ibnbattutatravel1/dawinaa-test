import { Users, Target, Award, Heart, CheckCircle, Star, Shield, Zap } from "lucide-react"
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
            <Shield className="w-5 h-5" />
            <span>منصة طبية موثوقة</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            من نحن
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto opacity-95 leading-relaxed">
            نحن منصة داوينا، نربط بين المرضى وأفضل الأطباء في مصر لتقديم رعاية صحية متميزة ومتاحة للجميع
          </p>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-white">10K+</div>
              <div className="text-sm md:text-base opacity-90">طبيب معتمد</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-white">50K+</div>
              <div className="text-sm md:text-base opacity-90">مريض راضي</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-white">4.9★</div>
              <div className="text-sm md:text-base opacity-90">تقييم العملاء</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 -mt-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                قصة نجاح
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">قصتنا</h2>
              <div className="space-y-6 text-base lg:text-lg text-slate-700 leading-relaxed">
                <p className="text-lg lg:text-xl font-medium text-slate-800">
                  بدأت فكرة داوينا من تجربة شخصية مع صعوبة العثور على الطبيب المناسب في الوقت المناسب.
                </p>
                <p>
                  أدركنا أن هناك فجوة كبيرة بين المرضى الذين يبحثون عن رعاية صحية جيدة والأطباء المتميزين الذين يقدمون هذه الخدمات. هذا التحدي ألهمنا لإيجاد حل مبتكر.
                </p>
                <p>
                  في عام 2020، قررنا إطلاق منصة داوينا لتكون الجسر الذي يربط بين المرضى والأطباء، مما يسهل عملية البحث والحجز ويضمن حصول كل مريض على أفضل رعاية صحية ممكنة.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-2xl border border-blue-100">
                  <p className="font-semibold text-slate-800 mb-2">اليوم، نفخر بأن داوينا أصبحت:</p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      المنصة الرائدة في مصر لحجز المواعيد الطبية
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      نخدم آلاف المرضى شهرياً
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      نتعاون مع أكثر من 10,000 طبيب في جميع التخصصات
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-teal-400 rounded-3xl opacity-20 blur-lg"></div>
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="قصة داوينا"
                className="relative w-full h-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">رعاية صحية أفضل</div>
                    <div className="text-sm text-slate-600">لكل مريض</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-teal-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              رسالتنا
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-8">نحو مستقبل صحي أفضل</h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              نسعى لتحويل تجربة الرعاية الصحية في مصر من خلال توفير منصة موثوقة وسهلة الاستخدام تربط المرضى بأفضل الأطباء والمستشفيات، مما يضمن حصولهم على رعاية صحية متميزة في الوقت المناسب.
            </p>
          </div>
          
          {/* Mission Goals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-t-4 border-t-blue-400 bg-gradient-to-b from-blue-50/50 to-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-4">سهولة الوصول</h3>
                <p className="text-slate-600 leading-relaxed">جعل الرعاية الصحية متاحة ومتيسرة لجميع المرضى في كل مكان</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-t-4 border-t-teal-400 bg-gradient-to-b from-teal-50/50 to-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-4">الثقة والأمان</h3>
                <p className="text-slate-600 leading-relaxed">ضمان أعلى معايير الجودة والأمان في جميع خدماتنا الطبية</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-t-4 border-t-purple-400 bg-gradient-to-b from-purple-50/50 to-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-4">رعاية شاملة</h3>
                <p className="text-slate-600 leading-relaxed">تقديم تجربة طبية متكاملة تركز على راحة ورضا المريض</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              قيمنا الأساسية
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">ما نؤمن به</h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              القيم التي نؤمن بها وتوجه عملنا في تقديم أفضل خدمة للمرضى والأطباء
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const colors = [
                { bg: "bg-red-50", icon: "text-red-600", border: "border-red-200", gradient: "from-red-50 to-rose-50" },
                { bg: "bg-blue-50", icon: "text-blue-600", border: "border-blue-200", gradient: "from-blue-50 to-indigo-50" },
                { bg: "bg-green-50", icon: "text-green-600", border: "border-green-200", gradient: "from-green-50 to-emerald-50" },
                { bg: "bg-purple-50", icon: "text-purple-600", border: "border-purple-200", gradient: "from-purple-50 to-violet-50" }
              ]
              const color = colors[index]
              
              return (
                <Card key={index} className={`text-center hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 ${color.border} bg-gradient-to-b ${color.gradient} to-white`}>
                  <CardContent className="p-8">
                    <div className={`w-18 h-18 ${color.bg} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm`}>
                      <value.icon className={`w-9 h-9 ${color.icon}`} />
                    </div>
                    <h3 className="font-bold text-xl text-slate-900 mb-4 leading-tight">{value.title}</h3>
                    <p className="text-slate-600 text-base leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Our Team */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              فريق العمل
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">الفريق المتميز</h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              تعرف على الفريق المتميز الذي يعمل بجد لتقديم أفضل خدمة لك ولضمان تجربة طبية استثنائية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {team.map((member, index) => {
              const gradients = [
                "from-blue-50 to-indigo-50",
                "from-teal-50 to-cyan-50", 
                "from-purple-50 to-pink-50"
              ]
              const borders = [
                "border-blue-200",
                "border-teal-200",
                "border-purple-200"
              ]
              
              return (
                <Card key={index} className={`text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 ${borders[index]} bg-gradient-to-b ${gradients[index]} to-white overflow-hidden`}>
                  <CardContent className="p-8">
                    <div className="relative mb-6">
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full opacity-20 blur-sm"></div>
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="relative w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                      />
                    </div>
                    <h3 className="font-bold text-xl lg:text-2xl text-slate-900 mb-3">{member.name}</h3>
                    <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {member.position}
                    </div>
                    <p className="text-slate-600 text-base leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              )
            })}
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
