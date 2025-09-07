"use client";

const Features = () => {
  const features = [
    {
      title: "Mockups réalistes",
      description: "Prêt pour Amazon / Shopify / TikTok",
      detail: "Génère des mockups ultra-réalistes avec ombres, reflets et éclairage professionnel. Tes produits semblent sortir d'un studio photo à 5000€/jour.",
      icon: "📱"
    },
    {
      title: "Visuels packagings en 30s",
      description: "Du concept au rendu fini",
      detail: "Upload ton produit, choisis ton style et boom ! Packaging premium ready en moins d'une minute. Plus de brief, plus d'attente.",
      icon: "📦"
    },
    {
      title: "Fonds personnalisables",
      description: "Crème, marbre, studio",
      detail: "Marbre italien, studio minimaliste, nature organique... Plus de 50 ambiances premium pour faire ressortir tes produits.",
      icon: "🎨"
    },
    {
      title: "Plus besoin de designer",
      description: "ni de Midjourney",
      detail: "Fini les prompts compliqués et les résultats aléatoires. ClicDesign comprend tes besoins e-commerce et livre exactement ce qu'il faut.",
      icon: "⚡"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-tight">
            Tu gagnes du temps.
            <span className="block text-electric-green">Tu gagnes de l'argent.</span>
          </h2>
          <p className="text-xl text-navy-light max-w-3xl mx-auto">
            Pendant que tes concurrents galèrent avec des visuels de merde, 
            toi tu génères du contenu qui convertit à 10%.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-navy/5 hover:border-electric-green/30 group">
              {/* Icon */}
              <div className="text-4xl mb-6 group-hover:animate-bounce-subtle">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-navy mb-3">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-electric-green font-semibold mb-4">
                {feature.description}
              </p>
              
              {/* Detail */}
              <p className="text-navy-light text-sm leading-relaxed">
                {feature.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Proof Section */}
        <div className="bg-navy rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Stats */}
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-cream mb-8">
                Les chiffres parlent
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-electric-green rounded-full w-12 h-12 flex items-center justify-center">
                    <span className="text-navy font-bold text-lg">3x</span>
                  </div>
                  <div>
                    <p className="text-cream font-semibold">Taux de conversion</p>
                    <p className="text-green-light text-sm">Moyenne observée sur 120 boutiques</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-electric-green rounded-full w-12 h-12 flex items-center justify-center">
                    <span className="text-navy font-bold text-lg">-80%</span>
                  </div>
                  <div>
                    <p className="text-cream font-semibold">Coût production</p>
                    <p className="text-green-light text-sm">vs agence design traditionnelle</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-electric-green rounded-full w-12 h-12 flex items-center justify-center">
                    <span className="text-navy font-bold text-lg">30s</span>
                  </div>
                  <div>
                    <p className="text-cream font-semibold">Temps de génération</p>
                    <p className="text-green-light text-sm">Du concept au fichier final</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6d659b77-5c17-4c90-ab44-e73c41d464d1.png" 
                alt="Dashboard ClicDesign interface moderne avec galerie de mockups générés IA"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-electric-green rounded-full px-4 py-2">
                <span className="text-navy font-bold text-sm">NOUVEAU</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;