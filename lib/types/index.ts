export interface Doctor {
  id: string
  slug: string
  name: string
  specialty: string
  specialtyId: string
  experience: number
  rating: number
  reviewsCount: number
  consultationFee: number
  image: string
  bio: string
  qualifications: string[]
  languages: string[]
  workingHours: WorkingHours[]
  location: Location
  hospital?: Hospital
  isVerified: boolean
  isAvailable: boolean
  nextAvailableSlot?: string
  services: string[]
  insuranceAccepted: string[]
  createdAt: string
  updatedAt: string
}

export interface Hospital {
  id: string
  slug: string
  name: string
  type: "hospital" | "clinic" | "medical-center"
  image: string
  images: string[]
  description: string
  rating: number
  reviewsCount: number
  location: Location
  phone: string
  email: string
  website?: string
  services: string[]
  specialties: string[]
  facilities: string[]
  workingHours: WorkingHours[]
  emergencyAvailable: boolean
  insuranceAccepted: string[]
  doctors: Doctor[]
  createdAt: string
  updatedAt: string
}

export interface Location {
  governorate: string
  governorateId: string
  city: string
  area: string
  address: string
  coordinates?: {
    lat: number
    lng: number
  }
}

export interface WorkingHours {
  day: string
  dayId: number
  isOpen: boolean
  openTime: string
  closeTime: string
  breakTime?: {
    start: string
    end: string
  }
}

export interface Booking {
  id: string
  bookingNumber: string
  patientId: string
  doctorId: string
  hospitalId?: string
  appointmentDate: string
  appointmentTime: string
  status: "pending" | "confirmed" | "cancelled" | "completed" | "no-show"
  type: "consultation" | "followup" | "emergency"
  consultationFee: number
  paymentStatus: "pending" | "paid" | "refunded"
  paymentMethod?: string
  notes?: string
  symptoms?: string
  isFirstVisit: boolean
  reminderSent: boolean
  createdAt: string
  updatedAt: string
  patient: Patient
  doctor: Doctor
  hospital?: Hospital
}

export interface Patient {
  id: string
  name: string
  email: string
  phone: string
  dateOfBirth: string
  gender: "male" | "female"
  bloodType?: string
  allergies?: string[]
  chronicDiseases?: string[]
  emergencyContact?: {
    name: string
    phone: string
    relation: string
  }
  insurance?: {
    provider: string
    policyNumber: string
  }
  createdAt: string
  updatedAt: string
}

export interface Review {
  id: string
  patientId: string
  doctorId: string
  hospitalId?: string
  bookingId: string
  rating: number
  comment: string
  pros?: string[]
  cons?: string[]
  wouldRecommend: boolean
  isVerified: boolean
  isAnonymous: boolean
  helpfulCount: number
  reportCount: number
  doctorReply?: {
    message: string
    repliedAt: string
  }
  createdAt: string
  updatedAt: string
  patient: Patient
  doctor: Doctor
  hospital?: Hospital
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  featuredImage: string
  images: string[]
  author: {
    id: string
    name: string
    avatar: string
    bio: string
    specialization?: string
  }
  category: string
  categoryId: string
  tags: string[]
  readingTime: number
  viewsCount: number
  likesCount: number
  commentsCount: number
  isPublished: boolean
  isFeatured: boolean
  publishedAt: string
  createdAt: string
  updatedAt: string
  seo: {
    metaTitle: string
    metaDescription: string
    keywords: string[]
    canonicalUrl?: string
  }
}

export interface SearchFilters {
  specialty?: string
  governorate?: string
  city?: string
  gender?: "male" | "female"
  rating?: number
  experience?: number
  consultationFee?: {
    min: number
    max: number
  }
  availability?: "today" | "tomorrow" | "this-week"
  insuranceAccepted?: string[]
  languages?: string[]
  hospitalType?: "hospital" | "clinic" | "medical-center"
  services?: string[]
  sortBy?: "rating" | "experience" | "price-low" | "price-high" | "nearest"
}

export interface SearchResults<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  message?: string
  errors?: string[]
  meta?: {
    total: number
    page: number
    limit: number
    totalPages: number
  }
}

export interface Notification {
  id: string
  userId: string
  type: "booking" | "reminder" | "promotion" | "system" | "review"
  title: string
  message: string
  data?: Record<string, any>
  isRead: boolean
  isImportant: boolean
  expiresAt?: string
  createdAt: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
  order: number
  isPublished: boolean
  viewsCount: number
  helpfulCount: number
  createdAt: string
  updatedAt: string
}

export interface ContactMessage {
  id: string
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  type: "general" | "support" | "complaint" | "suggestion"
  status: "pending" | "in-progress" | "resolved" | "closed"
  priority: "low" | "medium" | "high" | "urgent"
  assignedTo?: string
  response?: string
  respondedAt?: string
  createdAt: string
  updatedAt: string
}
