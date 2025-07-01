"use client"

import type React from "react"

import { useState } from "react"
import { Eye, EyeOff, Mail, Lock, LogIn } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export function DoctorLoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate login
    await new Promise((resolve) => setTimeout(resolve, 1500))

    alert("تم تسجيل الدخول بنجاح! مرحباً بك في لوحة التحكم")
    setLoading(false)
  }

  return (
    <div className="max-w-md mx-auto">
      <Card className="dark:bg-neutral-800 dark:border-neutral-700">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl dark:text-white">دخول الأطباء</CardTitle>
          <p className="text-neutral-600 dark:text-neutral-300">ادخل إلى حسابك لإدارة عيادتك</p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                البريد الإلكتروني
              </label>
              <div className="relative">
                <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="doctor@example.com"
                  className="pr-10"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                كلمة المرور
              </label>
              <div className="relative">
                <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                <Input
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="••••••••"
                  className="pr-10 pl-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={formData.rememberMe}
                  onCheckedChange={(checked) => setFormData({ ...formData, rememberMe: checked })}
                />
                <label htmlFor="remember" className="text-sm text-neutral-700 dark:text-neutral-300">
                  تذكرني
                </label>
              </div>

              <Link href="/forgot-password" className="text-sm text-primary-600 hover:underline">
                نسيت كلمة المرور؟
              </Link>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full" loading={loading}>
              <LogIn className="w-4 h-4 mr-2" />
              تسجيل الدخول
            </Button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-neutral-200 dark:border-neutral-600" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-neutral-800 text-neutral-500">أو</span>
              </div>
            </div>

            {/* Register Link */}
            <div className="text-center">
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                ليس لديك حساب؟{" "}
                <Link href="/add-clinic" className="text-primary-600 hover:underline font-medium">
                  سجل عيادتك الآن
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Help Section */}
      <Card className="mt-6 dark:bg-neutral-800 dark:border-neutral-700">
        <CardContent className="p-6 text-center">
          <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">تحتاج مساعدة؟</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
            تواصل مع فريق الدعم الفني للحصول على المساعدة
          </p>
          <Button variant="outline" size="sm" className="bg-transparent">
            اتصل بالدعم الفني
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
