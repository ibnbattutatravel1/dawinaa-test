import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Clock, Star } from "lucide-react"
import type { Hospital } from "@/lib/types"

interface HospitalServicesProps {
  hospital: Hospital
}

export function HospitalServices({ hospital }: HospitalServicesProps) {
  return (
    <div className="space-y-6">
      {/* Contact Info */}
      <Card>
        <CardHeader>
          <CardTitle>معلومات الاتصال</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-primary-600" />
            <div>
              <p className="font-medium">الهاتف</p>
              <p className="text-neutral-600">{hospital.phone}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-primary-600" />
            <div>
              <p className="font-medium">العنوان</p>
              <p className="text-neutral-600">{hospital.address}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-primary-600" />
            <div>
              <p className="font-medium">مواعيد العمل</p>
              <p className="text-neutral-600">24 ساعة يومياً</p>
            </div>
          </div>

          <Button className="w-full">
            <Phone className="w-4 h-4 mr-2" />
            اتصل الآن
          </Button>
        </CardContent>
      </Card>

      {/* Rating Summary */}
      <Card>
        <CardHeader>
          <CardTitle>التقييم</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <div className="text-3xl font-bold text-neutral-900 mb-2">{hospital.rating}</div>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(hospital.rating) ? "fill-yellow-400 text-yellow-400" : "text-neutral-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-neutral-600">من {hospital.reviewCount} تقييم</p>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Services */}
      <Card className="border-red-200 bg-red-50">
        <CardHeader>
          <CardTitle className="text-red-700">خدمات الطوارئ</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-600 mb-4">قسم الطوارئ يعمل 24 ساعة لاستقبال الحالات العاجلة</p>
          <Button variant="destructive" className="w-full">
            <Phone className="w-4 h-4 mr-2" />
            طوارئ: {hospital.phone}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
