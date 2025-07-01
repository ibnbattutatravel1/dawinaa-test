import Image from "next/image"
import { Calendar, User, Clock, Share2, Bookmark } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { formatDate } from "@/lib/utils"

interface BlogPostProps {
  post: {
    id: string
    title: string
    content: string
    image: string
    author: string
    category: string
    tags: string[]
    publishedAt: string
    readingTime: number
  }
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        {/* Featured Image */}
        <div className="relative h-64 md:h-80">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        </div>

        <div className="p-8">
          {/* Meta Info */}
          <div className="flex items-center gap-4 mb-4">
            <Badge variant="secondary">{post.category}</Badge>
            <div className="flex items-center gap-4 text-sm text-neutral-500">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime} دقائق قراءة</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 leading-tight">{post.title}</h1>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 mb-8 pb-6 border-b border-neutral-200">
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              مشاركة
            </Button>
            <Button variant="outline" size="sm">
              <Bookmark className="w-4 h-4 mr-2" />
              حفظ
            </Button>
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none text-neutral-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-8 pt-6 border-t border-neutral-200">
            <h3 className="font-semibold text-neutral-900 mb-3">الكلمات المفتاحية:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-8 p-6 bg-neutral-50 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-primary-600 font-bold text-xl">{post.author.charAt(2)}</span>
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">{post.author}</h4>
                <p className="text-neutral-600 text-sm">
                  طبيب متخصص في {post.category}، يكتب مقالات طبية موثوقة لتوعية المرضى وتقديم النصائح الطبية المفيدة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
