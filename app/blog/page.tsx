import { Suspense } from "react"
import { BlogGrid } from "@/components/features/blog-grid"
import { BlogSidebar } from "@/components/features/blog-sidebar"

interface BlogPageProps {
  searchParams: {
    page?: string
    category?: string
    tag?: string
  }
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="bg-white border-b border-neutral-200 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">المدونة الطبية</h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            مقالات طبية موثوقة من أفضل الأطباء والمتخصصين في مختلف المجالات الطبية
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <Suspense fallback={<div className="h-96 animate-pulse bg-white rounded-lg" />}>
                <BlogGrid searchParams={searchParams} />
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
      </section>
    </div>
  )
}

export const metadata = {
  title: "المدونة الطبية | داوينا",
  description: "مقالات طبية موثوقة من أفضل الأطباء في مختلف التخصصات الطبية",
}
