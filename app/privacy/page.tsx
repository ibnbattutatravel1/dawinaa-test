export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700 p-8">
            <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">سياسة الخصوصية</h1>

            <div className="prose prose-lg max-w-none text-neutral-700 dark:text-neutral-300 space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">1. مقدمة</h2>
                <p>
                  نحن في منصة داوينا نقدر خصوصيتك ونلتزم بحماية بياناتك الشخصية. هذه السياسة توضح كيفية جمع واستخدام
                  وحماية المعلومات التي تقدمها لنا.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                  2. المعلومات التي نجمعها
                </h2>
                <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2">المعلومات الشخصية:</h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>الاسم الكامل</li>
                  <li>رقم الهاتف</li>
                  <li>البريد الإلكتروني</li>
                  <li>العنوان (عند الحاجة)</li>
                  <li>تاريخ الميلاد (للأطباء)</li>
                </ul>

                <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2">المعلومات الطبية:</h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>التخصص الطبي (للأطباء)</li>
                  <li>سنوات الخبرة (للأطباء)</li>
                  <li>المؤهلات العلمية (للأطباء)</li>
                  <li>ملاحظات الحجز (للمرضى)</li>
                </ul>

                <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2">المعلومات التقنية:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>عنوان IP</li>
                  <li>نوع المتصفح</li>
                  <li>نظام التشغيل</li>
                  <li>سجلات الاستخدام</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                  3. كيفية استخدام المعلومات
                </h2>
                <p>نستخدم المعلومات التي نجمعها للأغراض التالية:</p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>تسهيل عملية حجز المواعيد الطبية</li>
                  <li>التواصل معك بخصوص حجوزاتك</li>
                  <li>تحسين خدماتنا وتجربة المستخدم</li>
                  <li>إرسال إشعارات مهمة حول الخدمة</li>
                  <li>الامتثال للمتطلبات القانونية</li>
                  <li>منع الاحتيال وضمان الأمان</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">4. مشاركة المعلومات</h2>
                <p>نحن لا نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك في الحالات التالية:</p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>مع الأطباء والمستشفيات لتسهيل الحجوزات</li>
                  <li>مع مقدمي الخدمات التقنية (بموجب اتفاقيات سرية)</li>
                  <li>عند الطلب من السلطات القانونية</li>
                  <li>لحماية حقوقنا أو حقوق الآخرين</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">5. حماية المعلومات</h2>
                <p>نتخذ إجراءات أمنية متقدمة لحماية معلوماتك:</p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>تشفير البيانات أثناء النقل والتخزين</li>
                  <li>استخدام خوادم آمنة ومحمية</li>
                  <li>تقييد الوصول للمعلومات للموظفين المخولين فقط</li>
                  <li>مراقبة مستمرة للأنشطة المشبوهة</li>
                  <li>تحديث أنظمة الأمان بانتظام</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                  6. ملفات تعريف الارتباط (Cookies)
                </h2>
                <p>
                  نستخدم ملفات تعريف الارتباط لتحسين تجربتك على المنصة. يمكنك التحكم في هذه الملفات من خلال إعدادات
                  متصفحك.
                </p>
                <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2 mt-4">
                  أنواع ملفات تعريف الارتباط:
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>ملفات ضرورية لعمل الموقع</li>
                  <li>ملفات لتحسين الأداء</li>
                  <li>ملفات لتخصيص التجربة</li>
                  <li>ملفات للتحليل والإحصائيات</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">7. حقوقك</h2>
                <p>لديك الحقوق التالية فيما يتعلق بمعلوماتك الشخصية:</p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>الحق في الوصول إلى معلوماتك</li>
                  <li>الحق في تصحيح المعلومات الخاطئة</li>
                  <li>الحق في حذف معلوماتك</li>
                  <li>الحق في تقييد معالجة معلوماتك</li>
                  <li>الحق في نقل معلوماتك</li>
                  <li>الحق في الاعتراض على معالجة معلوماتك</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">8. الاحتفاظ بالمعلومات</h2>
                <p>
                  نحتفظ بمعلوماتك الشخصية للمدة اللازمة لتقديم خدماتنا أو كما يتطلب القانون. عند عدم الحاجة للمعلومات،
                  نقوم بحذفها بشكل آمن.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">9. التحديثات</h2>
                <p>
                  قد نقوم بتحديث هذه السياسة من وقت لآخر. سنقوم بإشعارك بأي تغييرات مهمة عبر البريد الإلكتروني أو من
                  خلال إشعار على المنصة.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">10. التواصل</h2>
                <p>إذا كان لديك أي أسئلة حول سياسة الخصوصية أو تريد ممارسة حقوقك، يمكنك التواصل معنا:</p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>البريد الإلكتروني: privacy@dawina.com</li>
                  <li>الهاتف: 16676</li>
                  <li>العنوان: القاهرة، مصر</li>
                </ul>
              </section>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-600">
              <p className="text-sm text-neutral-500 dark:text-neutral-400">آخر تحديث: 15 يناير 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const metadata = {
  title: "سياسة الخصوصية | داوينا",
  description: "اقرأ سياسة الخصوصية الخاصة بمنصة داوينا وكيفية حماية بياناتك",
}
