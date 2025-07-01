import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "أهمية الفحص الدوري للقلب",
    excerpt: "تعرف على أهمية إجراء الفحوصات الدورية للقلب والأوعية الدموية للوقاية من الأمراض المزمنة.",
    category: "أمراض القلب",
    author: "د. أحمد محمد",
    date: "2024-01-15",
    image: "/placeholder.svg?height=200&width=300",
    readTime: "5 دقائق",
  },
  {
    id: 2,
    title: "نصائح للعناية بصحة الأطفال في الشتاء",
    excerpt: "دليل شامل للوالدين حول كيفية حماية الأطفال من أمراض الشتاء الشائعة وتقوية مناعتهم.",
    category: "طب الأطفال",
    author: "د. سارة أحمد",
    date: "2024-01-12",
    image: "/placeholder.svg?height=200&width=300",
    readTime: "7 دقائق",
  },
  {
    id: 3,
    title: "التغذية السليمة لمرضى السكري",
    excerpt: "نصائح غذائية مهمة لمرضى السكري للحفاظ على مستوى السكر في الدم ضمن المعدل الطبيعي.",
    category: "التغذية",
    author: "د. محمد حسام",
    date: "2024-01-10",
    image: "/placeholder.svg?height=200&width=300",
    readTime: "6 دقائق",
  },
]

export function BlogSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">المدونة الطبية</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            اقرأ أحدث المقالات الطبية والنصائح الصحية من خبراء الطب في مختلف التخصصات
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-primary">{post.category}</Badge>
              </div>

              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3 line-clamp-2">{post.title}</h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString("ar-EG")}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</span>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/blog/${post.id}`}>
                      اقرأ المزيد
                      <ArrowLeft className="mr-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/blog">
              عرض جميع المقالات
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
