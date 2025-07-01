import { apiClient } from "./client"
import type { Review, PaginatedResponse } from "@/lib/types"

export async function getDoctorReviews(doctorId: string, page = 1): Promise<PaginatedResponse<Review>> {
  const response = await apiClient.get<PaginatedResponse<Review>>(`/doctors/${doctorId}/reviews`, { page })
  if (!response.success) {
    throw new Error(response.message || "فشل في جلب التقييمات")
  }
  return response.data
}

export async function createReview(reviewData: {
  doctorId: string
  bookingReference: string
  patientName: string
  rating: number
  comment: string
}): Promise<Review> {
  const response = await apiClient.post<Review>("/reviews", reviewData)
  if (!response.success) {
    throw new Error(response.message || "فشل في إضافة التقييم")
  }
  return response.data
}

export async function getReviewByBooking(bookingReference: string): Promise<Review | null> {
  try {
    const response = await apiClient.get<Review>(`/reviews/booking/${bookingReference}`)
    return response.success ? response.data : null
  } catch {
    return null
  }
}
