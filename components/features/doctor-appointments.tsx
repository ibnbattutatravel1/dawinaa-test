"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, Phone, MapPin, CheckCircle, XCircle, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface Appointment {
  id: string
  patientName: string
  patientPhone: string
  date: string
  time: string
  status: "confirmed" | "pending" | "cancelled" | "completed"
  type: "consultation" | "followup" | "emergency"
  notes?: string
  location: string
}

const mockAppointments: Appointment[] = [
  {
    id: "1",
    patientName: "أحمد محمد علي",
    patientPhone: "01234567890",
    date: new Date().toISOString(),
    time: "10:00",
    status: "confirmed",
    type: "consultation",
    notes: "فحص دوري",
    location: "العيادة الرئيسية",
  },
  {
    id: "2",
    patientName: "فاطمة حسن",
    patientPhone: "01234567891",
    date: new Date().toISOString(),
    time: "11:30",
    status: "pending",
    type: "followup",
    notes: "متابعة العلاج",
    location: "العيادة الرئيسية",
  },
  {
    id: "3",
    patientName: "محمد أحمد",
    patientPhone: "01234567892",
    date: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    time: "14:00",
    status: "confirmed",
    type: "consultation",
    location: "العيادة الفرعية",
  },
  {
    id: "4",
    patientName: "سارة علي",
    patientPhone: "01234567893",
    date: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    time: "16:30",
    status: "cancelled",
    type: "consultation",
    notes: "تم الإلغاء بطلب المريض",
    location: "العيادة الرئيسية",
  },
]

const getStatusColor = (status: Appointment["status"]) => {
  switch (status) {
    case "confirmed":
      return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
    case "pending":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
    case "cancelled":
      return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
    case "completed":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
  }
}

const getStatusIcon = (status: Appointment["status"]) => {
  switch (status) {
    case "confirmed":
      return <CheckCircle className="w-4 h-4" />
    case "pending":
      return <AlertCircle className="w-4 h-4" />
    case "cancelled":
      return <XCircle className="w-4 h-4" />
    case "completed":
      return <CheckCircle className="w-4 h-4" />
    default:
      return <Clock className="w-4 h-4" />
  }
}

const getStatusText = (status: Appointment["status"]) => {
  switch (status) {
    case "confirmed":
      return "مؤكد"
    case "pending":
      return "في الانتظار"
    case "cancelled":
      return "ملغي"
    case "completed":
      return "مكتمل"
    default:
      return "غير محدد"
  }
}

const getTypeText = (type: Appointment["type"]) => {
  switch (type) {
    case "consultation":
      return "استشارة"
    case "followup":
      return "متابعة"
    case "emergency":
      return "طوارئ"
    default:
      return "غير محدد"
  }
}

interface DoctorAppointmentsProps {
  showTodayOnly?: boolean
}

export function DoctorAppointments({ showTodayOnly = false }: DoctorAppointmentsProps) {
  const [appointments, setAppointments] = useState<Appointment[]>(mockAppointments)
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split("T")[0])

  const filteredAppointments = showTodayOnly
    ? appointments.filter((apt) => apt.date.split("T")[0] === new Date().toISOString().split("T")[0])
    : appointments.filter((apt) => apt.date.split("T")[0] === selectedDate)

  const updateAppointmentStatus = (id: string, status: Appointment["status"]) => {
    setAppointments((prev) => prev.map((apt) => (apt.id === id ? { ...apt, status } : apt)))
  }

  const todayAppointments = appointments.filter(
    (apt) => apt.date.split("T")[0] === new Date().toISOString().split("T")[0],
  )

  const stats = {
    total: todayAppointments.length,
    confirmed: todayAppointments.filter((apt) => apt.status === "confirmed").length,
    pending: todayAppointments.filter((apt) => apt.status === "pending").length,
    completed: todayAppointments.filter((apt) => apt.status === "completed").length,
  }

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm text-muted-foreground">إجمالي اليوم</p>
                <p className="text-2xl font-bold">{stats.total}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-sm text-muted-foreground">مؤكد</p>
                <p className="text-2xl font-bold">{stats.confirmed}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-yellow-600" />
              <div>
                <p className="text-sm text-muted-foreground">في الانتظار</p>
                <p className="text-2xl font-bold">{stats.pending}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm text-muted-foreground">مكتمل</p>
                <p className="text-2xl font-bold">{stats.completed}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Appointments List */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {showTodayOnly ? "مواعيد اليوم" : "جدول المواعيد"}
            </CardTitle>
            {!showTodayOnly && (
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="px-3 py-2 border border-border rounded-lg text-sm"
              />
            )}
          </div>
        </CardHeader>

        <CardContent>
          {filteredAppointments.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>لا توجد مواعيد في هذا التاريخ</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredAppointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="p-4 border border-border rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-muted-foreground" />
                          <span className="font-medium">{appointment.patientName}</span>
                        </div>
                        <Badge className={cn("text-xs", getStatusColor(appointment.status))}>
                          <span className="flex items-center gap-1">
                            {getStatusIcon(appointment.status)}
                            {getStatusText(appointment.status)}
                          </span>
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {getTypeText(appointment.type)}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{appointment.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          <span>{appointment.patientPhone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{appointment.location}</span>
                        </div>
                      </div>

                      {appointment.notes && (
                        <p className="text-sm text-muted-foreground mb-3">
                          <strong>ملاحظات:</strong> {appointment.notes}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-2 ml-4">
                      {appointment.status === "pending" && (
                        <>
                          <Button
                            size="sm"
                            onClick={() => updateAppointmentStatus(appointment.id, "confirmed")}
                            className="text-xs"
                          >
                            تأكيد
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => updateAppointmentStatus(appointment.id, "cancelled")}
                            className="text-xs"
                          >
                            إلغاء
                          </Button>
                        </>
                      )}
                      {appointment.status === "confirmed" && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateAppointmentStatus(appointment.id, "completed")}
                          className="text-xs"
                        >
                          إكمال
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
