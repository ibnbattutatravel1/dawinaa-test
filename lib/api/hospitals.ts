import { apiClient } from "./client"
import type { Hospital, SearchFilters, PaginatedResponse } from "@/lib/types"

export async function searchHospitals(filters: SearchFilters): Promise<PaginatedResponse<Hospital>> {
  const response = await apiClient.get<PaginatedResponse<Hospital>>("/hospitals/search", filters)
  if (!response.success) {
    throw new Error(response.message || "فشل في البحث عن المستشفيات")
  }
  return response.data
}

export async function getHospitalBySlug(slug: string): Promise<Hospital> {
  const response = await apiClient.get<Hospital>(`/hospitals/${slug}`)
  if (!response.success) {
    throw new Error(response.message || "لم يتم العثور على المستشفى")
  }
  return response.data
}

export async function getFeaturedHospitals(limit = 6): Promise<Hospital[]> {
  const response = await apiClient.get<Hospital[]>("/hospitals/featured", { limit })
  if (!response.success) {
    throw new Error(response.message || "فشل في جلب المستشفيات المميزة")
  }
  return response.data
}

export async function getHospitalsByLocation(location: string, limit = 10): Promise<Hospital[]> {
  const response = await apiClient.get<Hospital[]>("/hospitals/by-location", {
    location,
    limit,
  })
  if (!response.success) {
    throw new Error(response.message || "فشل في جلب مستشفيات المنطقة")
  }
  return response.data
}
