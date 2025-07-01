export const SITE_CONFIG = {
  name: "داوينا",
  description: "منصة طبية لربط الأطباء بالمرضى في مصر",
  url: "https://dawina.com",
  ogImage: "https://dawina.com/og.jpg",
  keywords: ["داوينا", "أطباء", "مرضى", "مصر", "منصة طبية", "حجز أطباء", "استشارة طبية", "باطنة", "أطفال", "نساء وتوليد", "عظام"],
  links: {
    twitter: "https://twitter.com/dawina",
    facebook: "https://facebook.com/dawina",
    instagram: "https://instagram.com/dawina",
  },
}

export const SPECIALTIES = [
  { id: "internal", name: "باطنة", icon: "🫀", description: "أمراض الباطنة العامة" },
  { id: "pediatrics", name: "أطفال", icon: "👶", description: "طب الأطفال وحديثي الولادة" },
  { id: "gynecology", name: "نساء وتوليد", icon: "👩", description: "أمراض النساء والتوليد" },
  { id: "orthopedics", name: "عظام", icon: "🦴", description: "جراحة العظام والمفاصل" },
  { id: "cardiology", name: "قلب وأوعية دموية", icon: "❤️", description: "أمراض القلب والأوعية الدموية" },
  { id: "dermatology", name: "جلدية", icon: "🧴", description: "الأمراض الجلدية والتناسلية" },
  { id: "ophthalmology", name: "عيون", icon: "👁️", description: "طب وجراحة العيون" },
  { id: "ent", name: "أنف وأذن وحنجرة", icon: "👂", description: "أمراض الأنف والأذن والحنجرة" },
  { id: "dentistry", name: "أسنان", icon: "🦷", description: "طب وجراحة الأسنان" },
  { id: "psychiatry", name: "نفسية", icon: "🧠", description: "الطب النفسي والعلاج النفسي" },
  { id: "neurology", name: "مخ وأعصاب", icon: "🧠", description: "أمراض المخ والأعصاب" },
  { id: "urology", name: "مسالك بولية", icon: "🫘", description: "أمراض المسالك البولية والتناسلية" },
]

export const GOVERNORATES = [
  { id: "cairo", name: "القاهرة", slug: "cairo", population: "10,230,350" },
  { id: "giza", name: "الجيزة", slug: "giza", population: "8,632,021" },
  { id: "alexandria", name: "الإسكندرية", slug: "alexandria", population: "5,163,750" },
  { id: "dakahlia", name: "الدقهلية", slug: "dakahlia", population: "6,492,381" },
  { id: "sharqia", name: "الشرقية", slug: "sharqia", population: "7,163,824" },
  { id: "qalyubia", name: "القليوبية", slug: "qalyubia", population: "5,627,420" },
  { id: "kafr-el-sheikh", name: "كفر الشيخ", slug: "kafr-el-sheikh", population: "3,172,753" },
  { id: "gharbia", name: "الغربية", slug: "gharbia", population: "4,999,633" },
  { id: "monufia", name: "المنوفية", slug: "monufia", population: "4,301,601" },
  { id: "beheira", name: "البحيرة", slug: "beheira", population: "6,031,202" },
]

export const COLORS = {
  primary: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
  },
  secondary: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
  },
  success: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
  },
  warning: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
  },
  error: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
  },
}
