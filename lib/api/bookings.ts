import { apiClient } from "./client"
import type { Booking } from "@/lib/types"

export async function createBooking(bookingData: {
  doctorId: string
  patientName: string
  patientPhone: string
  appointmentDate: string
  appointmentTime: string
  notes?: string
}): Promise<Booking> {
  const response = await apiClient.post<Booking>("/bookings", bookingData)
  if (!response.success) {
    throw new Error(response.message || "فشل في إنشاء الحجز")
  }
  return response.data
}

export async function getBookingByReference(reference: string): Promise<Booking> {
  const response = await apiClient.get<Booking>(`/bookings/${reference}`)
  if (!response.success) {
    throw new Error(response.message || "لم يتم العثور على الحجز")
  }
  return response.data
}

export async function updateBooking(
  reference: string,
  updateData: {
    appointmentDate?: string
    appointmentTime?: string
    status?: "confirmed" | "cancelled"
    notes?: string
  },
): Promise<Booking> {
  const response = await apiClient.put<Booking>(`/bookings/${reference}`, updateData)
  if (!response.success) {
    throw new Error(response.message || "فشل في تحديث الحجز")
  }
  return response.data
}

export async function cancelBooking(reference: string): Promise<void> {
  const response = await apiClient.delete(`/bookings/${reference}`)
  if (!response.success) {
    throw new Error(response.message || "فشل في إلغاء الحجز")
  }
}
