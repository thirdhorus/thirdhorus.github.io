const translations = {
  en: {
    title: "Hi, I'm Ahmed Sghaier",
    subtitle: "Web Developer focused on building modern, responsive, and interactive websites.",
    aboutTitle: "About Me",
    aboutText: "Motivated computer science student passionate about web development and modern technologies.",
    skills: "Skills",
    frontend: "Frontend",
    tools: "Tools",
    learning: "Currently Learning",
    languages: "Languages",
    arabic: "Arabic — C2",
    english: "English — C2",
    french: "French — B1",
    spanish: "Spanish — A2",
    projects: "Projects",
    projectPortfolioTitle: "Personal Portfolio Website",
    projectSchoolTitle: "High School Website Assistant",
    projectGtaTitle: "GTA 6 Introduction Website Project",
    contact: "Contact",
    email: "Email",
    location: "📍Sousse Medina, Tunisia\n✉️ ahmed.websitedev@gmail.com",
    downloadCV: "Download CV"
  },
  fr: {
    title: "Salut, je suis Ahmed Sghaier",
    subtitle: "Développeur web spécialisé dans la création de sites modernes, responsives et interactifs.",
    aboutTitle: "À propos de moi",
    aboutText: "Étudiant en informatique motivé, passionné par le développement web et les technologies modernes.",
    skills: "Compétences",
    frontend: "Frontend",
    tools: "Outils",
    learning: "En cours d’apprentissage",
    languages: "Langues",
    arabic: "Arabe — C2",
    english: "Anglais — C2",
    french: "Français — B1",
    spanish: "Espagnol — A2",
    projects: "Projets",
    projectPortfolioTitle: "Site Portfolio Personnel",
    projectSchoolTitle: "Site d’Aide pour le Lycée",
    projectGtaTitle: "Site GTA 6",
    contact: "Contact",
    email: "Email",
    location: "📍Sousse Medina, Tunisie\n✉️ ahmed.websitedev@gmail.com",
    downloadCV: "Télécharger le CV"
  },
  ar: {
    title: "مرحباً، أنا أحمد الصغيّر",
    subtitle: "مطوّر ويب أركز على إنشاء مواقع حديثة، متجاوبة وتفاعلية.",
    aboutTitle: "نبذة عني",
    aboutText: "طالب إعلامية طموح وشغوف بتطوير الويب والتقنيات الحديثة.",
    skills: "المهارات",
    frontend: "الواجهة الأمامية",
    tools: "الأدوات",
    learning: "أتعلّم حالياً",
    languages: "اللغات",
    arabic: "العربية — C2",
    english: "الإنجليزية — C2",
    french: "الفرنسية — B1",
    spanish: "الإسبانية — A2",
    projects: "المشاريع",
    projectPortfolioTitle: "موقع السيرة الذاتية",
    projectSchoolTitle: "موقع مساعدة لطلبة المعاهد",
    projectGtaTitle: "موقع GTA 6",
    contact: "التواصل",
    email: "البريد الإلكتروني",
    location: "📍سوسة المدينة\n✉️ ahmed.websitedev@gmail.com",
    downloadCV: "تحميل السيرة الذاتية"
  }
};

function setLang(lang) {
  Object.keys(translations[lang]).forEach(key => {
    const el = document.getElementById(key);
    if (el) el.innerHTML = translations[lang][key].replace(/\n/g,'<br>');
  });
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  localStorage.setItem("lang", lang);
}

setLang(localStorage.getItem("lang") || "en");
