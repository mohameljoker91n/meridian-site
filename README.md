# Meridian Technology — الموقع الرسمي

موقع تعريفي ثنائي اللغة (عربي/إنجليزي) لشركة **مريديان للتكنولوجيا (Meridian Technology for Software)**.
موقع ثابت (static) بالكامل — HTML/CSS/JS — من غير أي خطوة build، يتنشر مباشرة على Cloudflare Pages.

## الملفات

```
meridian-site/
├── index.html          ← الصفحة الرئيسية (كل المحتوى)
├── css/styles.css      ← التصميم والهوية
├── js/main.js          ← تبديل اللغة + القائمة + التأثيرات
├── assets/
│   ├── mohamed.jpg          صورة القيادة
│   ├── favicon.svg          أيقونة المتصفح (متجهة)
│   ├── favicon-32.png
│   ├── favicon-16.png
│   ├── apple-touch-icon.png
│   ├── icon-512.png         الشعار للأنظمة والـ schema
│   └── og-image.png         صورة المشاركة على السوشيال
└── README.md
```

## تجربة الموقع محليًا (اختياري)

افتح `index.html` مباشرة في المتصفح، أو شغّل خادم بسيط:

```bash
# داخل مجلد المشروع
python3 -m http.server 8080
# ثم افتح: http://localhost:8080
```

## النشر — GitHub + Cloudflare Pages

الخطوات الكاملة بالصور-بالكلام موجودة في المحادثة. باختصار:

1. أنشئ مستودع (repository) جديد على GitHub وارفع محتوى هذا المجلد فيه.
2. من Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. اختر المستودع، واترك إعدادات الـ build فارغة (Framework preset = None، Build command فارغ، Output directory = `/`).
4. بعد أول نشر، روح **Custom domains** وأضِف `meridiantech.ink` (الدومين عندك على Cloudflare بالفعل، فالربط تلقائي).

## التعديل لاحقًا

- كل النصوص في `index.html`؛ كل عنصر له النص الإنجليزي مكتوب، والنص العربي في الخاصية `data-ar`.
- لتغيير لون: عدّل المتغيّرات في أول `css/styles.css` (`--navy`, `--teal`, `--orange`).
- أي تعديل تعمله push على GitHub بينشر تلقائيًا على Cloudflare خلال ثوانٍ.

© 2026 Meridian Technology for Software
