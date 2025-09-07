"use client";

import { useState } from "react";

const FinalCTA = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Est-ce que ClicDesign fonctionne vraiment ?",
      answer: "120+ marques utilisent ClicDesign quotidiennement. Nos clients voient en moyenne une augmentation de 156% de leur taux de clic et 2847€ de CA supplémentaire par mois. Essaie 7 jours gratuitement, tu verras par toi-même."
    },
    {
      question: "C'est quoi la différence avec Midjourney ?",
      answer: "Midjourney, c'est génial pour l'art. ClicDesign, c'est conçu spécifiquement pour l'e-commerce. Pas besoin de prompts compliqués, pas de résultats aléatoires. Tu uploads, tu choisis, tu télécharges. Point."
    },
    {
      question: "Mes visuels vont-ils ressembler à ceux de mes concurrents ?",
      answer: "Jamais. ClicDesign génère des visuels uniques basés sur ton produit, ta marque et tes préférences. Plus de 10 000 combinaisons possibles. Tes visuels seront aussi uniques que ton business."
    },
    {
      question: "Et si je ne suis pas satisfait ?",
      answer: "Remboursement intégral sous 30 jours, sans poser de questions. On préfère rembourser que d'avoir un client mécontent. Simple et honnête."
    }
  ];

  return (
    <section className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Final Quote */}
        <div className="text-center mb-16">
          <blockquote className="text-3xl sm:text-4xl lg:text-6xl font-bold text-cream mb-8 leading-tight">
            "Tu scrolles. Tu cliques.
            <span className="block text-electric-green">
              Et pendant ce temps, tes concurrents génèrent des visuels qui vendent."
            </span>
          </blockquote>
          
          <p className="text-xl text-cream/80 max-w-3xl mx-auto mb-12">
            Chaque minute que tu passes à hésiter, c'est une vente qui t'échappes. 
            <span className="text-electric-green font-semibold">Le temps, c'est ton ennemi.</span>
          </p>

          <button className="bg-electric-green text-navy font-bold text-xl px-12 py-6 rounded-xl cta-hover shadow-2xl animate-pulse-scale mb-8">
            Je teste ClicDesign maintenant
          </button>
          
          <p className="text-cream/60 text-sm">
            Essai gratuit 7 jours • Sans carte bancaire • Résultat garanti
          </p>
        </div>

        {/* Mini FAQ */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-cream text-center mb-8">
            Questions rapides
          </h3>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-cream/5 rounded-xl border border-cream/10 overflow-hidden">
                <button
                  className="w-full text-left px-6 py-4 focus:outline-none hover:bg-cream/10 transition-colors duration-200"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-cream font-semibold">{faq.question}</h4>
                    <div className={`text-electric-green font-bold text-xl transform transition-transform duration-200 ${openFAQ === index ? 'rotate-45' : ''}`}>
                      +
                    </div>
                  </div>
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-cream/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof Bar */}
        <div className="bg-electric-green rounded-2xl p-6 mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-navy font-bold text-lg">
                +47 entrepreneurs ont rejoint ClicDesign aujourd'hui
              </p>
              <p className="text-navy/70 text-sm">
                Ne reste pas sur la touche pendant que tes concurrents avancent
              </p>
            </div>
            <div className="flex -space-x-2">
              {[...Array(6)].map((_, i) => (
                <img 
                  key={i}
                  src={`https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/50abfe8a-4698-477a-ade3-17122a3ab8d0.png + 1}`}
                  alt={`Avatar utilisateur professionnel ${i + 1}`}
                  className="w-10 h-10 rounded-full border-2 border-navy"
                />
              ))}
              <div className="w-10 h-10 rounded-full bg-navy border-2 border-navy flex items-center justify-center">
                <span className="text-cream text-xs font-bold">+41</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-cream/20 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <h4 className="text-2xl font-bold text-electric-green mb-4">ClicDesign</h4>
              <p className="text-cream/80 text-sm mb-4 max-w-md">
                L'IA qui transforme tes produits en visuels e-commerce qui vendent. 
                Fini les designers chers, fini les visuels moches.
              </p>
              <div className="flex gap-4">
                <span className="text-cream/60 text-sm">🇫🇷 Made in France</span>
                <span className="text-cream/60 text-sm">⚡ Powered by AI</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="font-semibold text-cream mb-4">Produit</h5>
              <ul className="space-y-2 text-sm text-cream/70">
                <li><a href="#" className="hover:text-electric-green transition-colors">Fonctionnalités</a></li>
                <li><a href="#" className="hover:text-electric-green transition-colors">Tarifs</a></li>
                <li><a href="#" className="hover:text-electric-green transition-colors">Exemples</a></li>
                <li><a href="#" className="hover:text-electric-green transition-colors">API</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h5 className="font-semibold text-cream mb-4">Support</h5>
              <ul className="space-y-2 text-sm text-cream/70">
                <li><a href="#" className="hover:text-electric-green transition-colors">Centre d'aide</a></li>
                <li><a href="#" className="hover:text-electric-green transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-electric-green transition-colors">Statut</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-cream/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-cream/60 text-sm">
              © 2024 ClicDesign. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm text-cream/60">
              <a href="#" className="hover:text-electric-green transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-electric-green transition-colors">Confidentialité</a>
              <a href="#" className="hover:text-electric-green transition-colors">CGU</a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default FinalCTA;