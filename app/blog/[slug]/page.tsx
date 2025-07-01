import { Suspense } from "react"
import type { Metadata } from "next"
import { BlogPost } from "@/components/features/blog-post"
import { RelatedPosts } from "@/components/features/related-posts"
import { BlogSidebar } from "@/components/features/blog-sidebar"

interface BlogPostPageProps {
  params: { slug: string }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // Mock blog post data
  const post = {
    id: "1",
    slug: params.slug,
    title: "10 نصائح للحفاظ على صحة القلب",
    excerpt: "تعرف على أهم النصائح الطبية للحفاظ على صحة قلبك وتجنب أمراض القلب والأوعية الدموية",
    content: `
      <p>صحة القلب هي أساس الحياة الصحية، ومع تزايد أمراض القلب في العالم العربي، أصبح من الضروري اتباع نمط حياة صحي للحفاظ على سلامة القلب والأوعية الدموية.</p>
      
      <h2>1. ممارسة الرياضة بانتظام</h2>
      <p>تعتبر الرياضة من أهم العوامل للحفاظ على صحة القلب. ينصح بممارسة الرياضة لمدة 30 دقيقة يومياً على الأقل.</p>
      
      <h2>2. اتباع نظام غذائي صحي</h2>
      <p>تناول الأطعمة الغنية بالألياف والفيتامينات، وتجنب الأطعمة المقلية والدهون المشبعة.</p>
      
      <h2>3. الإقلاع عن التدخين</h2>
      <p>التدخين من أخطر العوامل التي تؤثر على صحة القلب والأوعية الدموية.</p>
      
      <h2>4. التحكم في الوزن</h2>
      <p>الحفاظ على وزن صحي يقلل من الضغط على القلب ويحسن من وظائفه.</p>
      
      <h2>5. إدارة التوتر والضغط النفسي</h2>
      <p>التوتر المزمن يؤثر سلباً على صحة القلب، لذا من المهم تعلم تقنيات إدارة التوتر.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
    author: "د. أحمد محمد",
    category: "أمراض القلب",
    tags: ["صحة القلب", "الوقاية", "نصائح طبية", "نمط حياة صحي"],
    publishedAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
    isPublished: true,
    readingTime: 5,
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <BlogPost post={post} />

            <Suspense fallback={<div className="h-64 animate-pulse bg-white rounded-lg mt-8" />}>
              <RelatedPosts category={post.category} currentPostId={post.id} />
            </Suspense>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Suspense fallback={<div className="h-96 animate-pulse bg-white rounded-lg" />}>
              <BlogSidebar />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  return {
    title: `10 نصائح للحفاظ على صحة القلب | داوينا`,
    description: `تعرف على أهم النصائح الطبية للحفاظ على صحة قلبك وتجنب أمراض القلب والأوعية الدموية`,
  }
}
