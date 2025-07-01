import Link from "next/link"
import { Home, Search, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">الصفحة غير موجودة</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-md mx-auto">
            عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى مكان آخر
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="w-5 h-5 mr-2" />
              العودة للرئيسية
            </Link>
          </Button>

          <Button variant="outline" asChild size="lg" className="bg-transparent">
            <Link href="/search">
              <Search className="w-5 h-5 mr-2" />
              البحث عن طبيب
            </Link>
          </Button>
        </div>

        <div className="mt-12">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">أو جرب هذه الروابط المفيدة:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
            <Link
              href="/governorates"
              className="flex items-center justify-between p-3 bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
            >
              <span className="text-neutral-700 dark:text-neutral-300">دليل المحافظات</span>
              <ArrowRight className="w-4 h-4 text-neutral-400" />
            </Link>

            <Link
              href="/blog"
              className="flex items-center justify-between p-3 bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
            >
              <span className="text-neutral-700 dark:text-neutral-300">المدونة الطبية</span>
              <ArrowRight className="w-4 h-4 text-neutral-400" />
            </Link>

            <Link
              href="/about"
              className="flex items-center justify-between p-3 bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
            >
              <span className="text-neutral-700 dark:text-neutral-300">من نحن</span>
              <ArrowRight className="w-4 h-4 text-neutral-400" />
            </Link>

            <Link
              href="/contact"
              className="flex items-center justify-between p-3 bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
            >
              <span className="text-neutral-700 dark:text-neutral-300">تواصل معنا</span>
              <ArrowRight className="w-4 h-4 text-neutral-400" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
