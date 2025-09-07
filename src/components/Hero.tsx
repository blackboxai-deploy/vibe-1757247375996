"use client";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-cream via-cream to-green-light/10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-electric-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-navy rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headlines */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-navy leading-tight mb-8">
            <span className="block">Crée des visuels e-commerce</span>
            <span className="block bg-gradient-to-r from-electric-green to-green-light bg-clip-text text-transparent">
              qui vendent pendant que tu dors
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-navy-light font-medium max-w-4xl mx-auto leading-relaxed mb-12">
            Fini les visuels moches. Fini les designers chers. 
            <span className="font-bold text-navy"> ClicDesign</span>, c'est ton générateur d'images produit IA.
          </p>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="bg-electric-green text-navy font-bold text-lg px-10 py-4 rounded-xl cta-hover shadow-lg hover:shadow-electric-green/30 transition-all duration-300">
            Commencer gratuitement
          </button>
          
          <button className="bg-transparent border-2 border-navy text-navy font-semibold text-lg px-10 py-4 rounded-xl cta-secondary transition-all duration-300">
            Voir la démo
          </button>
        </div>

        {/* Product Visual Preview */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-navy/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Product mockup examples */}
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-navy to-navy-light rounded-xl p-6 text-center">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3a91bf8c-c472-4658-aa30-26e2848f422d.png" 
                    alt="Mockup packaging luxe avec ombres réalistes et éclairage professionnel"
                    className="w-full rounded-lg mb-4"
                  />
                  <span className="text-cream font-medium text-sm">Packaging Premium</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-electric-green to-green-light rounded-xl p-6 text-center">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/efa696a9-2156-4931-872c-04364376f0af.png" 
                    alt="Mockup produit e-commerce sur fond marbre blanc style Amazon"
                    className="w-full rounded-lg mb-4"
                  />
                  <span className="text-navy font-medium text-sm">Visuel E-commerce</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-cream to-white rounded-xl p-6 text-center border border-navy/20">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0a09135f-0a8e-4d16-86d3-6ae777c165ed.png" 
                    alt="Studio professionnel mockup avec éclairage cinématique pour TikTok"
                    className="w-full rounded-lg mb-4"
                  />
                  <span className="text-navy font-medium text-sm">Contenu Social</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 text-center">
          <p className="text-navy-light text-sm mb-4">Rejoint par +120 marques et créateurs</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="text-navy font-semibold text-lg">Shopify</div>
            <div className="w-1 h-1 bg-navy rounded-full"></div>
            <div className="text-navy font-semibold text-lg">Amazon</div>
            <div className="w-1 h-1 bg-navy rounded-full"></div>
            <div className="text-navy font-semibold text-lg">TikTok Shop</div>
            <div className="w-1 h-1 bg-navy rounded-full"></div>
            <div className="text-navy font-semibold text-lg">Etsy</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;