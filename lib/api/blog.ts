import { apiClient } from "./client"
import type { BlogPost, PaginatedResponse } from "@/lib/types"

export async function getAllBlogPosts(page = 1, limit = 12): Promise<PaginatedResponse<BlogPost>> {
  const response = await apiClient.get<PaginatedResponse<BlogPost>>("/blog", { page, limit })
  if (!response.success) {
    throw new Error(response.message || "فشل في جلب المقالات")
  }
  return response.data
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost> {
  const response = await apiClient.get<BlogPost>(`/blog/${slug}`)
  if (!response.success) {
    throw new Error(response.message || "لم يتم العثور على المقال")
  }
  return response.data
}

export async function getBlogPostsByCategory(category: string, page = 1): Promise<PaginatedResponse<BlogPost>> {
  const response = await apiClient.get<PaginatedResponse<BlogPost>>(`/blog/category/${category}`, { page })
  if (!response.success) {
    throw new Error(response.message || "فشل في جلب مقالات القسم")
  }
  return response.data
}

export async function getBlogPostsByTag(tag: string, page = 1): Promise<PaginatedResponse<BlogPost>> {
  const response = await apiClient.get<PaginatedResponse<BlogPost>>(`/blog/tag/${tag}`, { page })
  if (!response.success) {
    throw new Error(response.message || "فشل في جلب مقالات التاج")
  }
  return response.data
}

export async function getFeaturedBlogPosts(limit = 6): Promise<BlogPost[]> {
  const response = await apiClient.get<BlogPost[]>("/blog/featured", { limit })
  if (!response.success) {
    throw new Error(response.message || "فشل في جلب المقالات المميزة")
  }
  return response.data
}
