"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Star, TrendingUp, Clock, DollarSign } from "lucide-react"

interface StatCard {
  title: string
  value: string | number
  change: string
  changeType: "positive" | "negative" | "neutral"
  icon: React.ReactNode
  description: string
}

const stats: StatCard[] = [
  {
    title: "مواعيد اليوم",
    value: 12,
    change: "+2",
    changeType: "positive",
    icon: <Calendar className="w-5 h-5" />,
    description: "مقارنة بالأمس",
  },
  {
    title: "إجمالي المرضى",
    value: 1247,
    change: "+15%",
    changeType: "positive",
    icon: <Users className="w-5 h-5" />,
    description: "هذا الشهر",
  },
  {
    title: "التقييم العام",
    value: "4.8",
    change: "+0.2",
    changeType: "positive",
    icon: <Star className="w-5 h-5" />,
    description: "من 5 نجوم",
  },
  {
    title: "معدل الحضور",
    value: "92%",
    change: "+5%",
    changeType: "positive",
    icon: <TrendingUp className="w-5 h-5" />,
    description: "هذا الأسبوع",
  },
  {
    title: "متوسط وقت الانتظار",
    value: "15 دقيقة",
    change: "-3 دقائق",
    changeType: "positive",
    icon: <Clock className="w-5 h-5" />,
    description: "مقارنة بالأسبوع الماضي",
  },
  {
    title: "الإيرادات الشهرية",
    value: "45,000 جنيه",
    change: "+12%",
    changeType: "positive",
    icon: <DollarSign className="w-5 h-5" />,
    description: "مقارنة بالشهر الماضي",
  },
]

export function DoctorStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            <div className="p-2 bg-primary/10 rounded-lg text-primary">{stat.icon}</div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
              </div>
              <Badge
                variant={
                  stat.changeType === "positive"
                    ? "default"
                    : stat.changeType === "negative"
                      ? "destructive"
                      : "secondary"
                }
                className="text-xs"
              >
                {stat.change}
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
