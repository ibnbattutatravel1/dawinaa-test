export default function TermsPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700 p-8">
            <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">الشروط والأحكام</h1>

            <div className="prose prose-lg max-w-none text-neutral-700 dark:text-neutral-300 space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">1. مقدمة</h2>
                <p>
                  مرحباً بك في منصة داوينا. هذه الشروط والأحكام تحكم استخدامك لموقعنا الإلكتروني وخدماتنا. باستخدام منصة
                  داوينا، فإنك توافق على الالتزام بهذه الشروط والأحكام.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">2. تعريف الخدمات</h2>
                <p>
                  منصة داوينا هي منصة إلكترونية تهدف إلى ربط المرضى بالأطباء والمستشفيات في جمهورية مصر العربية. نحن
                  نوفر خدمة البحث عن الأطباء وحجز المواعيد الطبية.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">3. التسجيل والحساب</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>يجب تقديم معلومات صحيحة ودقيقة عند التسجيل</li>
                  <li>أنت مسؤول عن الحفاظ على سرية بيانات حسابك</li>
                  <li>يجب إخطارنا فوراً في حالة الاشتباه في اختراق حسابك</li>
                  <li>نحتفظ بالحق في إيقاف أو إلغاء الحسابات التي تنتهك شروط الاستخدام</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">4. استخدام المنصة</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>يُمنع استخدام المنصة لأي أغراض غير قانونية</li>
                  <li>يُمنع نشر محتوى مسيء أو مضلل</li>
                  <li>يُمنع محاولة اختراق أو إلحاق الضرر بالمنصة</li>
                  <li>يجب احترام حقوق الملكية الفكرية</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">5. الحجوزات والمواعيد</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>المنصة تسهل عملية الحجز ولا تقدم الخدمات الطبية مباشرة</li>
                  <li>الدفع يتم مباشرة للطبيب أو المستشفى</li>
                  <li>يمكن إلغاء الحجز وفقاً لسياسة كل طبيب</li>
                  <li>نحن غير مسؤولين عن جودة الخدمات الطبية المقدمة</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">6. المسؤولية</h2>
                <p>منصة داوينا تعمل كوسيط بين المرضى والأطباء. نحن غير مسؤولين عن:</p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>جودة الخدمات الطبية المقدمة</li>
                  <li>دقة المعلومات المقدمة من الأطباء</li>
                  <li>أي أضرار قد تنتج عن استخدام المنصة</li>
                  <li>المشاكل التقنية أو انقطاع الخدمة</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">7. الخصوصية</h2>
                <p>
                  نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية وفقاً لسياسة الخصوصية الخاصة بنا. يرجى مراجعة سياسة
                  الخصوصية لمعرفة كيفية جمع واستخدام بياناتك.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">8. التعديلات</h2>
                <p>
                  نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. سيتم إشعارك بأي تغييرات مهمة عبر البريد الإلكتروني
                  أو من خلال إشعار على المنصة.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">9. القانون المطبق</h2>
                <p>تخضع هذه الشروط والأحكام للقوانين المصرية، وأي نزاع ينشأ عنها يخضع لاختصاص المحاكم المصرية.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">10. التواصل</h2>
                <p>إذا كان لديك أي أسئلة حول هذه الشروط والأحكام، يمكنك التواصل معنا عبر:</p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>البريد الإلكتروني: legal@dawina.com</li>
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
  title: "الشروط والأحكام | داوينا",
  description: "اقرأ الشروط والأحكام الخاصة باستخدام منصة داوينا",
}
