"use client";

const Aspiration = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6">
            Ils l'ont compris : une bonne image,
            <span className="block text-electric-green">c'est 80% du boulot.</span>
          </h2>
        </div>

        {/* Before/After Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Before Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-red-600 text-center mb-8">❌ AVANT ClicDesign</h3>
            
            <div className="bg-gray-100 rounded-2xl p-8">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7aaa5953-0c03-4ea3-b068-a5faa2524fc9.png" 
                alt="Photo produit amateur sur fond blanc terne sans style ni professionalisme"
                className="w-full rounded-lg mb-6"
              />
              <div className="space-y-3 text-gray-600">
                <p className="flex items-center">❌ Photos ternes et sans âme</p>
                <p className="flex items-center">❌ 2000€/mois de designer</p>
                <p className="flex items-center">❌ 3 semaines d'attente</p>
                <p className="flex items-center">❌ Révisions infinies</p>
              </div>
            </div>
          </div>

          {/* After Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-electric-green text-center mb-8">✅ APRÈS ClicDesign</h3>
            
            <div className="bg-gradient-to-br from-cream to-green-light/20 rounded-2xl p-8 border-2 border-electric-green/30">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fd074b61-e5bb-41a9-a633-1362b2539e95.png" 
                alt="Mockup professionnel haut de gamme avec éclairage studio et packaging luxe"
                className="w-full rounded-lg mb-6"
              />
              <div className="space-y-3 text-navy">
                <p className="flex items-center">✅ Visuels premium en 30 secondes</p>
                <p className="flex items-center">✅ 29€/mois tout compris</p>
                <p className="flex items-center">✅ Génération instantanée</p>
                <p className="flex items-center">✅ Résultats parfaits du premier coup</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Quote */}
        <div className="bg-navy rounded-3xl p-8 lg:p-12 text-center mb-16">
          <blockquote className="text-2xl lg:text-4xl font-bold text-cream mb-8 leading-tight">
            "J'ai doublé mon taux de clic en 3 jours. Juste en changeant mes visuels avec ClicDesign."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <img 
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6204d78f-ed2b-46d3-8537-167b031d603d.png" 
              alt="Portrait professionnel homme entrepreneur confiant sourire"
              className="w-16 h-16 rounded-full"
            />
            <div className="text-left">
              <p className="text-cream font-semibold text-lg">Alexandre M.</p>
              <p className="text-green-light">CEO @TechDrops • 2.4M€ CA</p>
            </div>
          </div>
        </div>

        {/* Client Logos Grid */}
        <div className="text-center">
          <p className="text-navy-light text-lg mb-8">Ils nous font confiance</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {/* Fictitious client logos */}
            <div className="bg-navy/5 rounded-lg p-6 flex items-center justify-center">
              <span className="text-navy font-bold text-sm">DropZone</span>
            </div>
            <div className="bg-navy/5 rounded-lg p-6 flex items-center justify-center">
              <span className="text-navy font-bold text-sm">EcoShop</span>
            </div>
            <div className="bg-navy/5 rounded-lg p-6 flex items-center justify-center">
              <span className="text-navy font-bold text-sm">TechGear</span>
            </div>
            <div className="bg-navy/5 rounded-lg p-6 flex items-center justify-center">
              <span className="text-navy font-bold text-sm">StyleCo</span>
            </div>
            <div className="bg-navy/5 rounded-lg p-6 flex items-center justify-center">
              <span className="text-navy font-bold text-sm">BrandLux</span>
            </div>
            <div className="bg-navy/5 rounded-lg p-6 flex items-center justify-center">
              <span className="text-navy font-bold text-sm">ProShop</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aspiration;