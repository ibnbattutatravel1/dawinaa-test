"use client"

import { useState, useEffect } from "react"
import { Grid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DoctorCard } from "@/components/features/doctor-card"
import { Pagination } from "@/components/ui/pagination"

interface SearchResultsProps {
  searchParams: {
    q?: string
    specialty?: string
    location?: string
    page?: string
  }
}

export function SearchResults({ searchParams }: SearchResultsProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("rating")
  const [doctors, setDoctors] = useState([])
  const [loading, setLoading] = useState(true)
  const [totalPages, setTotalPages] = useState(1)

  // Mock data - في الواقع ستأتي من API
  const mockDoctors = [
    {
      id: "1",
      slug: "ahmed-mohamed",
      name: "أحمد محمد",
      specialty: "باطنة",
      subSpecialty: "أمراض الجهاز الهضمي",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
      reviewCount: 156,
      experience: 15,
      location: "القاهرة - مدينة نصر",
      address: "شارع عباس العقاد",
      phone: "01234567890",
      consultationFee: 300,
      about: "استشاري باطنة وأمراض الجهاز الهضمي",
      education: ["بكالوريوس طب القاهرة", "ماجستير باطنة"],
      languages: ["العربية", "الإنجليزية"],
      services: ["كشف عام", "منظار معدة"],
      workingHours: [],
      isVerified: true,
      isAvailable: true,
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
    },
    // Add more mock doctors...
  ]

  useEffect(() => {
    // Simulate API call
    setLoading(true)
    setTimeout(() => {
      setDoctors(mockDoctors)
      setLoading(false)
    }, 1000)
  }, [searchParams])

  if (loading) {
    return (
      <div className="space-y-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-64 bg-white rounded-lg animate-pulse" />
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="bg-white rounded-lg p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-neutral-900">نتائج البحث ({doctors.length} طبيب)</h2>
            {searchParams.q && <p className="text-neutral-600">نتائج البحث عن: "{searchParams.q}"</p>}
          </div>

          <div className="flex items-center gap-4">
            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="ترتيب حسب" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">الأعلى تقييماً</SelectItem>
                <SelectItem value="experience">الأكثر خبرة</SelectItem>
                <SelectItem value="price_low">الأقل سعراً</SelectItem>
                <SelectItem value="price_high">الأعلى سعراً</SelectItem>
              </SelectContent>
            </Select>

            {/* View Mode */}
            <div className="flex border border-neutral-200 rounded-lg">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-r-none"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-l-none"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Grid */}
      <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-4"}>
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
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
