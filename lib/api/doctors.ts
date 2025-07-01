import { apiClient } from "./client"
import type { Doctor, SearchFilters, PaginatedResponse } from "@/lib/types"

export async function searchDoctors(filters: SearchFilters): Promise<PaginatedResponse<Doctor>> {
  const response = await apiClient.get<PaginatedResponse<Doctor>>("/doctors/search", filters)

  if (!response.success) {
    throw new Error(response.message || "فشل في البحث عن الأطباء")
  }

  return response.data
}

export async function getDoctorBySlug(slug: string): Promise<Doctor> {
  const response = await apiClient.get<Doctor>(`/doctors/${slug}`)

  if (!response.success) {
    throw new Error(response.message || "لم يتم العثور على الطبيب")
  }

  return response.data
}

export async function getFeaturedDoctors(limit = 8): Promise<Doctor[]> {
  const response = await apiClient.get<Doctor[]>("/doctors/featured", { limit })

  if (!response.success) {
    throw new Error(response.message || "فشل في جلب الأطباء المميزين")
  }

  return response.data
}

export async function getDoctorsBySpecialty(specialty: string, limit = 10): Promise<Doctor[]> {
  const response = await apiClient.get<Doctor[]>("/doctors/by-specialty", {
    specialty,
    limit,
  })

  if (!response.success) {
    throw new Error(response.message || "فشل في جلب أطباء التخصص")
  }

  return response.data
}

export async function getDoctorAvailability(doctorId: string, date: string) {
  const response = await apiClient.get(`/doctors/${doctorId}/availability`, { date })

  if (!response.success) {
    throw new Error(response.message || "فشل في جلب مواعيد الطبيب")
  }

  return response.data
}

export async function getPopularSpecialties(): Promise<any[]> {
  const response = await apiClient.get("/specialties/popular")

  if (!response.success) {
    throw new Error(response.message || "فشل في جلب التخصصات الشائعة")
  }

  return response.data
}
