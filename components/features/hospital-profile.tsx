import Image from "next/image"
import { Star, MapPin, Phone, Clock, CheckCircle, Award, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Hospital } from "@/lib/types"

interface HospitalProfileProps {
  hospital: Hospital & {
    description?: string
    facilities?: string[]
    departments?: string[]
  }
}

export function HospitalProfile({ hospital }: HospitalProfileProps) {
  const typeLabels = {
    hospital: "مستشفى",
    clinic: "عيادة",
    center: "مركز طبي",
  }

  return (
    <section className="bg-white border-b border-neutral-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Hospital Image */}
          <div className="lg:col-span-1">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={hospital.image || "/placeholder.svg?height=400&width=600"}
                    alt={hospital.name}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                    priority
                  />
                  {hospital.isVerified && (
                    <Badge className="absolute top-4 right-4" variant="success">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      موثق
                    </Badge>
                  )}
                  <Badge className="absolute top-4 left-4" variant="secondary">
                    {typeLabels[hospital.type]}
                  </Badge>
                </div>

                <div className="p-6">
                  <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-neutral-900 mb-2">{hospital.name}</h1>
                    <p className="text-primary-600 font-medium">{typeLabels[hospital.type]}</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-bold text-lg">{hospital.rating}</span>
                      </div>
                      <span className="text-neutral-500">({hospital.reviewCount} تقييم)</span>
                    </div>

                    <div className="pt-4 border-t border-neutral-200 space-y-3">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-neutral-500" />
                        <span className="text-sm text-neutral-700">{hospital.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-neutral-500" />
                        <span className="text-sm text-neutral-700">{hospital.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-neutral-500" />
                        <span className="text-sm text-neutral-700">24 ساعة</span>
                      </div>
                    </div>

                    <Button className="w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      اتصل الآن
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Hospital Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary-600" />
                  نبذة عن {typeLabels[hospital.type]}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-700 leading-relaxed">
                  {hospital.description || `${hospital.name} يقدم خدمات طبية متميزة في جميع التخصصات`}
                </p>
              </CardContent>
            </Card>

            {/* Departments */}
            {hospital.departments && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary-600" />
                    الأقسام الطبية
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {hospital.departments.map((dept, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-neutral-700">{dept}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Facilities */}
            {hospital.facilities && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary-600" />
                    المرافق والخدمات
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {hospital.facilities.map((facility, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-neutral-700">{facility}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Services */}
            <Card>
              <CardHeader>
                <CardTitle>الخدمات المتاحة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {hospital.services.map((service, index) => (
                    <Badge key={index} variant="outline">
                      {service}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
