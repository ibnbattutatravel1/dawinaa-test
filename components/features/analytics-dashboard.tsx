"use client"

import { useState } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { TrendingUp, Users, Calendar, Star, Eye, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function AnalyticsDashboard() {
  const [timeRange, setTimeRange] = useState("7d")

  // Mock data
  const appointmentsData = [
    { name: "السبت", appointments: 12, revenue: 3600 },
    { name: "الأحد", appointments: 15, revenue: 4500 },
    { name: "الاثنين", appointments: 18, revenue: 5400 },
    { name: "الثلاثاء", appointments: 14, revenue: 4200 },
    { name: "الأربعاء", appointments: 16, revenue: 4800 },
    { name: "الخميس", appointments: 13, revenue: 3900 },
    { name: "الجمعة", appointments: 8, revenue: 2400 },
  ]

  const specialtyData = [
    { name: "باطنة", value: 35, color: "#D65E95" },
    { name: "أطفال", value: 25, color: "#9A42A8" },
    { name: "نساء وتوليد", value: 20, color: "#FF7A59" },
    { name: "عظام", value: 15, color: "#2A3E4E" },
    { name: "أخرى", value: 5, color: "#718096" },
  ]

  const patientSatisfactionData = [
    { month: "يناير", rating: 4.6 },
    { month: "فبراير", rating: 4.7 },
    { month: "مارس", rating: 4.8 },
    { month: "أبريل", rating: 4.9 },
    { month: "مايو", rating: 4.8 },
    { month: "يونيو", rating: 4.9 },
  ]

  const stats = [
    {
      title: "إجمالي المواعيد",
      value: "1,247",
      change: "+12%",
      changeType: "increase",
      icon: Calendar,
      color: "text-blue-600",
    },
    {
      title: "المرضى الجدد",
      value: "89",
      change: "+23%",
      changeType: "increase",
      icon: Users,
      color: "text-green-600",
    },
    {
      title: "متوسط التقييم",
      value: "4.8",
      change: "+0.2",
      changeType: "increase",
      icon: Star,
      color: "text-yellow-600",
    },
    {
      title: "الإيرادات",
      value: "45,000 ج.م",
      change: "+8%",
      changeType: "increase",
      icon: TrendingUp,
      color: "text-purple-600",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">التحليلات والإحصائيات</h2>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7d">آخر 7 أيام</SelectItem>
            <SelectItem value="30d">آخر 30 يوم</SelectItem>
            <SelectItem value="90d">آخر 3 شهور</SelectItem>
            <SelectItem value="1y">آخر سنة</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="dark:bg-neutral-800 dark:border-neutral-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">{stat.title}</p>
                  <p className="text-2xl font-bold text-neutral-900 dark:text-white">{stat.value}</p>
                  <p className={`text-sm ${stat.changeType === "increase" ? "text-green-600" : "text-red-600"}`}>
                    {stat.change} من الفترة السابقة
                  </p>
                </div>
                <div
                  className={`w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center`}
                >
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Appointments Chart */}
        <Card className="dark:bg-neutral-800 dark:border-neutral-700">
          <CardHeader>
            <CardTitle className="dark:text-white">المواعيد والإيرادات</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={appointmentsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="appointments" fill="#D65E95" name="المواعيد" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Specialty Distribution */}
        <Card className="dark:bg-neutral-800 dark:border-neutral-700">
          <CardHeader>
            <CardTitle className="dark:text-white">توزيع التخصصات</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={specialtyData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {specialtyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Patient Satisfaction */}
        <Card className="lg:col-span-2 dark:bg-neutral-800 dark:border-neutral-700">
          <CardHeader>
            <CardTitle className="dark:text-white">رضا المرضى</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={patientSatisfactionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[4, 5]} />
                <Tooltip />
                <Line type="monotone" dataKey="rating" stroke="#D65E95" strokeWidth={3} name="التقييم" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="dark:bg-neutral-800 dark:border-neutral-700">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Eye className="w-8 h-8 text-blue-600" />
              <div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">مشاهدات الملف</p>
                <p className="text-2xl font-bold text-neutral-900 dark:text-white">2,847</p>
                <p className="text-sm text-green-600">+15% هذا الشهر</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="dark:bg-neutral-800 dark:border-neutral-700">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-orange-600" />
              <div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">متوسط وقت الانتظار</p>
                <p className="text-2xl font-bold text-neutral-900 dark:text-white">12 دقيقة</p>
                <p className="text-sm text-green-600">-3 دقائق</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="dark:bg-neutral-800 dark:border-neutral-700">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-green-600" />
              <div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">معدل العودة</p>
                <p className="text-2xl font-bold text-neutral-900 dark:text-white">78%</p>
                <p className="text-sm text-green-600">+5% هذا الشهر</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
