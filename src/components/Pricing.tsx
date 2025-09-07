"use client";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Gratuit",
      price: "0€",
      period: "pour commencer",
      description: "Parfait pour tester et valider ton concept",
      features: [
        "10 images/mois",
        "Accès limité aux templates",
        "Sans watermark",
        "Export en HD",
        "Support communauté"
      ],
      buttonText: "Commencer",
      buttonStyle: "bg-navy text-cream cta-secondary",
      popular: false
    },
    {
      name: "Pro",
      price: "29€",
      period: "/mois",
      description: "Pour les entrepreneurs qui veulent dominer",
      features: [
        "Images illimitées",
        "Tous les fonds et angles premium",
        "Templates exclusifs",
        "Support prioritaire",
        "Accès anticipé aux nouvelles features",
        "API pour automatisation",
        "Licence commerciale étendue"
      ],
      buttonText: "Je passe pro",
      buttonStyle: "bg-electric-green text-navy cta-hover",
      popular: true
    },
    {
      name: "Agence",
      price: "79€",
      period: "/mois",
      description: "Pour les agences et équipes",
      features: [
        "Tout du Pro +",
        "Jusqu'à 5 marques / 3 users",
        "Export PSD + formats customs",
        "Licence commerciale complète",
        "Formation équipe incluse",
        "Account manager dédié",
        "Intégration Shopify/WooCommerce"
      ],
      buttonText: "Devenir partenaire",
      buttonStyle: "bg-navy text-cream cta-secondary",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6">
            Investis dans tes visuels.
            <span className="block text-red-600">Pas dans tes regrets.</span>
          </h2>
          <p className="text-xl text-navy-light max-w-4xl mx-auto leading-relaxed">
            Pendant que tu hésites, tes concurrents raflent tes clients avec des visuels qui tuent. 
            <span className="font-bold text-navy">Le temps, c'est de l'argent.</span>
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-3xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-2xl ${plan.popular ? 'border-electric-green scale-105' : 'border-navy/10 hover:border-electric-green/50'}`}>
              
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-electric-green text-navy px-6 py-2 rounded-full text-sm font-bold animate-bounce-subtle">
                    LE + POPULAIRE
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-navy mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl lg:text-5xl font-black text-navy">{plan.price}</span>
                  <span className="text-navy-light text-lg">{plan.period}</span>
                </div>
                <p className="text-navy-light text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* Features List */}
              <div className="mb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="bg-electric-green rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-navy text-xs">✓</span>
                      </div>
                      <span className="text-navy-light text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${plan.buttonStyle}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Reassurance */}
        <div className="text-center mb-12">
          <p className="text-navy-light text-sm mb-8">
            Sans engagement. Résiliable en 1 clic.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="bg-electric-green rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-navy text-sm">✓</span>
              </div>
              <span className="text-navy font-medium">7 jours d'essai gratuit</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="bg-electric-green rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-navy text-sm">✓</span>
              </div>
              <span className="text-navy font-medium">Support 24/7</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="bg-electric-green rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-navy text-sm">✓</span>
              </div>
              <span className="text-navy font-medium">Remboursé si pas satisfait</span>
            </div>
          </div>
        </div>

        {/* Final Push */}
        <div className="bg-navy rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-cream mb-6">
            La question n'est pas "est-ce que ça marche ?"
          </h3>
          <p className="text-xl text-cream/90 mb-8">
            La question c'est : "combien tu perds chaque jour sans ClicDesign ?"
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-electric-green mb-2">2847€</div>
              <div className="text-cream/80 text-sm">CA moyen supplémentaire/mois</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-electric-green mb-2">156%</div>
              <div className="text-cream/80 text-sm">Augmentation du taux de clic</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-electric-green mb-2">30j</div>
              <div className="text-cream/80 text-sm">Pour voir les premiers résultats</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;