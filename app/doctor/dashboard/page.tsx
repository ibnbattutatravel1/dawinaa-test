import type { Metadata } from "next"
import { DoctorStats } from "@/components/features/doctor-stats"
import { DoctorAppointments } from "@/components/features/doctor-appointments"
import { DoctorProfileManagement } from "@/components/features/doctor-profile-management"
import { DoctorReviewsManagement } from "@/components/features/doctor-reviews-management"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, User, Star, BarChart3 } from "lucide-react"

export const metadata: Metadata = {
  title: "لوحة تحكم الطبيب - دوينا",
  description: "إدارة مواعيدك ومرضاك وملفك الشخصي",
}

export default function DoctorDashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">لوحة تحكم الطبيب</h1>
        <p className="text-gray-600 dark:text-gray-400">إدارة مواعيدك ومرضاك وملفك الشخصي من مكان واحد</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4" />
            نظرة عامة
          </TabsTrigger>
          <TabsTrigger value="appointments" className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            المواعيد
          </TabsTrigger>
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="w-4 h-4" />
            الملف الشخصي
          </TabsTrigger>
          <TabsTrigger value="reviews" className="flex items-center gap-2">
            <Star className="w-4 h-4" />
            التقييمات
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <DoctorStats />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>مواعيد اليوم</CardTitle>
              </CardHeader>
              <CardContent>
                <DoctorAppointments showTodayOnly />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>آخر التقييمات</CardTitle>
              </CardHeader>
              <CardContent>
                <DoctorReviewsManagement showRecentOnly />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="appointments">
          <Card>
            <CardHeader>
              <CardTitle>إدارة المواعيد</CardTitle>
            </CardHeader>
            <CardContent>
              <DoctorAppointments />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>إدارة الملف الشخصي</CardTitle>
            </CardHeader>
            <CardContent>
              <DoctorProfileManagement />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews">
          <Card>
            <CardHeader>
              <CardTitle>إدارة التقييمات</CardTitle>
            </CardHeader>
            <CardContent>
              <DoctorReviewsManagement />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
