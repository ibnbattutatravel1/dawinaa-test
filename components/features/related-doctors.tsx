import { DoctorCard } from "@/components/features/doctor-card"

interface RelatedDoctorsProps {
  specialty: string
  currentDoctorId: string
}

export async function RelatedDoctors({ specialty, currentDoctorId }: RelatedDoctorsProps) {
  // Mock related doctors - في الواقع ستأتي من API
  const relatedDoctors = [
    {
      id: "2",
      slug: "mohamed-hassan",
      name: "محمد حسن",
      specialty: "باطنة",
      subSpecialty: "أمراض القلب",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.7,
      reviewCount: 89,
      experience: 12,
      location: "القاهرة - المعادي",
      address: "شارع 9",
      phone: "01234567891",
      consultationFee: 250,
      about: "استشاري باطنة وأمراض القلب",
      education: ["بكالوريوس طب القاهرة"],
      languages: ["العربية", "الإنجليزية"],
      services: ["كشف عام"],
      workingHours: [],
      isVerified: true,
      isAvailable: true,
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
    },
    // Add more related doctors...
  ]

  if (relatedDoctors.length === 0) {
    return null
  }

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-neutral-900 mb-6">أطباء آخرون في تخصص {specialty}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedDoctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </section>
  )
}
