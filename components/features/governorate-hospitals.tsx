import { HospitalCard } from "@/components/features/hospital-card"

interface GovernorateHospitalsProps {
  governorateId: string
}

export async function GovernorateHospitals({ governorateId }: GovernorateHospitalsProps) {
  // Mock hospitals data
  const hospitals = [
    {
      id: "1",
      slug: "nile-hospital",
      name: "مستشفى النيل التخصصي",
      type: "hospital" as const,
      image: "/placeholder.svg?height=200&width=400",
      rating: 4.6,
      reviewCount: 234,
      location: "القاهرة - مدينة نصر",
      address: "شارع عباس العقاد",
      phone: "0227777777",
      services: ["طوارئ 24 ساعة", "عمليات جراحية"],
      doctors: [],
      isVerified: true,
    },
    // Add more hospitals...
  ]

  return (
    <section>
      <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">أفضل المستشفيات ({hospitals.length})</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hospitals.map((hospital) => (
          <HospitalCard key={hospital.id} hospital={hospital} />
        ))}
      </div>
    </section>
  )
}
