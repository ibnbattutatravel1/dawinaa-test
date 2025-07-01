"use client"

import React from "react"

import { useState } from "react"
import { Search, Calendar, Clock, User, Phone, MapPin, CheckCircle, XCircle, AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/lib/utils"

export function BookingManager() {
  const [searchQuery, setSearchQuery] = useState("")
  const [booking, setBooking] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      alert("يرجى إدخال رقم الحجز أو رقم الهاتف")
      return
    }

    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Mock booking data
    const mockBooking = {
      id: "DW-2024-ABC123",
      bookingNumber: "DW-2024-ABC123",
      doctorName: "د. أحمد محمد علي",
      doctorSpecialty: "استشاري باطنة",
      doctorImage: "/placeholder.svg?height=100&width=100",
      patientName: "محمد أحمد",
      patientPhone: "01234567890",
      appointmentDate: "2024-01-25",
      appointmentTime: "10:30",
      status: "confirmed",
      location: "القاهرة - مدينة نصر",
      address: "شارع عباس العقاد، برج الأطباء، الدور الخامس",
      consultationFee: 300,
      notes: "كشف دوري للمتابعة",
      createdAt: "2024-01-20T14:30:00Z",
    }

    setBooking(mockBooking)
    setLoading(false)
  }

  const getStatusInfo = (status: string) => {
    switch (status) {
      case "confirmed":
        return {
          label: "مؤكد",
          color: "success",
          icon: CheckCircle,
        }
      case "pending":
        return {
          label: "في الانتظار",
          color: "warning",
          icon: AlertCircle,
        }
      case "cancelled":
        return {
          label: "ملغي",
          color: "destructive",
          icon: XCircle,
        }
      default:
        return {
          label: "غير معروف",
          color: "secondary",
          icon: AlertCircle,
        }
    }
  }

  const handleCancelBooking = async () => {
    if (!confirm("هل أنت متأكد من إلغاء الحجز؟")) return

    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setBooking({ ...booking, status: "cancelled" })
    setLoading(false)
    alert("تم إلغاء الحجز بنجاح")
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Search Section */}
      <Card className="dark:bg-neutral-800 dark:border-neutral-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 dark:text-white">
            <Search className="w-5 h-5 text-primary-600" />
            البحث عن الحجز
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Input
              type="text"
              placeholder="أدخل رقم الحجز أو رقم الهاتف..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            />
            <Button onClick={handleSearch} loading={loading}>
              <Search className="w-4 h-4 mr-2" />
              بحث
            </Button>
          </div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
            يمكنك البحث باستخدام رقم الحجز أو رقم الهاتف المسجل
          </p>
        </CardContent>
      </Card>

      {/* Booking Details */}
      {booking && (
        <Card className="dark:bg-neutral-800 dark:border-neutral-700">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="dark:text-white">تفاصيل الحجز</CardTitle>
              <Badge variant={getStatusInfo(booking.status).color}>
                {React.createElement(getStatusInfo(booking.status).icon, {
                  className: "w-3 h-3 mr-1",
                })}
                {getStatusInfo(booking.status).label}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Booking Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">معلومات الحجز</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-neutral-500" />
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">
                        رقم الحجز: {booking.bookingNumber}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-neutral-500" />
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">
                        المريض: {booking.patientName}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-neutral-500" />
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">
                        الهاتف: {booking.patientPhone}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">موعد الزيارة</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-neutral-500" />
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">
                        التاريخ: {formatDate(booking.appointmentDate)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-neutral-500" />
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">
                        الوقت: {booking.appointmentTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">معلومات الطبيب</h3>
                  <div className="flex items-start gap-3">
                    <img
                      src={booking.doctorImage || "/placeholder.svg"}
                      alt={booking.doctorName}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-medium text-neutral-900 dark:text-white">{booking.doctorName}</h4>
                      <p className="text-sm text-primary-600">{booking.doctorSpecialty}</p>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3 h-3 text-neutral-500" />
                          <span className="text-xs text-neutral-600 dark:text-neutral-400">{booking.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">العنوان</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{booking.address}</p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="border-t border-neutral-200 dark:border-neutral-600 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">سعر الكشف</h3>
                  <p className="text-lg font-bold text-primary-600">{booking.consultationFee} جنيه</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">يُدفع في العيادة</p>
                </div>

                {booking.notes && (
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">ملاحظات</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">{booking.notes}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            {booking.status === "confirmed" && (
              <div className="border-t border-neutral-200 dark:border-neutral-600 pt-4">
                <div className="flex gap-4">
                  <Button variant="outline" className="bg-transparent">
                    <Phone className="w-4 h-4 mr-2" />
                    اتصال بالعيادة
                  </Button>
                  <Button variant="destructive" onClick={handleCancelBooking} loading={loading}>
                    <XCircle className="w-4 h-4 mr-2" />
                    إلغاء الحجز
                  </Button>
                </div>
              </div>
            )}

            {/* Booking Date */}
            <div className="text-center pt-4 border-t border-neutral-200 dark:border-neutral-600">
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                تم الحجز في: {formatDate(booking.createdAt)}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Help Section */}
      <Card className="dark:bg-neutral-800 dark:border-neutral-700">
        <CardHeader>
          <CardTitle className="dark:text-white">تحتاج مساعدة؟</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-neutral-900 dark:text-white mb-2">خدمة العملاء</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                تواصل معنا للحصول على المساعدة في إدارة حجزك
              </p>
              <Button variant="outline" size="sm" className="bg-transparent">
                <Phone className="w-4 h-4 mr-2" />
                16676
              </Button>
            </div>

            <div>
              <h3 className="font-medium text-neutral-900 dark:text-white mb-2">الأسئلة الشائعة</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                تعرف على إجابات أكثر الأسئلة شيوعاً حول الحجوزات
              </p>
              <Button variant="outline" size="sm" className="bg-transparent">
                عرض الأسئلة الشائعة
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
