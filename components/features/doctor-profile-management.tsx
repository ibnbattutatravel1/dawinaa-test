"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { User, Edit, Save, X, Plus, MapPin, Phone, Mail, Clock } from "lucide-react"

interface DoctorProfile {
  id: string
  name: string
  specialty: string
  bio: string
  experience: number
  education: string[]
  languages: string[]
  consultationFee: number
  location: string
  phone: string
  email: string
  workingHours: {
    [key: string]: { start: string; end: string; available: boolean }
  }
  services: string[]
}

const mockProfile: DoctorProfile = {
  id: "1",
  name: "د. أحمد محمد علي",
  specialty: "طب الباطنة",
  bio: "طبيب باطنة متخصص مع خبرة 15 عام في تشخيص وعلاج الأمراض الباطنية. حاصل على الدكتوراه من جامعة القاهرة ومتخصص في أمراض الجهاز الهضمي والكبد.",
  experience: 15,
  education: [
    "دكتوراه في الطب الباطني - جامعة القاهرة",
    "ماجستير في الطب الباطني - جامعة عين شمس",
    "بكالوريوس الطب والجراحة - جامعة القاهرة",
  ],
  languages: ["العربية", "الإنجليزية", "الفرنسية"],
  consultationFee: 300,
  location: "مدينة نصر، القاهرة",
  phone: "01234567890",
  email: "dr.ahmed@example.com",
  workingHours: {
    sunday: { start: "09:00", end: "17:00", available: true },
    monday: { start: "09:00", end: "17:00", available: true },
    tuesday: { start: "09:00", end: "17:00", available: true },
    wednesday: { start: "09:00", end: "17:00", available: true },
    thursday: { start: "09:00", end: "17:00", available: true },
    friday: { start: "09:00", end: "13:00", available: true },
    saturday: { start: "00:00", end: "00:00", available: false },
  },
  services: [
    "فحص شامل للجهاز الهضمي",
    "علاج أمراض الكبد",
    "تشخيص أمراض الباطنة",
    "متابعة مرضى السكري",
    "علاج ارتفاع ضغط الدم",
  ],
}

const dayNames = {
  sunday: "الأحد",
  monday: "الاثنين",
  tuesday: "الثلاثاء",
  wednesday: "الأربعاء",
  thursday: "الخميس",
  friday: "الجمعة",
  saturday: "السبت",
}

export function DoctorProfileManagement() {
  const [profile, setProfile] = useState<DoctorProfile>(mockProfile)
  const [isEditing, setIsEditing] = useState(false)
  const [editedProfile, setEditedProfile] = useState<DoctorProfile>(mockProfile)

  const handleSave = () => {
    setProfile(editedProfile)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditedProfile(profile)
    setIsEditing(false)
  }

  const addEducation = () => {
    setEditedProfile((prev) => ({
      ...prev,
      education: [...prev.education, ""],
    }))
  }

  const updateEducation = (index: number, value: string) => {
    setEditedProfile((prev) => ({
      ...prev,
      education: prev.education.map((edu, i) => (i === index ? value : edu)),
    }))
  }

  const removeEducation = (index: number) => {
    setEditedProfile((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }))
  }

  const addService = () => {
    setEditedProfile((prev) => ({
      ...prev,
      services: [...prev.services, ""],
    }))
  }

  const updateService = (index: number, value: string) => {
    setEditedProfile((prev) => ({
      ...prev,
      services: prev.services.map((service, i) => (i === index ? value : service)),
    }))
  }

  const removeService = (index: number) => {
    setEditedProfile((prev) => ({
      ...prev,
      services: prev.services.filter((_, i) => i !== index),
    }))
  }

  const updateWorkingHours = (day: string, field: string, value: string | boolean) => {
    setEditedProfile((prev) => ({
      ...prev,
      workingHours: {
        ...prev.workingHours,
        [day]: {
          ...prev.workingHours[day],
          [field]: value,
        },
      },
    }))
  }

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              الملف الشخصي
            </CardTitle>
            <Button
              variant={isEditing ? "destructive" : "outline"}
              size="sm"
              onClick={isEditing ? handleCancel : () => setIsEditing(true)}
            >
              {isEditing ? (
                <>
                  <X className="w-4 h-4 ml-2" />
                  إلغاء
                </>
              ) : (
                <>
                  <Edit className="w-4 h-4 ml-2" />
                  تعديل
                </>
              )}
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">الاسم</Label>
              {isEditing ? (
                <Input
                  id="name"
                  value={editedProfile.name}
                  onChange={(e) => setEditedProfile((prev) => ({ ...prev, name: e.target.value }))}
                />
              ) : (
                <p className="text-lg font-medium">{profile.name}</p>
              )}
            </div>

            <div>
              <Label htmlFor="specialty">التخصص</Label>
              {isEditing ? (
                <Input
                  id="specialty"
                  value={editedProfile.specialty}
                  onChange={(e) => setEditedProfile((prev) => ({ ...prev, specialty: e.target.value }))}
                />
              ) : (
                <p className="text-lg">{profile.specialty}</p>
              )}
            </div>

            <div>
              <Label htmlFor="experience">سنوات الخبرة</Label>
              {isEditing ? (
                <Input
                  id="experience"
                  type="number"
                  value={editedProfile.experience}
                  onChange={(e) =>
                    setEditedProfile((prev) => ({ ...prev, experience: Number.parseInt(e.target.value) }))
                  }
                />
              ) : (
                <p className="text-lg">{profile.experience} سنة</p>
              )}
            </div>

            <div>
              <Label htmlFor="consultationFee">سعر الكشف</Label>
              {isEditing ? (
                <Input
                  id="consultationFee"
                  type="number"
                  value={editedProfile.consultationFee}
                  onChange={(e) =>
                    setEditedProfile((prev) => ({ ...prev, consultationFee: Number.parseInt(e.target.value) }))
                  }
                />
              ) : (
                <p className="text-lg">{profile.consultationFee} جنيه</p>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="phone">رقم الهاتف</Label>
              {isEditing ? (
                <Input
                  id="phone"
                  value={editedProfile.phone}
                  onChange={(e) => setEditedProfile((prev) => ({ ...prev, phone: e.target.value }))}
                />
              ) : (
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span>{profile.phone}</span>
                </div>
              )}
            </div>

            <div>
              <Label htmlFor="email">البريد الإلكتروني</Label>
              {isEditing ? (
                <Input
                  id="email"
                  type="email"
                  value={editedProfile.email}
                  onChange={(e) => setEditedProfile((prev) => ({ ...prev, email: e.target.value }))}
                />
              ) : (
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span>{profile.email}</span>
                </div>
              )}
            </div>

            <div>
              <Label htmlFor="location">العنوان</Label>
              {isEditing ? (
                <Input
                  id="location"
                  value={editedProfile.location}
                  onChange={(e) => setEditedProfile((prev) => ({ ...prev, location: e.target.value }))}
                />
              ) : (
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>{profile.location}</span>
                </div>
              )}
            </div>
          </div>

          {/* Bio */}
          <div>
            <Label htmlFor="bio">نبذة تعريفية</Label>
            {isEditing ? (
              <Textarea
                id="bio"
                value={editedProfile.bio}
                onChange={(e) => setEditedProfile((prev) => ({ ...prev, bio: e.target.value }))}
                rows={4}
              />
            ) : (
              <p className="text-muted-foreground">{profile.bio}</p>
            )}
          </div>

          {/* Languages */}
          <div>
            <Label>اللغات</Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {profile.languages.map((language, index) => (
                <Badge key={index} variant="secondary">
                  {language}
                </Badge>
              ))}
            </div>
          </div>

          {/* Save Button */}
          {isEditing && (
            <div className="flex justify-end">
              <Button onClick={handleSave}>
                <Save className="w-4 h-4 ml-2" />
                حفظ التغييرات
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Education */}
      <Card>
        <CardHeader>
          <CardTitle>المؤهلات العلمية</CardTitle>
        </CardHeader>
        <CardContent>
          {isEditing ? (
            <div className="space-y-3">
              {editedProfile.education.map((edu, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Input
                    value={edu}
                    onChange={(e) => updateEducation(index, e.target.value)}
                    placeholder="أدخل المؤهل العلمي"
                  />
                  <Button variant="destructive" size="icon" onClick={() => removeEducation(index)}>
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
              <Button variant="outline" onClick={addEducation}>
                <Plus className="w-4 h-4 ml-2" />
                إضافة مؤهل
              </Button>
            </div>
          ) : (
            <ul className="space-y-2">
              {profile.education.map((edu, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>{edu}</span>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      {/* Services */}
      <Card>
        <CardHeader>
          <CardTitle>الخدمات المقدمة</CardTitle>
        </CardHeader>
        <CardContent>
          {isEditing ? (
            <div className="space-y-3">
              {editedProfile.services.map((service, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Input
                    value={service}
                    onChange={(e) => updateService(index, e.target.value)}
                    placeholder="أدخل الخدمة"
                  />
                  <Button variant="destructive" size="icon" onClick={() => removeService(index)}>
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
              <Button variant="outline" onClick={addService}>
                <Plus className="w-4 h-4 ml-2" />
                إضافة خدمة
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {profile.services.map((service, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Working Hours */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            ساعات العمل
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Object.entries(profile.workingHours).map(([day, hours]) => (
              <div key={day} className="flex items-center justify-between p-3 border border-border rounded-lg">
                <span className="font-medium">{dayNames[day as keyof typeof dayNames]}</span>
                {isEditing ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={editedProfile.workingHours[day].available}
                      onChange={(e) => updateWorkingHours(day, "available", e.target.checked)}
                    />
                    {editedProfile.workingHours[day].available && (
                      <>
                        <Input
                          type="time"
                          value={editedProfile.workingHours[day].start}
                          onChange={(e) => updateWorkingHours(day, "start", e.target.value)}
                          className="w-24"
                        />
                        <span>إلى</span>
                        <Input
                          type="time"
                          value={editedProfile.workingHours[day].end}
                          onChange={(e) => updateWorkingHours(day, "end", e.target.value)}
                          className="w-24"
                        />
                      </>
                    )}
                  </div>
                ) : (
                  <div>
                    {hours.available ? (
                      <Badge variant="outline">
                        {hours.start} - {hours.end}
                      </Badge>
                    ) : (
                      <Badge variant="secondary">مغلق</Badge>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
