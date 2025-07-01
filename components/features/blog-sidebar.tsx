import Link from "next/link"
import { Search, Tag, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function BlogSidebar() {
  const categories = [
    { name: "أمراض القلب", count: 15 },
    { name: "طب الأطفال", count: 12 },
    { name: "الغدد الصماء", count: 8 },
    { name: "الجلدية", count: 10 },
    { name: "العظام", count: 7 },
  ]

  const popularTags = [
    "صحة القلب",
    "السكري",
    "تغذية الأطفال",
    "الوقاية",
    "نمط حياة صحي",
    "أمراض الجلد",
    "العظام والمفاصل",
    "الصحة النفسية",
  ]

  const recentPosts = [
    {
      title: "أعراض نقص فيتامين د وطرق العلاج",
      slug: "vitamin-d-deficiency",
      date: "2024-01-18",
    },
    {
      title: "كيفية التعامل مع آلام الظهر",
      slug: "back-pain-treatment",
      date: "2024-01-16",
    },
    {
      title: "نصائح للنوم الصحي",
      slug: "healthy-sleep-tips",
      date: "2024-01-14",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="w-5 h-5 text-primary-600" />
            البحث في المدونة
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input placeholder="ابحث عن مقال..." className="flex-1" />
            <Button size="icon">
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle>التصنيفات</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/blog?category=${category.name}`}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-neutral-50 transition-colors"
              >
                <span className="text-neutral-700">{category.name}</span>
                <Badge variant="outline">{category.count}</Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Popular Tags */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Tag className="w-5 h-5 text-primary-600" />
            الكلمات الشائعة
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <Link key={tag} href={`/blog?tag=${tag}`}>
                <Badge variant="outline" className="hover:bg-primary-50 cursor-pointer">
                  {tag}
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary-600" />
            أحدث المقالات
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-3 rounded-lg hover:bg-neutral-50 transition-colors"
              >
                <h4 className="font-medium text-neutral-900 mb-1 line-clamp-2">{post.title}</h4>
                <p className="text-xs text-neutral-500">{new Date(post.date).toLocaleDateString("ar-EG")}</p>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
