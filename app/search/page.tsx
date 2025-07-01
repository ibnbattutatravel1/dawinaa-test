import { Suspense } from "react"
import { SearchForm } from "@/components/features/search-form"
import { SearchResults } from "@/components/features/search-results"
import { SearchFilters } from "@/components/features/search-filters"

interface SearchPageProps {
  searchParams: {
    q?: string
    specialty?: string
    location?: string
    page?: string
  }
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Search Header */}
      <section className="bg-white border-b border-neutral-200 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">البحث عن الأطباء</h1>
          <SearchForm defaultValues={searchParams} />
        </div>
      </section>

      {/* Results Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <Suspense fallback={<div className="h-96 animate-pulse bg-white rounded-lg" />}>
                <SearchFilters />
              </Suspense>
            </div>

            {/* Results */}
            <div className="lg:col-span-3">
              <Suspense fallback={<div className="h-96 animate-pulse bg-white rounded-lg" />}>
                <SearchResults searchParams={searchParams} />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export const metadata = {
  title: "البحث عن الأطباء | داوينا",
  description: "ابحث عن أفضل الأطباء في مصر حسب التخصص والموقع",
}
