import { Suspense } from "react"
import type { Metadata } from "next"
import { HospitalProfile } from "@/components/features/hospital-profile"
import { HospitalDoctors } from "@/components/features/hospital-doctors"
import { HospitalServices } from "@/components/features/hospital-services"

interface HospitalPageProps {
  params: { slug: string }
}

export default async function HospitalPage({ params }: HospitalPageProps) {
  // Mock hospital data
  const hospital = {
    id: "1",
    slug: params.slug,
    name: "مستشفى النيل التخصصي",
    type: "hospital" as const,
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.6,
    reviewCount: 234,
    location: "القاهرة - مدينة نصر",
    address: "شارع عباس العقاد، أمام سيتي ستارز",
    phone: "0227777777",
    services: [
      "طوارئ 24 ساعة",
      "عمليات جراحية",
      "أشعة وتحاليل",
      "عناية مركزة",
      "ولادة طبيعية وقيصرية",
      "منظار الجهاز الهضمي",
    ],
    doctors: [],
    isVerified: true,
    description:
      "مستشفى النيل التخصصي هو واحد من أرقى المستشفيات في القاهرة، يقدم خدمات طبية متميزة في جميع التخصصات مع أحدث الأجهزة والتقنيات الطبية.",
    facilities: [
      "غرف عمليات مجهزة بأحدث التقنيات",
      "وحدة عناية مركزة متطورة",
      "قسم طوارئ يعمل 24 ساعة",
      "مختبر تحاليل شامل",
      "قسم أشعة متكامل",
      "صيدلية داخلية",
    ],
    departments: [
      "الباطنة العامة",
      "الجراحة العامة",
      "أمراض النساء والتوليد",
      "طب الأطفال",
      "أمراض القلب",
      "العظام والمفاصل",
      "الجلدية والتناسلية",
      "العيون",
    ],
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <HospitalProfile hospital={hospital} />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Suspense fallback={<div className="h-96 animate-pulse bg-white rounded-lg" />}>
              <HospitalDoctors hospitalId={hospital.id} />
            </Suspense>
          </div>

          <div className="lg:col-span-1">
            <HospitalServices hospital={hospital} />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateMetadata({ params }: HospitalPageProps): Promise<Metadata> {
  return {
    title: `مستشفى النيل التخصصي | داوينا`,
    description: `مستشفى النيل التخصصي في القاهرة - خدمات طبية متميزة في جميع التخصصات`,
  }
}
