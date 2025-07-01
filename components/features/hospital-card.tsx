import Image from "next/image"
import Link from "next/link"
import { Star, MapPin, Users, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Hospital } from "@/lib/types"

interface HospitalCardProps {
  hospital: Hospital
  className?: string
}

export function HospitalCard({ hospital, className }: HospitalCardProps) {
  const typeLabels = {
    hospital: "مستشفى",
    clinic: "عيادة",
    center: "مركز طبي",
  }

  return (
    <Card className={`overflow-hidden hover:scale-105 transition-transform duration-200 ${className}`}>
      <CardContent className="p-0">
        <div className="relative">
          <Image
            src={hospital.image || "/placeholder.svg?height=200&width=400"}
            alt={hospital.name}
            width={400}
            height={200}
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          {hospital.isVerified && (
            <Badge className="absolute top-3 right-3" variant="success">
              <CheckCircle className="w-3 h-3 mr-1" />
              موثق
            </Badge>
          )}
          <Badge className="absolute top-3 left-3" variant="secondary">
            {typeLabels[hospital.type]}
          </Badge>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="font-bold text-lg text-neutral-900 mb-1">{hospital.name}</h3>
              <p className="text-neutral-600">{typeLabels[hospital.type]}</p>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium text-sm">{hospital.rating}</span>
              <span className="text-xs text-neutral-500">({hospital.reviewCount})</span>
            </div>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <MapPin className="w-4 h-4" />
              <span>{hospital.location}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <Users className="w-4 h-4" />
              <span>{hospital.doctors.length} طبيب</span>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm text-neutral-600 mb-2">التخصصات:</p>
            <div className="flex flex-wrap gap-1">
              {hospital.services.slice(0, 3).map((service, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {service}
                </Badge>
              ))}
              {hospital.services.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{hospital.services.length - 3}
                </Badge>
              )}
            </div>
          </div>

          <Button asChild className="w-full">
            <Link href={`/hospital/${hospital.slug}`}>عرض التفاصيل</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
