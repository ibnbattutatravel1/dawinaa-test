"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"

export function SearchFilters() {
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([])
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])

  const specialties = ["باطنة", "أطفال", "نساء وتوليد", "عظام", "قلب وأوعية دموية", "جلدية", "عيون", "أسنان"]

  const locations = ["القاهرة", "الجيزة", "الإسكندرية", "الدقهلية", "الشرقية"]

  return (
    <div className="space-y-6">
      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">سعر الكشف</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Slider value={priceRange} onValueChange={setPriceRange} max={1000} step={50} className="w-full" />
            <div className="flex justify-between text-sm text-neutral-600">
              <span>{priceRange[0]} جنيه</span>
              <span>{priceRange[1]} جنيه</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Specialties */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">التخصص</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {specialties.map((specialty) => (
              <div key={specialty} className="flex items-center space-x-2">
                <Checkbox
                  id={specialty}
                  checked={selectedSpecialties.includes(specialty)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedSpecialties([...selectedSpecialties, specialty])
                    } else {
                      setSelectedSpecialties(selectedSpecialties.filter((s) => s !== specialty))
                    }
                  }}
                />
                <label
                  htmlFor={specialty}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {specialty}
                </label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Locations */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">المحافظة</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {locations.map((location) => (
              <div key={location} className="flex items-center space-x-2">
                <Checkbox
                  id={location}
                  checked={selectedLocations.includes(location)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedLocations([...selectedLocations, location])
                    } else {
                      setSelectedLocations(selectedLocations.filter((l) => l !== location))
                    }
                  }}
                />
                <label
                  htmlFor={location}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {location}
                </label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Additional Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">فلاتر إضافية</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="verified" />
              <label htmlFor="verified" className="text-sm font-medium">
                أطباء موثقون فقط
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="available" />
              <label htmlFor="available" className="text-sm font-medium">
                متاح اليوم
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="high-rating" />
              <label htmlFor="high-rating" className="text-sm font-medium">
                تقييم 4+ نجوم
              </label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Clear Filters */}
      <Button variant="outline" className="w-full bg-transparent">
        مسح جميع الفلاتر
      </Button>
    </div>
  )
}
