import Image from "next/image"
import { Star, MapPin, Clock, Phone, MessageCircle, CheckCircle, Award, Users, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { formatPrice, formatTime } from "@/lib/utils"
import type { Doctor } from "@/lib/types"

interface DoctorProfileProps {
  doctor: Doctor
}

export function DoctorProfile({ doctor }: DoctorProfileProps) {
  return (
    <section className="bg-white border-b border-neutral-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Doctor Image & Basic Info */}
          <div className="lg:col-span-1">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={doctor.image || "/placeholder.svg?height=400&width=400"}
                    alt={`د. ${doctor.name}`}
                    width={400}
                    height={400}
                    className="w-full h-80 object-cover"
                    priority
                  />
                  {doctor.isVerified && (
                    <Badge className="absolute top-4 right-4" variant="success">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      موثق
                    </Badge>
                  )}
                  {doctor.isAvailable && (
                    <Badge className="absolute top-4 left-4" variant="default">
                      متاح اليوم
                    </Badge>
                  )}
                </div>

                <div className="p-6">
                  <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-neutral-900 mb-2">د. {doctor.name}</h1>
                    <p className="text-primary-600 font-medium text-lg">{doctor.specialty}</p>
                    {doctor.subSpecialty && <p className="text-neutral-600">{doctor.subSpecialty}</p>}
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-bold text-lg">{doctor.rating}</span>
                      </div>
                      <span className="text-neutral-500">({doctor.reviewCount} تقييم)</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="flex items-center justify-center mb-1">
                          <Award className="w-5 h-5 text-primary-600 ml-1" />
                          <span className="font-bold text-lg">{doctor.experience}</span>
                        </div>
                        <p className="text-sm text-neutral-600">سنة خبرة</p>
                      </div>
                      <div>
                        <div className="flex items-center justify-center mb-1">
                          <Users className="w-5 h-5 text-secondary-600 ml-1" />
                          <span className="font-bold text-lg">{doctor.reviewCount}</span>
                        </div>
                        <p className="text-sm text-neutral-600">مريض</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-neutral-200">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-neutral-500" />
                        <span className="text-sm text-neutral-700">{doctor.location}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <Phone className="w-4 h-4 text-neutral-500" />
                        <span className="text-sm text-neutral-700">{doctor.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-neutral-500" />
                        <span className="text-sm font-medium text-primary-600">
                          سعر الكشف: {formatPrice(doctor.consultationFee)}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button className="flex-1" asChild>
                        <a href="#book">احجز الآن</a>
                      </Button>
                      {doctor.whatsapp && (
                        <Button variant="outline" size="icon">
                          <MessageCircle className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Doctor Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary-600" />
                  نبذة عن الطبيب
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-700 leading-relaxed">{doctor.about}</p>
              </CardContent>
            </Card>

            {/* Services */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary-600" />
                  الخدمات المتاحة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {doctor.services.map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-neutral-700">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary-600" />
                  المؤهلات العلمية
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {doctor.education.map((edu, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-neutral-700">{edu}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Working Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary-600" />
                  مواعيد العمل
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {doctor.workingHours.map((schedule, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                      <span className="font-medium text-neutral-900">{schedule.day}</span>
                      {schedule.isOpen ? (
                        <span className="text-green-600 font-medium">
                          {formatTime(schedule.openTime)} - {formatTime(schedule.closeTime)}
                        </span>
                      ) : (
                        <span className="text-red-500 font-medium">مغلق</span>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card>
              <CardHeader>
                <CardTitle>اللغات</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {doctor.languages.map((language, index) => (
                    <Badge key={index} variant="outline">
                      {language}
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
