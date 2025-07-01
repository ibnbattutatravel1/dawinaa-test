"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Star, User, MessageSquare, ThumbsUp, Flag, Reply } from "lucide-react"
import { cn, getRelativeTime } from "@/lib/utils"

interface Review {
  id: string
  patientName: string
  rating: number
  comment: string
  date: string
  helpful: number
  doctorReply?: string
  replyDate?: string
  verified: boolean
  category: "service" | "punctuality" | "cleanliness" | "communication"
}

const mockReviews: Review[] = [
  {
    id: "1",
    patientName: "أحمد محمد",
    rating: 5,
    comment: "طبيب ممتاز جداً، شرح مفصل للحالة وعلاج فعال. أنصح بزيارته بشدة.",
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    helpful: 12,
    verified: true,
    category: "service",
    doctorReply: "شكراً لك على كلماتك الطيبة. أتمنى لك دوام الصحة والعافية.",
    replyDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "2",
    patientName: "فاطمة علي",
    rating: 4,
    comment: "دكتور محترم ومتفهم، لكن وقت الانتظار كان طويل نسبياً.",
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    helpful: 8,
    verified: true,
    category: "punctuality",
  },
  {
    id: "3",
    patientName: "محمد حسن",
    rating: 5,
    comment: "تشخيص دقيق وعلاج ناجح. العيادة نظيفة والموظفون متعاونون.",
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    helpful: 15,
    verified: true,
    category: "cleanliness",
  },
  {
    id: "4",
    patientName: "سارة أحمد",
    rating: 3,
    comment: "الطبيب جيد لكن التواصل يحتاج تحسين. لم يشرح الحالة بالتفصيل الكافي.",
    date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    helpful: 5,
    verified: true,
    category: "communication",
  },
]

const getRatingColor = (rating: number) => {
  if (rating >= 4) return "text-green-600"
  if (rating >= 3) return "text-yellow-600"
  return "text-red-600"
}

const getCategoryText = (category: Review["category"]) => {
  switch (category) {
    case "service":
      return "جودة الخدمة"
    case "punctuality":
      return "الالتزام بالمواعيد"
    case "cleanliness":
      return "النظافة"
    case "communication":
      return "التواصل"
    default:
      return "عام"
  }
}

const getCategoryColor = (category: Review["category"]) => {
  switch (category) {
    case "service":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
    case "punctuality":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400"
    case "cleanliness":
      return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
    case "communication":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
  }
}

interface DoctorReviewsManagementProps {
  showRecentOnly?: boolean
}

export function DoctorReviewsManagement({ showRecentOnly = false }: DoctorReviewsManagementProps) {
  const [reviews, setReviews] = useState<Review[]>(mockReviews)
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [replyText, setReplyText] = useState("")

  const displayedReviews = showRecentOnly ? reviews.slice(0, 3) : reviews

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  const ratingDistribution = {
    5: reviews.filter((r) => r.rating === 5).length,
    4: reviews.filter((r) => r.rating === 4).length,
    3: reviews.filter((r) => r.rating === 3).length,
    2: reviews.filter((r) => r.rating === 2).length,
    1: reviews.filter((r) => r.rating === 1).length,
  }

  const handleReply = (reviewId: string) => {
    if (replyText.trim()) {
      setReviews((prev) =>
        prev.map((review) =>
          review.id === reviewId
            ? {
                ...review,
                doctorReply: replyText,
                replyDate: new Date().toISOString(),
              }
            : review,
        ),
      )
      setReplyText("")
      setReplyingTo(null)
    }
  }

  const markHelpful = (reviewId: string) => {
    setReviews((prev) =>
      prev.map((review) => (review.id === reviewId ? { ...review, helpful: review.helpful + 1 } : review)),
    )
  }

  return (
    <div className="space-y-6">
      {/* Reviews Summary */}
      {!showRecentOnly && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              ملخص التقييمات
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Average Rating */}
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{averageRating.toFixed(1)}</div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={cn(
                        "w-5 h-5",
                        star <= averageRating ? "text-yellow-400 fill-current" : "text-gray-300",
                      )}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">من {reviews.length} تقييم</p>
              </div>

              {/* Rating Distribution */}
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center gap-2">
                    <span className="text-sm w-8">{rating} ⭐</span>
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{
                          width: `${(ratingDistribution[rating as keyof typeof ratingDistribution] / reviews.length) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground w-8">
                      {ratingDistribution[rating as keyof typeof ratingDistribution]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Reviews List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            {showRecentOnly ? "آخر التقييمات" : "جميع التقييمات"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {displayedReviews.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>لا توجد تقييمات بعد</p>
            </div>
          ) : (
            <div className="space-y-6">
              {displayedReviews.map((review) => (
                <div key={review.id} className="border border-border rounded-lg p-4">
                  {/* Review Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{review.patientName}</span>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs">
                              موثق
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={cn(
                                "w-4 h-4",
                                star <= review.rating ? "text-yellow-400 fill-current" : "text-gray-300",
                              )}
                            />
                          ))}
                          <span className={cn("text-sm font-medium ml-2", getRatingColor(review.rating))}>
                            {review.rating}/5
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className={cn("text-xs mb-2", getCategoryColor(review.category))}>
                        {getCategoryText(review.category)}
                      </Badge>
                      <p className="text-xs text-muted-foreground">{getRelativeTime(review.date)}</p>
                    </div>
                  </div>

                  {/* Review Content */}
                  <p className="text-muted-foreground mb-4">{review.comment}</p>

                  {/* Review Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm" onClick={() => markHelpful(review.id)} className="text-xs">
                        <ThumbsUp className="w-4 h-4 ml-1" />
                        مفيد ({review.helpful})
                      </Button>
                      <Button variant="ghost" size="sm" className="text-xs">
                        <Flag className="w-4 h-4 ml-1" />
                        إبلاغ
                      </Button>
                    </div>
                    {!review.doctorReply && (
                      <Button variant="outline" size="sm" onClick={() => setReplyingTo(review.id)} className="text-xs">
                        <Reply className="w-4 h-4 ml-1" />
                        رد
                      </Button>
                    )}
                  </div>

                  {/* Doctor Reply */}
                  {review.doctorReply && (
                    <div className="mt-4 p-3 bg-muted/50 rounded-lg border-r-4 border-primary">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <User className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm font-medium">رد الطبيب</span>
                        <span className="text-xs text-muted-foreground">
                          {review.replyDate && getRelativeTime(review.replyDate)}
                        </span>
                      </div>
                      <p className="text-sm">{review.doctorReply}</p>
                    </div>
                  )}

                  {/* Reply Form */}
                  {replyingTo === review.id && (
                    <div className="mt-4 space-y-3">
                      <Textarea
                        placeholder="اكتب ردك هنا..."
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        rows={3}
                      />
                      <div className="flex items-center gap-2">
                        <Button size="sm" onClick={() => handleReply(review.id)} disabled={!replyText.trim()}>
                          إرسال الرد
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setReplyingTo(null)
                            setReplyText("")
                          }}
                        >
                          إلغاء
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
