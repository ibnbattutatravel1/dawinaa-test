import { apiClient } from "./client"
import type { Governorate, City } from "@/lib/types"

export async function getAllGovernorates(): Promise<Governorate[]> {
  const response = await apiClient.get<Governorate[]>("/locations/governorates")
  if (!response.success) {
    throw new Error(response.message || "فشل في جلب المحافظات")
  }
  return response.data
}

export async function getCitiesByGovernorate(governorateId: string): Promise<City[]> {
  const response = await apiClient.get<City[]>(`/locations/governorates/${governorateId}/cities`)
  if (!response.success) {
    throw new Error(response.message || "فشل في جلب المدن")
  }
  return response.data
}

export async function getGovernorateBySlug(slug: string): Promise<Governorate> {
  const response = await apiClient.get<Governorate>(`/locations/governorates/${slug}`)
  if (!response.success) {
    throw new Error(response.message || "لم يتم العثور على المحافظة")
  }
  return response.data
}
