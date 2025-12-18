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
    projectPortfolioDesc: "My personal portfolio showcasing my skills, projects, and experience.",
    projectGtaTitle: "GTA 6 Website",
    projectGtaDesc: "An informational website presenting all known details about GTA 6 with a modern, game-inspired design.",
    projectSchoolTitle: "High School Help Website",
    projectSchoolDesc: "An educational website designed to help high school students with learning resources.",
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
    projectPortfolioDesc: "Mon portfolio personnel présentant mes compétences, projets et expérience.",
    projectGtaTitle: "Site GTA 6",
    projectGtaDesc: "Un site informatif présentant toutes les informations connues sur GTA 6 avec un design moderne inspiré du jeu.",
    projectSchoolTitle: "Site d’Aide pour le Lycée",
    projectSchoolDesc: "Un site éducatif conçu pour aider les élèves du lycée avec des ressources pédagogiques.",
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
    projectPortfolioDesc: "موقعي الشخصي الذي يعرض مهاراتي، مشاريعي وخبرتي.",
    projectGtaTitle: "موقع GTA 6",
    projectGtaDesc: "موقع معلوماتي يعرض كل التفاصيل المعروفة عن GTA 6 بتصميم حديث مستوحى من الألعاب.",
    projectSchoolTitle: "موقع مساعدة لطلبة المعاهد",
    projectSchoolDesc: "موقع تعليمي يهدف إلى مساعدة طلبة المعاهد من خلال موارد تعليمية.",
    downloadCV: "تحميل السيرة الذاتية"
  }
};

function setLang(lang) {
  Object.keys(translations[lang]).forEach(key => {
    const el = document.getElementById(key);
    if (el) el.innerText = translations[lang][key];
  });

  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  localStorage.setItem("lang", lang);
}
