import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { Logo } from "@/components/common/logo"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm leading-relaxed">
              منصة داوينا هي الحل الأمثل للعثور على أفضل الأطباء في مصر وحجز المواعيد بسهولة وأمان.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-cairo text-lg font-bold text-foreground">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/search" className="hover:text-foreground transition-colors text-sm">
                  البحث عن طبيب
                </Link>
              </li>
              <li>
                <Link href="/governorates" className="hover:text-foreground transition-colors text-sm">
                  دليل المحافظات
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-foreground transition-colors text-sm">
                  المدونة الطبية
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors text-sm">
                  من نحن
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-cairo text-lg font-bold text-foreground">خدماتنا</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/add-clinic" className="hover:text-foreground transition-colors text-sm">
                  أضف عيادتك
                </Link>
              </li>
              <li>
                <Link href="/booking/manage" className="hover:text-foreground transition-colors text-sm">
                  إدارة الحجوزات
                </Link>
              </li>
              <li>
                <Link href="/report" className="hover:text-foreground transition-colors text-sm">
                  الإبلاغ عن مشكلة
                </Link>
              </li>
              <li>
                <Link href="/doctor-login" className="hover:text-foreground transition-colors text-sm">
                  دخول الأطباء
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-cairo text-lg font-bold text-foreground">تواصل معنا</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary-400" />
                <span className="text-sm">16676</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary-400" />
                <span className="text-sm">info@dawina.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary-400" />
                <span className="text-sm">القاهرة، مصر</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-cairo text-sm">© {currentYear} داوينا. جميع الحقوق محفوظة.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="font-cairo hover:text-foreground transition-colors text-sm">
                سياسة الخصوصية
              </Link>
              <Link href="/terms" className="font-cairo hover:text-foreground transition-colors text-sm">
                شروط الاستخدام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
