import React, { useState } from 'react';

type Language = 'en' | 'nl';

interface Translation {
    greeting: string;
    intro: string;
    work: string;
    about: string;
    aboutText: string;
    contact: string;
    footer: string;
    footerRights: string;
}

interface Translations {
    [key: string]: Translation;
}

const translations: Translations = {
    en: {
        greeting: "Hello, I'm a Software Developer!",
        intro: "Crafting code from Amsterdam with a touch of Dutch design.",
        work: "My Projects",
        about: "Who Am I?",
        aboutText: "A 23-year-old enthusiast of all things code. Coffee lover by day, open-source contributor by night.",
        contact: "Get In Touch",
        footer: "Made with ☕ and 💻 in the heart of the Netherlands.",
        footerRights: "All rights reserved."
    },
    nl: {
        greeting: "Hallo, ik ben een softwareontwikkelaar!",
        intro: "Ik schrijf code vanuit Amsterdam met een vleugje Nederlands ontwerp.",
        work: "Mijn Projecten",
        about: "Wie ben ik?",
        aboutText: "Een 23-jarige enthousiasteling van alles wat met coderen te maken heeft. Koffieliefhebber bij dag, open-source bijdrager bij nacht.",
        contact: "Neem contact op",
        footer: "Gemaakt met ☕ en 💻 in het hart van Nederland.",
        footerRights: "Alle rechten voorbehouden."
    }
};
export default function Home() {
    const [language, setLanguage] = useState<Language>('en');

    const toggleLanguage = () => {
        setLanguage(lang => (lang === 'en' ? 'nl' : 'en'));
    };

    const t = translations[language];

    return (
      <div className="bg-[#FFD8CC] text-gray-700 min-h-screen p-8">
          <div className="container mx-auto">
              <button
                  onClick={toggleLanguage}
                  className="bg-gray-200 rounded px-4 py-2 mb-4"
              >
                  {language === 'en' ? 'NL' : 'EN'}
              </button>

              <header className="text-center mb-12">
                  <h1 className="text-6xl font-bold text-gray-800 mb-4">{t.greeting}</h1>
                  <p className="text-lg">{t.intro}</p>
              </header>

              <nav className="mb-12">
                  {/* ...navigation links */}
              </nav>

              <main>
                  <section id="work" className="mb-12">
                      <h2 className="text-4xl font-bold text-gray-800 mb-6">{t.work}</h2>
                      {/* ...projects */}
                  </section>

                  <section id="about" className="mb-12">
                      <h2 className="text-4xl font-bold text-gray-800 mb-6">{t.about}</h2>
                      <p className="text-lg leading-relaxed">
                          {t.aboutText}
                      </p>
                  </section>

                  <section id="contact" className="mb-12">
                      <h2 className="text-4xl font-bold text-gray-800 mb-6">{t.contact}</h2>
                      {/* ...contact form */}
                  </section>
              </main>

              <footer className="text-center mt-12">
                  <p>{t.footer}</p>
                  <p className="text-sm mt-4">© {new Date().getFullYear()} Dutch Developer. {t.footerRights}</p>
              </footer>
          </div>
      </div>
    );
}
