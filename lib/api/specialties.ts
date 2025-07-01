import { apiClient } from "./client"
import type { Specialty } from "@/lib/types"

export async function getAllSpecialties(): Promise<Specialty[]> {
  const response = await apiClient.get<Specialty[]>("/specialties")
  if (!response.success) {
    throw new Error(response.message || "فشل في جلب التخصصات")
  }
  return response.data
}

export async function getPopularSpecialties(limit = 12): Promise<Specialty[]> {
  const response = await apiClient.get<Specialty[]>("/specialties/popular", { limit })
  if (!response.success) {
    throw new Error(response.message || "فشل في جلب التخصصات الشائعة")
  }
  return response.data
}

export async function getSpecialtyBySlug(slug: string): Promise<Specialty> {
  const response = await apiClient.get<Specialty>(`/specialties/${slug}`)
  if (!response.success) {
    throw new Error(response.message || "لم يتم العثور على التخصص")
  }
  return response.data
}
