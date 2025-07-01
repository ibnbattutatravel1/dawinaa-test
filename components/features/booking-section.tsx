"use client"

import { useState } from "react"
import { Calendar, Phone, MessageSquare } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { formatPrice } from "@/lib/utils"
import type { Doctor } from "@/lib/types"

interface BookingSectionProps {
  doctor: Doctor
}

export function BookingSection({ doctor }: BookingSectionProps) {
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [patientName, setPatientName] = useState("")
  const [patientPhone, setPatientPhone] = useState("")
  const [notes, setNotes] = useState("")
  const [loading, setLoading] = useState(false)

  // Mock available dates and times
  const availableDates = [
    { date: "2024-01-20", label: "اليوم - السبت" },
    { date: "2024-01-21", label: "غداً - الأحد" },
    { date: "2024-01-22", label: "الاثنين" },
    { date: "2024-01-23", label: "الثلاثاء" },
  ]

  const availableTimes = ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30"]

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime || !patientName || !patientPhone) {
      alert("يرجى ملء جميع البيانات المطلوبة")
      return
    }

    setLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      alert("تم حجز الموعد بنجاح! سيتم التواصل معك قريباً")

      // Reset form
      setSelectedDate("")
      setSelectedTime("")
      setPatientName("")
      setPatientPhone("")
      setNotes("")
    } catch (error) {
      alert("حدث خطأ أثناء الحجز. يرجى المحاولة مرة أخرى")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card id="book" className="sticky top-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary-600" />
          احجز موعدك
        </CardTitle>
        <div className="flex items-center justify-between">
          <span className="text-sm text-neutral-600">سعر الكشف</span>
          <Badge variant="secondary" className="text-lg font-bold">
            {formatPrice(doctor.consultationFee)}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Date Selection */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">اختر التاريخ</label>
          <Select value={selectedDate} onValueChange={setSelectedDate}>
            <SelectTrigger>
              <SelectValue placeholder="اختر التاريخ" />
            </SelectTrigger>
            <SelectContent>
              {availableDates.map((date) => (
                <SelectItem key={date.date} value={date.date}>
                  {date.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Time Selection */}
        {selectedDate && (
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">اختر الوقت</label>
            <div className="grid grid-cols-2 gap-2">
              {availableTimes.map((time) => (
                <Button
                  key={time}
                  variant={selectedTime === time ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTime(time)}
                  className="text-sm"
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Patient Info */}
        {selectedTime && (
          <div className="space-y-4 pt-4 border-t border-neutral-200">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">اسم المريض</label>
              <Input
                type="text"
                placeholder="أدخل اسم المريض"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">رقم الهاتف</label>
              <Input
                type="tel"
                placeholder="01xxxxxxxxx"
                value={patientPhone}
                onChange={(e) => setPatientPhone(e.target.value)}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">ملاحظات (اختياري)</label>
              <textarea
                placeholder="أي ملاحظات أو أعراض تريد ذكرها..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                rows={3}
              />
            </div>
          </div>
        )}

        {/* Booking Summary */}
        {selectedDate && selectedTime && patientName && patientPhone && (
          <div className="bg-primary-50 p-4 rounded-lg">
            <h4 className="font-medium text-neutral-900 mb-2">ملخص الحجز:</h4>
            <div className="space-y-1 text-sm text-neutral-700">
              <div className="flex justify-between">
                <span>الطبيب:</span>
                <span>د. {doctor.name}</span>
              </div>
              <div className="flex justify-between">
                <span>التاريخ:</span>
                <span>{availableDates.find((d) => d.date === selectedDate)?.label}</span>
              </div>
              <div className="flex justify-between">
                <span>الوقت:</span>
                <span>{selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span>المريض:</span>
                <span>{patientName}</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>السعر:</span>
                <span>{formatPrice(doctor.consultationFee)}</span>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-2">
          <Button
            onClick={handleBooking}
            className="w-full"
            loading={loading}
            disabled={!selectedDate || !selectedTime || !patientName || !patientPhone}
          >
            <Calendar className="w-4 h-4 mr-2" />
            تأكيد الحجز
          </Button>

          {doctor.whatsapp && (
            <Button variant="outline" className="w-full bg-transparent">
              <MessageSquare className="w-4 h-4 mr-2" />
              تواصل عبر واتساب
            </Button>
          )}

          <Button variant="ghost" className="w-full">
            <Phone className="w-4 h-4 mr-2" />
            اتصال مباشر: {doctor.phone}
          </Button>
        </div>

        {/* Booking Note */}
        <div className="text-xs text-neutral-500 text-center pt-2 border-t border-neutral-200">
          سيتم التواصل معك لتأكيد الموعد خلال 30 دقيقة
        </div>
      </CardContent>
    </Card>
  )
}
