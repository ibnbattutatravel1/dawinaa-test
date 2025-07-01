"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Stethoscope } from "lucide-react"
import { SPECIALTIES, GOVERNORATES } from "@/lib/constants/brand"

export function SearchForm() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [specialty, setSpecialty] = useState("all")
  const [location, setLocation] = useState("all")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    const params = new URLSearchParams()
    if (searchQuery) params.set("q", searchQuery)
    if (specialty !== "all") params.set("specialty", specialty)
    if (location !== "all") params.set("location", location)

    router.push(`/search?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSearch} className="bg-background rounded-2xl shadow-lg p-6 border">
      <div className="grid md:grid-cols-4 gap-4">
        <div className="relative">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="ابحث عن طبيب أو مستشفى..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pr-10"
          />
        </div>

        <Select value={specialty} onValueChange={setSpecialty}>
          <SelectTrigger>
            <div className="flex items-center gap-2">
              <Stethoscope className="h-4 w-4 text-muted-foreground" />
              <SelectValue placeholder="التخصص" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">جميع التخصصات</SelectItem>
            {SPECIALTIES.map((spec) => (
              <SelectItem key={spec.id} value={spec.id}>
                {spec.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={location} onValueChange={setLocation}>
          <SelectTrigger>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <SelectValue placeholder="المحافظة" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">جميع المحافظات</SelectItem>
            {GOVERNORATES.map((gov) => (
              <SelectItem key={gov.id} value={gov.id}>
                {gov.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button type="submit" size="lg" className="w-full">
          <Search className="ml-2 h-4 w-4" />
          بحث
        </Button>
      </div>
    </form>
  )
}
