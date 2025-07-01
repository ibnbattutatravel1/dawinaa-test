import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "أحمد محمود",
    location: "القاهرة",
    rating: 5,
    comment:
      "تجربة رائعة! تمكنت من حجز موعد مع أفضل طبيب قلب في القاهرة خلال دقائق معدودة. الخدمة ممتازة والأطباء محترفون جداً.",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "فاطمة علي",
    location: "الإسكندرية",
    rating: 5,
    comment: "منصة داوينا سهلت علي كثيراً في العثور على طبيب أطفال ممتاز لابني. التطبيق سهل الاستخدام والحجز سريع جداً.",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "محمد حسن",
    location: "الجيزة",
    rating: 5,
    comment:
      "أنصح الجميع باستخدام داوينا. الأطباء معتمدون والمواعيد دقيقة. وفرت علي الكثير من الوقت والجهد في البحث عن طبيب مناسب.",
    image: "/placeholder.svg?height=60&width=60",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">ماذا يقول مرضانا</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            آراء حقيقية من مرضى استخدموا منصة داوينا وحصلوا على أفضل رعاية طبية
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative">
              <CardContent className="p-6">
                <div className="absolute -top-3 right-6">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{testimonial.comment}</p>

                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
