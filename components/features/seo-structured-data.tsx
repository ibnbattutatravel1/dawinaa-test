import type { Doctor, Hospital, BlogPost } from "@/lib/types"

interface StructuredDataProps {
  type: "doctor" | "hospital" | "blog" | "organization"
  data: Doctor | Hospital | BlogPost | any
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const generateDoctorSchema = (doctor: Doctor) => ({
    "@context": "https://schema.org",
    "@type": "Physician",
    name: `د. ${doctor.name}`,
    description: doctor.about,
    image: doctor.image,
    telephone: doctor.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: doctor.location,
      addressRegion: "مصر",
      streetAddress: doctor.address,
    },
    medicalSpecialty: doctor.specialty,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: doctor.rating,
      reviewCount: doctor.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    priceRange: `${doctor.consultationFee} جنيه`,
    availableService: {
      "@type": "MedicalService",
      name: doctor.specialty,
      provider: {
        "@type": "Physician",
        name: `د. ${doctor.name}`,
      },
    },
  })

  const generateHospitalSchema = (hospital: Hospital) => ({
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: hospital.name,
    image: hospital.image,
    telephone: hospital.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: hospital.location,
      addressRegion: "مصر",
      streetAddress: hospital.address,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: hospital.rating,
      reviewCount: hospital.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    medicalSpecialty: hospital.services,
  })

  const generateBlogSchema = (blog: BlogPost) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.excerpt,
    image: blog.image,
    author: {
      "@type": "Person",
      name: blog.author,
    },
    publisher: {
      "@type": "Organization",
      name: "داوينا",
      logo: {
        "@type": "ImageObject",
        url: "/logo.png",
      },
    },
    datePublished: blog.publishedAt,
    dateModified: blog.updatedAt,
    articleSection: blog.category,
    keywords: blog.tags.join(", "),
  })

  const generateOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "داوينا",
    description: "منصة طبية لربط الأطباء بالمرضى في مصر",
    url: "https://dawina.com",
    logo: "https://dawina.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "16676",
      contactType: "customer service",
      availableLanguage: "Arabic",
    },
    sameAs: ["https://facebook.com/dawina", "https://twitter.com/dawina", "https://instagram.com/dawina"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "القاهرة",
      addressRegion: "مصر",
    },
  })

  let schema
  switch (type) {
    case "doctor":
      schema = generateDoctorSchema(data as Doctor)
      break
    case "hospital":
      schema = generateHospitalSchema(data as Hospital)
      break
    case "blog":
      schema = generateBlogSchema(data as BlogPost)
      break
    case "organization":
      schema = generateOrganizationSchema()
      break
    default:
      return null
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
