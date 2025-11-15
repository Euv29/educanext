import educaNextLogo from 'figma:asset/07a23fbb90c02b06d57a2b7414480a1e8f7966ec.png';
import { useEffect } from 'react';
import { Instagram, Linkedin } from 'lucide-react';

export default function App() {
  useEffect(() => {
    // Load Typeform embed script
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden" style={{ fontFamily: "'Red Hat Display', sans-serif" }}>
      {/* Decorative geometric shapes in corners */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#E6E6E6] rounded-full opacity-30 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E6E6E6] rounded-full opacity-30 blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/4 right-0 w-48 h-48 bg-[#E6E6E6] opacity-20 blur-2xl translate-x-1/3"></div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <img 
            src={educaNextLogo} 
            alt="Educa Next Logo" 
            className="h-auto"
            style={{
              width: "clamp(200px, 20vw, 500px)" // ajuste conforme necessário
            }}
          />
        </div>

        {/* Topics Section */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-lg uppercase text-[#FFC000] font-black">Finanças</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg uppercase text-[#0077FF] font-black">Tecnologia</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg uppercase text-[#00B050] font-black">Sustentabilidade</span>
          </div>
        </div>

        {/* Description Text */}
        <div className="text-center max-w-3xl mx-auto mb-12 px-6">
          <p className="text-gray-700 leading-relaxed text-center">
            A Next apresenta o EDUCANEXT, uma iniciativa sem fins lucrativos que marca a expansão da Next Youth World para o formato presencial. O evento reunirá jovens líderes, profissionais e especialistas para debater soluções inovadoras que unem educação, sustentabilidade e desenvolvimento socioeconómico.
          </p>
        </div>

        {/* Event Information */}
        <div className="text-center space-y-4 mb-16 px-[24px] py-[0px]">
          <p className="text-[#FF0000] text-xl uppercase font-bold">
            Evento presencial e gratuito
          </p>
          
          <p className="text-5xl text-[#FF5722] mt-4 mb-6 uppercase font-black text-[36px]">
            29 Novembro 2025
          </p>

          <p className="text-xl text-gray-700 mt-6 uppercase font-bold">
            10H00
          </p>
          
          <p className="text-xl text-gray-800 uppercase font-bold">
            Local: Auditório do Talatona Shopping
          </p>
        </div>

        {/* Google Form Section */}
        <div className="mb-12">
          <div className="max-w-[600px] mx-auto">
            <h3 className="text-2xl text-center mb-6">
              Inscreve-te agora
            </h3>
            <div className="bg-white rounded-lg overflow-hidden h-auto">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSeN4DDoI7Bw6kgMx2qfRj86xqXKfR1B7DXy47aoe5x0dRkFXQ/viewform?embedded=true"
                width="100%"
                height="2000"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="w-full"
              >
                Carregando…
              </iframe>
            </div>
          </div>
        </div>

      {/* Footer */}
      <footer className="relative z-10 bg-white border-t border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-6">
          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mb-6">
            <a 
              href="https://www.instagram.com/nextyouthworld" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#FF5722] transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={32} />
            </a>

            <a href="https://www.linkedin.com/company/next-youth-world/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#FF5722] transition-colors duration-300"
              aria-label="LinkedIn" >
              <Linkedin size={32} />
            </a>
          </div>

          {/* Copyright Text */}
          <div className="text-center text-gray-600">
            <p className="uppercase">
              © 2025 NEXT | BY{' '}
              <a 
                href="https://supa-servicos.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#FF5722] hover:underline transition-all duration-300"
              >
                SUPA SERVICOS
              </a>
            </p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}