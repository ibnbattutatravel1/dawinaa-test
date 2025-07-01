"use client"

import { useState, useEffect } from "react"
import { Star, ThumbsUp, MessageCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { getRelativeTime } from "@/lib/utils"

interface ReviewsSectionProps {
  doctorId: string
}

interface Review {
  id: string
  patientName: string
  rating: number
  comment: string
  isVerified: boolean
  createdAt: string
  helpful: number
}

export function ReviewsSection({ doctorId }: ReviewsSectionProps) {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState("newest")

  // Mock reviews data
  const mockReviews: Review[] = [
    {
      id: "1",
      patientName: "أحمد محمود",
      rating: 5,
      comment:
        "دكتور ممتاز جداً، شرح لي حالتي بالتفصيل وكان صبور في الإجابة على جميع أسئلتي. العلاج كان فعال والمتابعة ممتازة. أنصح به بشدة.",
      isVerified: true,
      createdAt: "2024-01-15T10:30:00Z",
      helpful: 12,
    },
    {
      id: "2",
      patientName: "فاطمة علي",
      rating: 5,
      comment:
        "تجربة رائعة مع الدكتور أحمد. كان دقيق في التشخيص والعلاج فعال. العيادة نظيفة والموظفين محترمين. شكراً دكتور.",
      isVerified: true,
      createdAt: "2024-01-12T14:20:00Z",
      helpful: 8,
    },
    {
      id: "3",
      patientName: "محمد حسن",
      rating: 4,
      comment: "دكتور جيد ومتمكن من تخصصه. الوقت كان أطول من المتوقع لكن الكشف كان شامل. أنصح بالحجز المبكر.",
      isVerified: false,
      createdAt: "2024-01-10T09:15:00Z",
      helpful: 5,
    },
    {
      id: "4",
      patientName: "سارة أحمد",
      rating: 5,
      comment: "أفضل طبيب باطنة تعاملت معه. شخص حالتي بدقة وأعطاني العلاج المناسب. تحسنت حالتي كثيراً بعد المتابعة معه.",
      isVerified: true,
      createdAt: "2024-01-08T16:45:00Z",
      helpful: 15,
    },
  ]

  useEffect(() => {
    // Simulate API call
    setLoading(true)
    setTimeout(() => {
      setReviews(mockReviews)
      setLoading(false)
    }, 1000)
  }, [doctorId])

  const averageRating =
    reviews.length > 0 ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length : 0

  const ratingDistribution = [5, 4, 3, 2, 1].map((rating) => ({
    rating,
    count: reviews.filter((r) => r.rating === rating).length,
    percentage: reviews.length > 0 ? (reviews.filter((r) => r.rating === rating).length / reviews.length) * 100 : 0,
  }))

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="animate-pulse space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-24 bg-neutral-200 rounded" />
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star className="w-5 h-5 text-primary-600" />
          التقييمات والمراجعات ({reviews.length})
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Rating Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-neutral-50 rounded-lg">
          <div className="text-center">
            <div className="text-4xl font-bold text-neutral-900 mb-2">{averageRating.toFixed(1)}</div>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-neutral-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-neutral-600">من {reviews.length} تقييم</p>
          </div>

          <div className="space-y-2">
            {ratingDistribution.map(({ rating, count, percentage }) => (
              <div key={rating} className="flex items-center gap-2">
                <span className="text-sm w-8">{rating} ⭐</span>
                <div className="flex-1 bg-neutral-200 rounded-full h-2">
                  <div
                    className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-sm text-neutral-600 w-8">{count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sort Controls */}
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-neutral-900">جميع التقييمات</h3>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">الأحدث</SelectItem>
              <SelectItem value="oldest">الأقدم</SelectItem>
              <SelectItem value="highest">الأعلى تقييماً</SelectItem>
              <SelectItem value="lowest">الأقل تقييماً</SelectItem>
              <SelectItem value="helpful">الأكثر إفادة</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Reviews List */}
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="border border-neutral-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-medium">{review.patientName.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-neutral-900">{review.patientName}</h4>
                      {review.isVerified && (
                        <Badge variant="success" className="text-xs">
                          موثق
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-neutral-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-neutral-500">{getRelativeTime(review.createdAt)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-neutral-700 leading-relaxed mb-3">{review.comment}</p>

              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="text-neutral-500 hover:text-primary-600">
                  <ThumbsUp className="w-4 h-4 mr-1" />
                  مفيد ({review.helpful})
                </Button>
                <Button variant="ghost" size="sm" className="text-neutral-500 hover:text-primary-600">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  رد
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" className="bg-transparent">
            عرض المزيد من التقييمات
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
