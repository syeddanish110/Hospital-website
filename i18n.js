/**
 * MedConnect India - Bilingual Internationalization Script (EN / AR)
 * Provides seamless English <-> Modern Standard Arabic (الفصحى) switching
 * with full RTL support and persistence across pages.
 */

const translations = {
    en: {
        // Meta & Navigation
        "meta.index.title": "World-Class Medical Treatment in India for Patients from Iraq | MedConnect India",
        "meta.index.desc": "Trusted medical coordination for patients from Iraq seeking world-class treatment in India, from first consultation to recovery.",
        "meta.liver.title": "Liver Transplant Specialists in India for Patients from Iraq | MedConnect India",
        "meta.liver.desc": "Trusted medical coordination for patients from Iraq seeking world-class liver transplant specialists and care in India.",
        "meta.organ.title": "Organ Transplant Specialists in India for Patients from Iraq | MedConnect India",
        "meta.organ.desc": "Trusted medical coordination for patients from Iraq seeking world-class organ transplant specialists (liver & kidney) in India.",
        "meta.pediatric.title": "Pediatric Heart Specialists in India for Patients from Iraq | MedConnect India",
        "meta.pediatric.desc": "Trusted medical coordination for patients from Iraq seeking world-class pediatric heart treatment and surgeries in India.",

        "nav.brand": "MedConnect",
        "nav.brand_sub": "India",
        "nav.lang_toggle": "العربية",
        "nav.back_home": "Back to Home",

        // Hero Section
        "hero.title_main": "World-Class Medical Treatment",
        "hero.title_sub": "in India, Tailored for You",
        "hero.subtext": "Your trusted medical coordination partner for patients traveling from Iraq. We connect you with the best specialists and facilities in India for a seamless healthcare journey.",
        "hero.cta_services": "Our Services",
        "hero.cta_opinion": "Get a Free Medical Opinion",

        // Coordinator Section
        "coord.tag": "Dedicated Support",
        "coord.heading": "Meet Our Senior Coordinator",
        "coord.text": "With over <span class=\"font-semibold text-primary-700\">5+ years of experience</span> in international medical coordination, our Senior Coordinator ensures every aspect of your journey is handled with care and precision. We've helped patients from Baghdad, Basra, Erbil, and across Iraq access advanced treatment in India. From initial consultation to post-treatment follow-ups, you have a dedicated advocate walking beside you every step of the way.",
        "coord.feat1": "Multilingual Support",
        "coord.feat2": "24/7 Assistance",

        // Services Section
        "services.heading": "Comprehensive Patient Services",
        "services.subtext": "We find the best hospitals across India (Delhi, Chennai, Mumbai, etc.) based entirely on your specific medical needs and preferences.",
        "services.s1_title": "Free Medical Opinion",
        "services.s1_desc": "Share your reports, and we'll secure a preliminary assessment and treatment plan from top specialists.",
        "services.s2_title": "Visa Assistance",
        "services.s2_desc": "We provide medical Visa invitation letters and assist with the documentation to ensure smooth embassy processing.",
        "services.s3_title": "Airport Pick-up",
        "services.s3_desc": "A warm welcome awaits you. Our team will receive you at the airport and transfer you safely to your accommodation.",
        "services.s4_title": "Local Logistics",
        "services.s4_desc": "From comfortable accommodation near the hospital to daily transport and translation services, we handle it all.",

        // Categories Section
        "categories.heading": "Treatment Categories",
        "categories.subtext": "Explore our diverse areas of expertise and connect with top specialists across India.",
        "categories.c1_title": "Pediatric Cardiac Care",
        "categories.c1_desc": "Comprehensive cardiac care & surgery for children.",
        "categories.c2_title": "Organ Transplant",
        "categories.c2_desc": "Liver and Kidney transplant specialists.",
        "categories.c3_title": "Bone Marrow Transplant",
        "categories.c3_desc": "Advanced BMT for blood disorders.",
        "categories.c4_title": "Oncology",
        "categories.c4_desc": "Comprehensive cancer care and surgery.",
        "categories.c5_title": "Orthopedics",
        "categories.c5_desc": "Joint replacements and spine care.",
        "categories.c6_title": "Neuro Surgery",
        "categories.c6_desc": "Expert solutions for brain and nerves.",
        "categories.c7_title": "Cardiac & Heart Surgery",
        "categories.c7_desc": "Bypass, valve repair, angioplasty & transplants.",
        "categories.c8_title": "Other Specialties",
        "categories.c8_desc": "Don't see your condition? Chat directly with our team.",

        // Subpages - Liver Transplant
        "liver.heading": "Liver Transplant Specialists",
        "liver.subtext": "Access world-renowned organ transplant specialists leading the way in complex liver transplantation.",
        "liver.dr1_name": "Dr. Arvinder Singh Soin",
        "liver.dr1_role": "Chief Liver Transplant Surgeon",
        "liver.dr1_exp": "30+ Years Experience",
        "liver.dr1_desc": "Recognized globally for pioneering living donor liver transplantation in India. Expert in complex liver and biliary tract surgery.",
        "liver.dr2_name": "Dr. Giriraj Bora",
        "liver.dr2_role": "Director of Liver Transplant",
        "liver.dr2_exp": "20+ Years Experience",
        "liver.dr2_desc": "Specialized in minimally invasive and laproscopic donor hepatectomies, significantly reducing donor recovery time.",
        "liver.dr3_name": "Prof. Dr. Mohamed Rela",
        "liver.dr3_role": "Renowned Liver Transplant Surgeon",
        "liver.dr3_exp": "32+ Years Experience",
        "liver.dr3_desc": "Holds a Guinness World Record for performing a liver transplant on a 5-day-old infant. A world authority in pediatric liver transplantation.",

        // Subpages - Organ Transplant
        "organ.heading": "Organ Transplant Specialists",
        "organ.subtext": "Access world-renowned organ transplant specialists leading the way in complex liver and kidney transplantation.",
        "organ.section_liver": "Liver Transplant Experts",
        "organ.section_kidney": "Kidney Transplant Experts",
        "organ.k_dr1_name": "Dr. Sandeep Guleria",
        "organ.k_dr1_role": "Senior Consultant - Renal Transplant Surgery",
        "organ.k_dr1_exp": "33+ Years Experience",
        "organ.k_dr1_desc": "Performed India's first two successful kidney-pancreas transplants. A pioneer in cadaveric renal transplantation renowned for high-volume successful kidney transplants.",
        "organ.k_dr2_name": "Dr. Rajesh Ahlawat",
        "organ.k_dr2_role": "Group Chairman - Urology & Renal Transplant",
        "organ.k_dr2_exp": "Pioneer of world's first robotic kidney transplant",
        "organ.k_dr2_desc": "A global leader in minimally invasive urology. Expert in robotic renal transplants and complex reconstructive procedures.",
        "organ.k_dr3_name": "Dr. Anant Kumar",
        "organ.k_dr3_role": "Chairman - Urology, Robotics & Renal Transplant",
        "organ.k_dr3_exp": "35+ Years, 3,500+ kidney transplants",
        "organ.k_dr3_desc": "Specialized in robotic-assisted kidney transplants and uro-oncology. Known for performing over 2,200 laparoscopic donor surgeries.",

        // Subpages - Pediatric Heart
        "pediatric.heading": "Pediatric Heart Specialists",
        "pediatric.subtext": "Access highly skilled pediatric cardiologists and surgeons with decades of experience in complex medical treatments.",
        "pediatric.dr1_name": "Dr. Amitoz Singh Baidwan",
        "pediatric.dr1_role": "Pediatric Cardiologist",
        "pediatric.dr1_exp": "Expert in Pediatric and Fetal Cardiology",
        "pediatric.dr1_desc": "Specialized training from Chennai. Known for his excellent work in pediatric cardiology.",
        "pediatric.dr2_name": "Dr. Krishna Subramony Iyer",
        "pediatric.dr2_role": "Executive Director - Pediatric Cardiac Surgery",
        "pediatric.dr2_exp": "40+ Years Experience, 10,000+ surgeries",
        "pediatric.dr2_desc": "A pioneer in pediatric cardiac surgery in India, specializing in complex congenital heart diseases like Fontan procedures.",
        "pediatric.dr3_name": "Dr. Rajesh Sharma",
        "pediatric.dr3_role": "Pediatric Cardiothoracic Surgeon",
        "pediatric.dr3_exp": "30+ Years Experience, 20,000+ procedures",
        "pediatric.dr3_desc": "Renowned for surgical treatment of complex congenital heart defects in both adults and children.",
        "pediatric.dr4_name": "Dr. Suresh Rao",
        "pediatric.dr4_role": "Director - Children's Heart Centre",
        "pediatric.dr4_exp": "35+ Years Experience",
        "pediatric.dr4_desc": "Specialist in neonatal cardiac surgery and has pioneered numerous techniques in congenital surgery corrections.",
        "pediatric.dr5_name": "Dr. Muthu Jothi",
        "pediatric.dr5_role": "Leading Pediatric Cardiothoracic Surgeon",
        "pediatric.dr5_exp": "26+ Years Experience",
        "pediatric.dr5_desc": "Expert in minimally invasive procedures for children, ensuring quicker recovery and surgical precision.",
        "pediatric.dr6_name": "Dr. Devi Prasad Shetty",
        "pediatric.dr6_role": "Founder & Senior Consultant Cardiac Surgeon",
        "pediatric.dr6_exp": "40+ Years Experience, 1,20,000+ heart surgeries",
        "pediatric.dr6_desc": "A world-renowned visionary in affordable cardiac care. Specialized in complex pediatric heart surgeries and a pioneer in integrated healthcare solutions.",

        // Footer & Floating Widget
        "footer.desc": "Your trusted bridge to world-class medical treatment in India. We handle the logistics so you can focus on healing.",
        "footer.quick_links": "Quick Links",
        "footer.link_about": "About Us",
        "footer.link_services": "Our Services",
        "footer.link_testimonials": "Patient Testimonials",
        "footer.legal": "Legal",
        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms of Service",
        "footer.direct_contact": "Direct Contact (Iraq & Beyond)",
        "footer.avail_note": "Available 24/7 for patient inquiries from Iraq & beyond.",
        "widget.badge": "Chat with us",
        "widget.title": "24/7 Patient Coordinator",
        "widget.subtext": "Message our coordination team directly — we're here to help you plan your treatment journey from Iraq to India.",
        "widget.btn_primary": "Open WhatsApp Chat",
        "widget.btn_web": "Message us via Web WhatsApp"
    },
    ar: {
        // Meta & Navigation
        "meta.index.title": "علاج طبي عالمي المستوى في الهند للمرضى من العراق | مدكونيكت الهند",
        "meta.index.desc": "تنسيق طبي موثوق للمرضى من العراق الراغبين في الحصول على علاج عالمي المستوى في الهند، من الاستشارة الأولى وحتى التعافي التام.",
        "meta.liver.title": "أطباء ومتخصصو زراعة الكبد في الهند للمرضى من العراق | مدكونيكت الهند",
        "meta.liver.desc": "تنسيق طبي موثوق للمرضى من العراق للحصول على أفضل رعاية وأطباء زراعة الكبد في الهند.",
        "meta.organ.title": "أخصائيو زراعة الأعضاء في الهند للمرضى من العراق | مدكونيكت الهند",
        "meta.organ.desc": "تنسيق طبي موثوق للمرضى من العراق للوصول إلى كبار جراحي زراعة الأعضاء (الكبد والكلى) في الهند.",
        "meta.pediatric.title": "أخصائيو جراحة وجهاز قلب الأطفال في الهند للمرضى من العراق | مدكونيكت الهند",
        "meta.pediatric.desc": "تنسيق طبي موثوق للمرضى من العراق للوصول إلى أفضل جراحي قلب الأطفال والعيوب الخلقية في الهند.",

        "nav.brand": "MedConnect",
        "nav.brand_sub": "India",
        "nav.lang_toggle": "English",
        "nav.back_home": "العودة للرئيسية",

        // Hero Section
        "hero.title_main": "علاج طبي عالمي المستوى",
        "hero.title_sub": "في الهند، مصمم خصيصاً لك",
        "hero.subtext": "شريككم الموثوق للتنسيق الطبي للمرضى المسافرين من العراق. نربطكم بأفضل الاستشاريين والمستشفيات في الهند لرحلة علاجية آمنة وميسرة.",
        "hero.cta_services": "خدماتنا الطبية",
        "hero.cta_opinion": "احصل على استشارة طبية مجانية",

        // Coordinator Section
        "coord.tag": "دعم طبي متواصل",
        "coord.heading": "تعرّف على كبير المنسقين الطبيين",
        "coord.text": "مع أكثر من <span class=\"font-semibold text-primary-700\">٥+ سنوات من الخبرة</span> في التنسيق الطبي الدولي، يضمن كبير المنسقين لدينا إدارة جميع تفاصيل رحلتكم العلاجية بعناية ودقة عالية. لقد ساعدنا المرضى من بغداد، البصرة، أربيل، ومختلف أنحاء العراق في الحصول على علاج متقدم في الهند. من الاستشارة الأولى وحتى متابعة ما بعد التعافي، ستجد من يقف بجانبك خطوة بخطوة.",
        "coord.feat1": "دعم بلغات متعددة (العربية والإنجليزية)",
        "coord.feat2": "دعم ورعاية على مدار الساعة",

        // Services Section
        "services.heading": "خدماتنا الشاملة للمرضى",
        "services.subtext": "نساعدكم في اختيار أفضل المستشفيات في كافة أنحاء الهند (دلهي، تشيناي، مومباي، وغيرها) بناءً على حالتك الصحية واحتياجاتك الخاصة.",
        "services.s1_title": "استشارة طبية مجانية",
        "services.s1_desc": "شاركونا تقاريركم الطبية، وسنقوم بتوفير تقييم مبدئي وخطة علاجية من كبار الأطباء المتخصصين.",
        "services.s2_title": "تسهيل التأشيرة الطبية",
        "services.s2_desc": "نوفر دعوات التأشيرة الطبية الرسمية ونساعدكم في تجهيز كافة المستندات لضمان معالجة سفارية سريعة وسلسة.",
        "services.s3_title": "الاستقبال في المطار",
        "services.s3_desc": "استقبال حار في انتظاركم. سيقوم فريقنا باستقبالكم في المطار ونقلكم بأمان إلى مكان إقامتكم.",
        "services.s4_title": "الخدمات اللوجستية والمحلية",
        "services.s4_desc": "من السكن المريح القريب من المستشفى إلى التنقلات اليومية وخدمات الترجمة الطبية، نعتني بكل التفاصيل.",

        // Categories Section
        "categories.heading": "التخصصات والعلاجات الطبية",
        "categories.subtext": "استكشف تخصصاتنا الطبية المتنوعة وتواصل مع أفضل الجراحين والاستشاريين في الهند.",
        "categories.c1_title": "عناية وطب قلب الأطفال",
        "categories.c1_desc": "رعاية وجراحة قلب الأطفال الشاملة للعيوب الخلقية.",
        "categories.c2_title": "زراعة الأعضاء",
        "categories.c2_desc": "نخبة جراحي زراعة الكبد والكلى في الهند.",
        "categories.c3_title": "زراعة نخاع العظم",
        "categories.c3_desc": "علاج متقدم لأمراض الدم وزراعة النخاع.",
        "categories.c4_title": "علاج الأورام والسرطان",
        "categories.c4_desc": "علاج شامل للأورام والرعاية السرطانية المتقدمة.",
        "categories.c5_title": "جراحة العظام والمفاصل",
        "categories.c5_desc": "استبدال المفاصل وجراحة العمود الفقري.",
        "categories.c6_title": "جراحة المخ والأعصاب",
        "categories.c6_desc": "حلول جراحية متقدمة لأمراض الدماغ والأعصاب.",
        "categories.c7_title": "جراحة القلب والأوعية الدموية",
        "categories.c7_desc": "عمليات الشرايين التاجية، تغيير الصمامات، القسطرة وزراعة القلب.",
        "categories.c8_title": "تخصصات طبية أخرى",
        "categories.c8_desc": "لم تجد تخصصك؟ تواصل مباشرة مع فريقنا الطبي.",

        // Subpages - Liver Transplant
        "liver.heading": "أخصائيو زراعة الكبد",
        "liver.subtext": "احصل على استشارة من نخبة جراحي زراعة الكبد الرائدين في العلاجات المعقدة.",
        "liver.dr1_name": "د. أرفيندر سينغ سوين",
        "liver.dr1_role": "كبير جراحي زراعة الكبد",
        "liver.dr1_exp": "خبرة أكثر من ٣٠ عاماً",
        "liver.dr1_desc": "معروف عالمياً بريادته في عمليات زراعة الكبد من متبرع حي في الهند. خبير في الجراحات المعقدة للكبد والقنوات المرارية.",
        "liver.dr2_name": "د. جيريراچ بورا",
        "liver.dr2_role": "مدير قسم زراعة الكبد",
        "liver.dr2_exp": "خبرة أكثر من ٢٠ عاماً",
        "liver.dr2_desc": "متخصص في عمليات استئصال الكبد من المتبرع بالمنظار والتدخل الخفيف، مما يقلل فترة تعافي المتبرع بشكل كبير.",
        "liver.dr3_name": "بروفيسور د. محمد ريلا",
        "liver.dr3_role": "جراح زراعة كبد عالمي",
        "liver.dr3_exp": "خبرة أكثر من ٣٢ عاماً",
        "liver.dr3_desc": "يحمل قياساً في موسوعة غينيس لإجرائه زراعة كبد لرضيع عمره ٥ أيام فقط. مرجع عالمي في زراعة الكبد للأطفال.",

        // Subpages - Organ Transplant
        "organ.heading": "أخصائيو زراعة الأعضاء",
        "organ.subtext": "الوصول إلى أفضل خبراء زراعة الكبد والكلى في أعرق مستشفيات الهند.",
        "organ.section_liver": "خبراء زراعة الكبد",
        "organ.section_kidney": "خبراء زراعة الكلى",
        "organ.k_dr1_name": "د. سانديب جوليريا",
        "organ.k_dr1_role": "استشاري أول - جراحة زراعة الكلى",
        "organ.k_dr1_exp": "خبرة أكثر من ٣٣ عاماً",
        "organ.k_dr1_desc": "أجرى أول عمليتي زراعة كلى وبنكرياس ناجحتين في الهند. رائد في مجال زراعة الكلى بنسب نجاح فائقة.",
        "organ.k_dr2_name": "د. راجيش أهلوات",
        "organ.k_dr2_role": "رئيس مجلس الإدارة - جراحة المسالك وزراعة الكلى",
        "organ.k_dr2_exp": "رائد أول عملية زراعة كلى روبوتية في العالم",
        "organ.k_dr2_desc": "قائد عالمي في جراحة المسالك البولية بالتدخل الدقيق. خبير في زراعة الكلى بالروبوت والجراحات الترميمية المعقدة.",
        "organ.k_dr3_name": "د. أنانت كومار",
        "organ.k_dr3_role": "رئيس قسم جراحة المسالك والروبوت وزراعة الكلى",
        "organ.k_dr3_exp": "٣٥+ سنة خبرة، أجرى أكثر من ٣,٥٠٠ عملية زراعة كلى",
        "organ.k_dr3_desc": "متخصص في زراعة الكلى بمساعدة الروبوت وأورام المسالك البولية. معروف بإجراء أكثر من ٢,٢٠٠ جراحة استئصال للمتبرع بالمنظار.",

        // Subpages - Pediatric Heart
        "pediatric.heading": "أخصائيو طب وجراحة قلب الأطفال",
        "pediatric.subtext": "تواصل مع كبار أطباء وجراحي قلب الأطفال ذوي الخبرة الطويلة في علاج الحالات المعقدة والعيوب الخلقية.",
        "pediatric.dr1_name": "د. أمتوز سينغ بايدوان",
        "pediatric.dr1_role": "استشاري أمراض قلب الأطفال",
        "pediatric.dr1_exp": "خبير في طب قلب الأطفال والأجنة",
        "pediatric.dr1_desc": "تدريب متقدم من تشيناي. معروف بعمله المتميز في تشخيص وعلاج أمراض القلب للأطفال.",
        "pediatric.dr2_name": "د. كريشنا سوبراموني آير",
        "pediatric.dr2_role": "المدير التنفيذي - جراحة قلب الأطفال",
        "pediatric.dr2_exp": "٤٠+ سنة خبرة، أكثر من ١٠,٠٠٠ جراحة",
        "pediatric.dr2_desc": "رائد جراحة قلب الأطفال في الهند، متعد التخصصات في أمراض القلب الخلقية المعقدة مثل عمليات فونتان.",
        "pediatric.dr3_name": "د. راجيش شارما",
        "pediatric.dr3_role": "جراح قلب وصدر للأطفال",
        "pediatric.dr3_exp": "٣٠+ سنة خبرة، أكثر من ٢٠,٠٠٠ عملية",
        "pediatric.dr3_desc": "مشهود له في العلاج الجراحي لعيوب القلب الخلقية المعقدة لدى الأطفال والبالغين.",
        "pediatric.dr4_name": "د. سوريش راو",
        "pediatric.dr4_role": "مدير مركز قلب الأطفال",
        "pediatric.dr4_exp": "خبرة أكثر من ٣٥ عاماً",
        "pediatric.dr4_desc": "متخصص في جراحة قلب حديثي الولادة وابتكار تقنيات حديثة في تصحيح التشوهات الخلقية.",
        "pediatric.dr5_name": "د. موثو جوثي",
        "pediatric.dr5_role": "كبير جراحي قلب وصدر الأطفال",
        "pediatric.dr5_exp": "خبرة أكثر من ٢٦ عاماً",
        "pediatric.dr5_desc": "خبير في جراحات الأطفال بالتدخل الدقيق، مما يضمن تعافياً أسرع ودقة جراحية عالية.",
        "pediatric.dr6_name": "د. ديفي براساد شيتي",
        "pediatric.dr6_role": "مؤسس واستشاري أول جراحة القلب",
        "pediatric.dr6_exp": "٤٠+ سنة خبرة، أكثر من ١٢٠,٠٠٠ عملية قلب",
        "pediatric.dr6_desc": "رمز عالمي في تقديم الرعاية القلبية الفائقة. متخصص في جراحات قلب الأطفال المعقدة وحلول الرعاية المبتكرة.",

        // Footer & Floating Widget
        "footer.desc": "جسركم الموثوق للحصول على أفضل علاج طبي في الهند. نتحمل كافة الترتيبات اللوجستية لتتفرغوا للشفاء.",
        "footer.quick_links": "روابط سريعة",
        "footer.link_about": "من نحن",
        "footer.link_services": "خدماتنا",
        "footer.link_testimonials": "تجارب المرضى",
        "footer.legal": "الشروط والأحكام",
        "footer.privacy": "سياسة الخصوصية",
        "footer.terms": "شروط الخدمة",
        "footer.direct_contact": "الاتصال المباشر (العراق والدول العربية)",
        "footer.avail_note": "متواجدون على مدار ٢٤ ساعة لاستفسارات المرضى من العراق.",
        "widget.badge": "تحدث معنا",
        "widget.title": "منسق طبي على مدار الساعة",
        "widget.subtext": "تواصل مع فريق التنسيق الطبي مباشرة — نحن هنا لمساعدتك في التخطيط لرحلتك العلاجية من العراق إلى الهند.",
        "widget.btn_primary": "افتح محادثة الواتساب",
        "widget.btn_web": "مراسلة عبر واتساب ويب"
    }
};

/**
 * Utility to convert English digits to Arabic digits (٠-٩)
 */
function convertDigitsToArabic(str) {
    if (typeof str !== 'string') return str;
    const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return str.replace(/[0-9]/g, w => arabicDigits[+w]);
}

/**
 * Applies selected language to the DOM
 * @param {string} lang - 'en' or 'ar'
 */
function applyLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    
    // Save state
    localStorage.setItem('medconnect_lang', lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Update body font styling
    if (lang === 'ar') {
        document.body.classList.add('font-arabic');
    } else {
        document.body.classList.remove('font-arabic');
    }

    // Update all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (key.startsWith('meta.')) {
                if (el.tagName === 'TITLE') {
                    document.title = translations[lang][key];
                } else if (el.tagName === 'META') {
                    el.setAttribute('content', translations[lang][key]);
                }
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });

    // Ensure phone numbers maintain LTR bidi isolation in both languages
    const phoneElems = document.querySelectorAll('.phone-number, .whatsapp-number, [data-phone]');
    phoneElems.forEach(el => {
        el.setAttribute('dir', 'ltr');
        el.style.unicodeBidi = 'isolate';
        el.style.display = 'inline-block';
    });

    // Update Language Toggle Button Label
    const langBtnLabel = document.getElementById('lang-toggle-text');
    if (langBtnLabel) {
        langBtnLabel.textContent = translations[lang]['nav.lang_toggle'];
    }
}

/**
 * Toggle Language between English and Arabic
 */
function toggleLanguage() {
    const currentLang = localStorage.getItem('medconnect_lang') || 'en';
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    applyLanguage(newLang);
}

// Auto Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    // Detect preferred or saved language
    const savedLang = localStorage.getItem('medconnect_lang');
    let targetLang = 'en';

    if (savedLang) {
        targetLang = savedLang;
    } else {
        // Auto-detect browser language if Arabic
        const navLang = navigator.language || (navigator.languages && navigator.languages[0]) || '';
        if (navLang.toLowerCase().startsWith('ar')) {
            targetLang = 'ar';
        }
    }

    applyLanguage(targetLang);
});

