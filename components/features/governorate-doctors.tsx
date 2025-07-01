import { DoctorCard } from "@/components/features/doctor-card"

interface GovernorateDoctorsProps {
  governorateId: string
}

export async function GovernorateDoctors({ governorateId }: GovernorateDoctorsProps) {
  // Mock doctors data
  const doctors = [
    {
      id: "1",
      slug: "ahmed-mohamed",
      name: "أحمد محمد",
      specialty: "باطنة",
      subSpecialty: "أمراض الجهاز الهضمي",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
      reviewCount: 156,
      experience: 15,
      location: "القاهرة - مدينة نصر",
      address: "شارع عباس العقاد",
      phone: "01234567890",
      consultationFee: 300,
      about: "استشاري باطنة وأمراض الجهاز الهضمي",
      education: ["بكالوريوس طب القاهرة"],
      languages: ["العربية", "الإنجليزية"],
      services: ["كشف عام"],
      workingHours: [],
      isVerified: true,
      isAvailable: true,
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
    },
    // Add more doctors...
  ]

  return (
    <section>
      <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">أفضل الأطباء ({doctors.length})</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </section>
  )
}
