"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Calendar, User, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Pagination } from "@/components/ui/pagination"

interface BlogGridProps {
  searchParams: {
    page?: string
    category?: string
    tag?: string
  }
}

export function BlogGrid({ searchParams }: BlogGridProps) {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [totalPages, setTotalPages] = useState(1)

  // Mock blog posts data
  const mockPosts = [
    {
      id: "1",
      slug: "tips-for-healthy-heart",
      title: "10 نصائح للحفاظ على صحة القلب",
      excerpt: "تعرف على أهم النصائح الطبية للحفاظ على صحة قلبك وتجنب أمراض القلب والأوعية الدموية",
      image: "/placeholder.svg?height=200&width=400",
      author: "د. أحمد محمد",
      category: "أمراض القلب",
      tags: ["صحة القلب", "الوقاية"],
      publishedAt: "2024-01-15T10:00:00Z",
      readingTime: 5,
    },
    {
      id: "2",
      slug: "diabetes-management",
      title: "كيفية إدارة مرض السكري بفعالية",
      excerpt: "دليل شامل لمرضى السكري حول كيفية إدارة المرض والعيش بحياة صحية طبيعية",
      image: "/placeholder.svg?height=200&width=400",
      author: "د. فاطمة علي",
      category: "الغدد الصماء",
      tags: ["السكري", "إدارة المرض"],
      publishedAt: "2024-01-12T14:20:00Z",
      readingTime: 7,
    },
    {
      id: "3",
      slug: "child-nutrition",
      title: "التغذية السليمة للأطفال في سن المدرسة",
      excerpt: "أهمية التغذية المتوازنة للأطفال وكيفية تحضير وجبات صحية ومفيدة",
      image: "/placeholder.svg?height=200&width=400",
      author: "د. محمد حسن",
      category: "طب الأطفال",
      tags: ["تغذية الأطفال", "صحة الطفل"],
      publishedAt: "2024-01-10T09:15:00Z",
      readingTime: 4,
    },
    // Add more posts...
  ]

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setPosts(mockPosts)
      setTotalPages(3)
      setLoading(false)
    }, 1000)
  }, [searchParams])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-80 bg-white rounded-lg animate-pulse" />
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden hover:scale-105 transition-transform duration-200">
            <CardContent className="p-0">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />

              <div className="p-6">
                <Badge variant="secondary" className="mb-3">
                  {post.category}
                </Badge>

                <h3 className="font-bold text-lg text-neutral-900 mb-2 line-clamp-2">{post.title}</h3>

                <p className="text-neutral-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between text-xs text-neutral-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readingTime} دقائق</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-neutral-500">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(post.publishedAt).toLocaleDateString("ar-EG")}</span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                  >
                    اقرأ المزيد ←
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center">
          <Pagination
            currentPage={Number.parseInt(searchParams.page || "1")}
            totalPages={totalPages}
            onPageChange={(page) => {
              // Handle page change
            }}
          />
        </div>
      )}
    </div>
  )
}
