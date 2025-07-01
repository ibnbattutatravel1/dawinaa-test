import Link from "next/link"
import { Calendar, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface RelatedPostsProps {
  category: string
  currentPostId: string
}

export async function RelatedPosts({ category, currentPostId }: RelatedPostsProps) {
  // Mock related posts
  const relatedPosts = [
    {
      id: "2",
      slug: "heart-disease-prevention",
      title: "الوقاية من أمراض القلب: دليل شامل",
      excerpt: "تعرف على أهم طرق الوقاية من أمراض القلب والعوامل التي تزيد من خطر الإصابة",
      image: "/placeholder.svg?height=150&width=250",
      author: "د. سارة أحمد",
      category: "أمراض القلب",
      publishedAt: "2024-01-10T10:00:00Z",
    },
    {
      id: "3",
      slug: "heart-healthy-diet",
      title: "النظام الغذائي الصحي للقلب",
      excerpt: "أفضل الأطعمة التي تحافظ على صحة القلب والأطعمة التي يجب تجنبها",
      image: "/placeholder.svg?height=150&width=250",
      author: "د. محمد علي",
      category: "أمراض القلب",
      publishedAt: "2024-01-08T14:30:00Z",
    },
  ]

  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-neutral-900 mb-6">مقالات ذات صلة</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {relatedPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden hover:scale-105 transition-transform duration-200">
            <CardContent className="p-0">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-40 object-cover" />

              <div className="p-4">
                <Badge variant="secondary" className="mb-2">
                  {post.category}
                </Badge>

                <h3 className="font-bold text-lg text-neutral-900 mb-2 line-clamp-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary-600">
                    {post.title}
                  </Link>
                </h3>

                <p className="text-neutral-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>

                <div className="flex items-center justify-between text-xs text-neutral-500">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(post.publishedAt).toLocaleDateString("ar-EG")}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
