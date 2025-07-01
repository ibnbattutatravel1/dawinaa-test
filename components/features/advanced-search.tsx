"use client"

import { useState } from "react"
import { Search, Filter } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"

export function AdvancedSearch() {
  const [filters, setFilters] = useState({
    query: "",
    specialty: "",
    subSpecialty: "",
    governorate: "",
    city: "",
    gender: "",
    priceRange: [0, 1000],
    rating: 0,
    experience: 0,
    languages: [],
    availability: {
      today: false,
      tomorrow: false,
      thisWeek: false,
    },
    features: {
      verified: false,
      homeVisit: false,
      onlineConsultation: false,
      insurance: false,
    },
  })

  const specialties = [
    "باطنة",
    "أطفال",
    "نساء وتوليد",
    "عظام",
    "قلب وأوعية دموية",
    "جلدية",
    "عيون",
    "أنف وأذن وحنجرة",
    "أسنان",
    "نفسية",
  ]

  const governorates = [
    "القاهرة",
    "الجيزة",
    "الإسكندرية",
    "الدقهلية",
    "الشرقية",
    "القليوبية",
    "كفر الشيخ",
    "الغربية",
    "المنوفية",
    "البحيرة",
  ]

  const languages = ["العربية", "الإنجليزية", "الفرنسية", "الألمانية", "الإيطالية"]

  const handleLanguageChange = (language: string, checked: boolean) => {
    setFilters((prev) => ({
      ...prev,
      languages: checked ? [...prev.languages, language] : prev.languages.filter((l) => l !== language),
    }))
  }

  const handleAvailabilityChange = (key: string, checked: boolean) => {
    setFilters((prev) => ({
      ...prev,
      availability: {
        ...prev.availability,
        [key]: checked,
      },
    }))
  }

  const handleFeatureChange = (key: string, checked: boolean) => {
    setFilters((prev) => ({
      ...prev,
      features: {
        ...prev.features,
        [key]: checked,
      },
    }))
  }

  const clearFilters = () => {
    setFilters({
      query: "",
      specialty: "",
      subSpecialty: "",
      governorate: "",
      city: "",
      gender: "",
      priceRange: [0, 1000],
      rating: 0,
      experience: 0,
      languages: [],
      availability: {
        today: false,
        tomorrow: false,
        thisWeek: false,
      },
      features: {
        verified: false,
        homeVisit: false,
        onlineConsultation: false,
        insurance: false,
      },
    })
  }

  const getActiveFiltersCount = () => {
    let count = 0
    if (filters.query) count++
    if (filters.specialty) count++
    if (filters.governorate) count++
    if (filters.gender) count++
    if (filters.rating > 0) count++
    if (filters.experience > 0) count++
    if (filters.languages.length > 0) count++
    if (Object.values(filters.availability).some((v) => v)) count++
    if (Object.values(filters.features).some((v) => v)) count++
    return count
  }

  return (
    <Card className="dark:bg-neutral-800 dark:border-neutral-700">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 dark:text-white">
            <Filter className="w-5 h-5 text-primary-600" />
            البحث المتقدم
            {getActiveFiltersCount() > 0 && (
              <Badge variant="secondary" className="ml-2">
                {getActiveFiltersCount()} فلتر نشط
              </Badge>
            )}
          </CardTitle>
          <Button variant="outline" size="sm" onClick={clearFilters} className="bg-transparent">
            مسح الفلاتر
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Basic Search */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">البحث العام</label>
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="ابحث عن طبيب أو تخصص..."
              value={filters.query}
              onChange={(e) => setFilters({ ...filters, query: e.target.value })}
              className="pr-10"
            />
          </div>
        </div>

        {/* Specialty & Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">التخصص</label>
            <Select value={filters.specialty} onValueChange={(value) => setFilters({ ...filters, specialty: value })}>
              <SelectTrigger>
                <SelectValue placeholder="اختر التخصص" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع التخصصات</SelectItem>
                {specialties.map((specialty) => (
                  <SelectItem key={specialty} value={specialty}>
                    {specialty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">المحافظة</label>
            <Select
              value={filters.governorate}
              onValueChange={(value) => setFilters({ ...filters, governorate: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="اختر المحافظة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع المحافظات</SelectItem>
                {governorates.map((gov) => (
                  <SelectItem key={gov} value={gov}>
                    {gov}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Gender & Price Range */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">النوع</label>
            <Select value={filters.gender} onValueChange={(value) => setFilters({ ...filters, gender: value })}>
              <SelectTrigger>
                <SelectValue placeholder="اختر النوع" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">الكل</SelectItem>
                <SelectItem value="male">ذكر</SelectItem>
                <SelectItem value="female">أنثى</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              سعر الكشف (جنيه)
            </label>
            <div className="space-y-2">
              <Slider
                value={filters.priceRange}
                onValueChange={(value) => setFilters({ ...filters, priceRange: value })}
                max={1000}
                step={50}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-neutral-600 dark:text-neutral-400">
                <span>{filters.priceRange[0]} جنيه</span>
                <span>{filters.priceRange[1]} جنيه</span>
              </div>
            </div>
          </div>
        </div>

        {/* Rating & Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              التقييم الأدنى
            </label>
            <Select
              value={filters.rating.toString()}
              onValueChange={(value) => setFilters({ ...filters, rating: Number(value) })}
            >
              <SelectTrigger>
                <SelectValue placeholder="اختر التقييم" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">الكل</SelectItem>
                <SelectItem value="4">4+ نجوم</SelectItem>
                <SelectItem value="4.5">4.5+ نجوم</SelectItem>
                <SelectItem value="4.8">4.8+ نجوم</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              سنوات الخبرة الأدنى
            </label>
            <Select
              value={filters.experience.toString()}
              onValueChange={(value) => setFilters({ ...filters, experience: Number(value) })}
            >
              <SelectTrigger>
                <SelectValue placeholder="اختر الخبرة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">الكل</SelectItem>
                <SelectItem value="5">5+ سنوات</SelectItem>
                <SelectItem value="10">10+ سنوات</SelectItem>
                <SelectItem value="15">15+ سنوات</SelectItem>
                <SelectItem value="20">20+ سنوات</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Languages */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">اللغات</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {languages.map((language) => (
              <div key={language} className="flex items-center space-x-2">
                <Checkbox
                  id={language}
                  checked={filters.languages.includes(language)}
                  onCheckedChange={(checked) => handleLanguageChange(language, checked)}
                />
                <label htmlFor={language} className="text-sm text-neutral-700 dark:text-neutral-300">
                  {language}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">التوفر</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="today"
                checked={filters.availability.today}
                onCheckedChange={(checked) => handleAvailabilityChange("today", checked)}
              />
              <label htmlFor="today" className="text-sm text-neutral-700 dark:text-neutral-300">
                متاح اليوم
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="tomorrow"
                checked={filters.availability.tomorrow}
                onCheckedChange={(checked) => handleAvailabilityChange("tomorrow", checked)}
              />
              <label htmlFor="tomorrow" className="text-sm text-neutral-700 dark:text-neutral-300">
                متاح غداً
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="thisWeek"
                checked={filters.availability.thisWeek}
                onCheckedChange={(checked) => handleAvailabilityChange("thisWeek", checked)}
              />
              <label htmlFor="thisWeek" className="text-sm text-neutral-700 dark:text-neutral-300">
                متاح هذا الأسبوع
              </label>
            </div>
          </div>
        </div>

        {/* Features */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">ميزات إضافية</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="verified"
                checked={filters.features.verified}
                onCheckedChange={(checked) => handleFeatureChange("verified", checked)}
              />
              <label htmlFor="verified" className="text-sm text-neutral-700 dark:text-neutral-300">
                أطباء موثقون فقط
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="homeVisit"
                checked={filters.features.homeVisit}
                onCheckedChange={(checked) => handleFeatureChange("homeVisit", checked)}
              />
              <label htmlFor="homeVisit" className="text-sm text-neutral-700 dark:text-neutral-300">
                زيارات منزلية
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="onlineConsultation"
                checked={filters.features.onlineConsultation}
                onCheckedChange={(checked) => handleFeatureChange("onlineConsultation", checked)}
              />
              <label htmlFor="onlineConsultation" className="text-sm text-neutral-700 dark:text-neutral-300">
                استشارة أونلاين
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="insurance"
                checked={filters.features.insurance}
                onCheckedChange={(checked) => handleFeatureChange("insurance", checked)}
              />
              <label htmlFor="insurance" className="text-sm text-neutral-700 dark:text-neutral-300">
                يقبل التأمين
              </label>
            </div>
          </div>
        </div>

        {/* Search Button */}
        <div className="pt-4 border-t border-neutral-200 dark:border-neutral-600">
          <Button className="w-full" size="lg">
            <Search className="w-5 h-5 mr-2" />
            البحث بالفلاتر المحددة
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
