"use client";

const SocialProof = () => {
  const testimonials = [
    {
      name: "Marie C.",
      role: "Founder @BeautyBox",
      revenue: "1.2M€ CA",
      avatar: "Portrait+femme+entrepreneure+souriante+professionnelle+confiance",
      content: "Mes packagings ressemblent enfin à ceux de Sephora. Mes clients pensent que j'ai embauché une agence à 10k€/mois.",
      rating: 5
    },
    {
      name: "Thomas L.",
      role: "Dropshipper Pro",
      revenue: "800k€ CA",
      avatar: "Portrait+homme+jeune+entrepreneur+déterminé+regard+perçant",
      content: "J'ai multiplié mes ventes par 4 en changeant juste mes visuels Amazon. ClicDesign, c'est ma machine à cash.",
      rating: 5
    },
    {
      name: "Sarah K.",
      role: "Agence Shopify",
      revenue: "150 clients",
      avatar: "Portrait+femme+business+élégante+executive+professionnelle",
      content: "Mes clients me prennent pour une magicienne. Je livre des visuels dingues en 24h au lieu de 3 semaines.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cream mb-6">
            +120 marques et créateurs
            <span className="block text-electric-green">utilisent déjà ClicDesign</span>
          </h2>
          <p className="text-xl text-cream/80 max-w-3xl mx-auto">
            Ils ont arrêté de galérer avec des visuels moches. Et toi ?
          </p>
        </div>

        {/* Screenshots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-cream rounded-2xl p-6">
            <img 
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d1f288fa-0209-40e5-85ff-4233414eaa00.png" 
              alt="Capture écran dashboard ClicDesign avec templates mockups e-commerce"
              className="w-full rounded-lg mb-4"
            />
            <p className="text-navy text-sm font-medium text-center">Interface ultra-intuitive</p>
          </div>
          
          <div className="bg-cream rounded-2xl p-6">
            <img 
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e271624e-4a4d-4aef-a0d4-929dd377f3ce.png" 
              alt="Galerie résultats avant après transformation visuels produits IA"
              className="w-full rounded-lg mb-4"
            />
            <p className="text-navy text-sm font-medium text-center">Résultats bluffants</p>
          </div>
          
          <div className="bg-cream rounded-2xl p-6">
            <img 
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/80d3b011-7443-4965-ac41-6735eb6582bf.png" 
              alt="Export haute définition mockups prêts Amazon Shopify réseaux sociaux"
              className="w-full rounded-lg mb-4"
            />
            <p className="text-navy text-sm font-medium text-center">Export multi-formats</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <img 
                  src={`https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4677a11a-0925-4f17-96c7-a1d701c0af07.png}`}
                  alt={testimonial.avatar.replace(/\+/g, ' ')}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-navy">{testimonial.name}</h4>
                  <p className="text-navy-light text-sm">{testimonial.role}</p>
                  <p className="text-electric-green text-sm font-semibold">{testimonial.revenue}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-electric-green">⭐</span>
                ))}
              </div>
              
              <p className="text-navy-light leading-relaxed text-sm">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

        {/* Scarcity Alert */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-center border-l-4 border-electric-green">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-electric-green rounded-full w-4 h-4 animate-pulse mr-3"></div>
            <span className="text-cream font-bold text-lg">ALERTE PLACES LIMITÉES</span>
            <div className="bg-electric-green rounded-full w-4 h-4 animate-pulse ml-3"></div>
          </div>
          
          <h3 className="text-2xl lg:text-3xl font-bold text-cream mb-4">
            Places beta limitées : 20 comptes gratuits restants ce mois-ci.
          </h3>
          
          <p className="text-cream/90 mb-6">
            Une fois les 20 places épuisées, les nouveaux utilisateurs devront attendre le mois prochain... 
            ou passer directement en Pro.
          </p>
          
          <div className="bg-cream/20 rounded-xl p-4 mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-cream text-sm">Places restantes</span>
              <span className="text-electric-green font-bold">20/100</span>
            </div>
            <div className="w-full bg-cream/30 rounded-full h-3">
              <div className="bg-gradient-to-r from-electric-green to-green-light h-3 rounded-full" style={{width: '20%'}}></div>
            </div>
          </div>
          
          <button className="bg-electric-green text-navy font-bold text-lg px-8 py-4 rounded-xl cta-hover shadow-lg animate-pulse-scale">
            Je réserve ma place maintenant
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;