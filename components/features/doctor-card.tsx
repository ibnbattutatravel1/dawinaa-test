import Image from "next/image"
import Link from "next/link"
import { Star, MapPin, Clock, Phone, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { formatPrice } from "@/lib/utils"
import type { Doctor } from "@/lib/types"

interface DoctorCardProps {
  doctor: Doctor
  showBookButton?: boolean
  className?: string
}

export function DoctorCard({ doctor, showBookButton = true, className }: DoctorCardProps) {
  return (
    <Card className={`overflow-hidden hover:scale-105 transition-transform duration-200 ${className}`}>
      <CardContent className="p-0">
        <div className="relative">
          <Image
            src={doctor.image || "/placeholder.svg?height=200&width=300"}
            alt={doctor.name}
            width={300}
            height={200}
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          {doctor.isVerified && (
            <Badge className="absolute top-3 right-3" variant="success">
              <CheckCircle className="w-3 h-3 mr-1" />
              موثق
            </Badge>
          )}
          {doctor.isAvailable && (
            <Badge className="absolute top-3 left-3" variant="default">
              متاح اليوم
            </Badge>
          )}
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="font-bold text-lg text-neutral-900 mb-1">دكتور {doctor.name}</h3>
              <p className="text-primary-600 font-medium">{doctor.specialty}</p>
              {doctor.subSpecialty && <p className="text-sm text-neutral-500">{doctor.subSpecialty}</p>}
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium text-sm">{doctor.rating}</span>
              <span className="text-xs text-neutral-500">({doctor.reviewCount})</span>
            </div>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <MapPin className="w-4 h-4" />
              <span>{doctor.location}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <Clock className="w-4 h-4" />
              <span>خبرة {doctor.experience} سنة</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <Phone className="w-4 h-4" />
              <span>سعر الكشف: {formatPrice(doctor.consultationFee)}</span>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent">
              <Link href={`/doctor/${doctor.slug}`}>عرض الملف</Link>
            </Button>

            {showBookButton && (
              <Button size="sm" asChild className="flex-1">
                <Link href={`/doctor/${doctor.slug}#book`}>احجز الآن</Link>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
