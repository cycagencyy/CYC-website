# 🚀 رفع الموقع على GitHub ثم Netlify

## 📋 المتطلبات:
- ✅ حساب GitHub
- ✅ Git مثبت على الجهاز
- ✅ الموقع جاهز للرفع

## 🔧 تثبيت Git (إذا لم يكن مثبت):

### Windows:
1. **اذهب إلى:** https://git-scm.com/download/win
2. **حمل Git** وثبته
3. **أعد تشغيل** Terminal

### أو استخدم GitHub Desktop:
1. **اذهب إلى:** https://desktop.github.com/
2. **حمل GitHub Desktop**
3. **ثبته** وافتحه

## 🚀 خطوات الرفع:

### 1️⃣ إنشاء مستودع على GitHub:
1. **اذهب إلى:** https://github.com
2. **اضغط "New repository"**
3. **اسم المستودع:** `cyc-website`
4. **وصف:** `CYC Marketing Website - MENA Digital Marketing Agency`
5. **اختر:** Public
6. **لا تضع** README أو .gitignore
7. **اضغط "Create repository"**

### 2️⃣ رفع الكود:

#### باستخدام Terminal:
```bash
# تهيئة Git
git init

# إضافة جميع الملفات
git add .

# أول commit
git commit -m "Initial commit: CYC Marketing Website"

# ربط المستودع
git remote add origin https://github.com/YOUR_USERNAME/cyc-website.git

# رفع الكود
git push -u origin main
```

#### باستخدام GitHub Desktop:
1. **افتح GitHub Desktop**
2. **File → Add Local Repository**
3. **اختر مجلد** `cyc-website`
4. **اضغط "Publish repository"**
5. **اختر اسم** `cyc-website`
6. **اضغط "Publish Repository"**

### 3️⃣ ربط Netlify بـ GitHub:

#### في Netlify:
1. **اذهب إلى:** https://netlify.com
2. **اضغط "New site from Git"**
3. **اختر "GitHub"**
4. **اختر مستودع** `cyc-website`
5. **إعدادات البناء:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18`
6. **اضغط "Deploy site"**

## ⚙️ إعدادات مهمة:

### Environment Variables في Netlify:
- `NODE_VERSION = 18`
- `NPM_FLAGS = --production=false`

### Build Settings:
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 18

## 🔧 ملفات مهمة موجودة:
- ✅ `netlify.toml` - إعدادات Netlify
- ✅ `vite.config.js` - إعدادات Vite
- ✅ `package.json` - تبعيات المشروع
- ✅ `dist/` - ملفات الإنتاج

## 🎯 النتيجة:
- ✅ الموقع على GitHub
- ✅ ربط تلقائي مع Netlify
- ✅ تحديث تلقائي عند push
- ✅ لا مزيد من مشاكل MIME types

## 📱 بعد الرفع:
1. **اختبر الموقع** على الرابط الجديد
2. **تحقق من جميع الصفحات**
3. **اختبر النماذج**
4. **اختبر التبديل بين اللغات**

---
**موقعك سيعمل بشكل مثالي! 🎉**




