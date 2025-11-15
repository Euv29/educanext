import educaNextLogo from 'figma:asset/07a23fbb90c02b06d57a2b7414480a1e8f7966ec.png';
import { useEffect } from 'react';
import { Instagram } from 'lucide-react';

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
        <div className="flex justify-center mb-16">
          <img 
            src={educaNextLogo} 
            alt="Educa Next Logo" 
            className="w-full max-w-md h-auto"
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
          <p className="text-gray-700 leading-relaxed text-left">
            A Next apresenta o EDUCANEXT, uma iniciativa sem fins lucrativos que marca a expansão da Next Youth World para o formato presencial. O evento reunirá jovens líderes, profissionais e especialistas para debater soluções inovadoras que unem educação, sustentabilidade e desenvolvimento socioeconómico.
          </p>
        </div>

        {/* Event Information */}
        <div className="text-center space-y-4 mb-16 px-[24px] py-[0px]">
          <p className="text-[#FF0000] text-xl uppercase font-bold">
            Evento presencial e gratuito
          </p>
          
          <p className="text-2xl text-gray-700 mt-6 uppercase font-bold">
            Save the date
          </p>
          
          <p className="text-5xl text-[#FF5722] mt-4 mb-6 uppercase font-bold text-[36px]">
            29 Novembro 2025
          </p>
          
          <p className="text-xl text-gray-800 uppercase font-bold">
            Local: Auditório do Talatona Shopping
          </p>
        </div>

        {/* Google Form Section */}
        <div className="mb-12">
          <div className="w-full max-w-[600px] mx-auto px-4">
            <h3 className="text-2xl text-center mb-6 uppercase">
              Inscreva-se agora
            </h3>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ minHeight: '500px' }}>
              <div data-tf-live="01KA41H7PW2Q4E9QBRYBK9A9SP"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-white border-t border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-6">
          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mb-6">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#FF5722] transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={32} />
            </a>
            <a 
              href="https://wa.me/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#FF5722] transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
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
  );
}