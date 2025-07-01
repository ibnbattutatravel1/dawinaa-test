import { Suspense } from "react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { DoctorProfile } from "@/components/features/doctor-profile"
import { BookingSection } from "@/components/features/booking-section"
import { ReviewsSection } from "@/components/features/reviews-section"
import { RelatedDoctors } from "@/components/features/related-doctors"

interface DoctorPageProps {
  params: { slug: string }
}

export default async function DoctorPage({ params }: DoctorPageProps) {
  let doctor

  try {
    // في الواقع ستأتي من API
    doctor = {
      id: "1",
      slug: params.slug,
      name: "أحمد محمد علي",
      specialty: "باطنة",
      subSpecialty: "أمراض الجهاز الهضمي والكبد",
      image: "/placeholder.svg?height=400&width=400",
      rating: 4.8,
      reviewCount: 156,
      experience: 15,
      location: "القاهرة - مدينة نصر",
      address: "شارع عباس العقاد، برج الأطباء، الدور الخامس",
      phone: "01234567890",
      whatsapp: "01234567890",
      consultationFee: 300,
      about:
        "استشاري باطنة وأمراض الجهاز الهضمي والكبد، خبرة 15 سنة في تشخيص وعلاج أمراض الباطنة المختلفة. حاصل على الدكتوراه من جامعة القاهرة وعضو الجمعية المصرية لأمراض الجهاز الهضمي.",
      education: [
        "بكالوريوس الطب والجراحة - جامعة القاهرة 2008",
        "ماجستير الباطنة - جامعة القاهرة 2012",
        "دكتوراه أمراض الجهاز الهضمي - جامعة القاهرة 2016",
      ],
      languages: ["العربية", "الإنجليزية", "الفرنسية"],
      services: [
        "كشف عام باطنة",
        "منظار المعدة التشخيصي",
        "منظار القولون",
        "علاج قرح المعدة والاثني عشر",
        "علاج التهاب الكبد الوبائي",
        "علاج متلازمة القولون العصبي",
      ],
      workingHours: [
        { day: "السبت", isOpen: true, openTime: "10:00", closeTime: "14:00" },
        { day: "الأحد", isOpen: true, openTime: "10:00", closeTime: "14:00" },
        { day: "الاثنين", isOpen: true, openTime: "10:00", closeTime: "14:00" },
        { day: "الثلاثاء", isOpen: true, openTime: "10:00", closeTime: "14:00" },
        { day: "الأربعاء", isOpen: true, openTime: "10:00", closeTime: "14:00" },
        { day: "الخميس", isOpen: false, openTime: "", closeTime: "" },
        { day: "الجمعة", isOpen: false, openTime: "", closeTime: "" },
      ],
      isVerified: true,
      isAvailable: true,
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
    }
  } catch (error) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <DoctorProfile doctor={doctor} />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Suspense fallback={<div className="h-96 animate-pulse bg-white rounded-lg" />}>
              <ReviewsSection doctorId={doctor.id} />
            </Suspense>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <BookingSection doctor={doctor} />
            </div>
          </div>
        </div>

        <Suspense fallback={<div className="h-64 animate-pulse bg-white rounded-lg mt-8" />}>
          <RelatedDoctors specialty={doctor.specialty} currentDoctorId={doctor.id} />
        </Suspense>
      </div>
    </div>
  )
}

export async function generateMetadata({ params }: DoctorPageProps): Promise<Metadata> {
  // في الواقع ستأتي من API
  const doctorName = "د. أحمد محمد علي"
  const specialty = "استشاري باطنة"

  return {
    title: `${doctorName} - ${specialty} | داوينا`,
    description: `احجز موعد مع ${doctorName} ${specialty} في القاهرة. خبرة 15 سنة، تقييم 4.8 نجوم`,
    keywords: ["طبيب باطنة", "استشاري باطنة", "القاهرة", "حجز موعد"],
  }
}
