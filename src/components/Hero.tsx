import { GraduationCap, ArrowRight } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}


export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="flex justify-start mb-8 animate-bounce-slow lg:justify-start">
              <GraduationCap size={80} className="text-accent-500" />
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Conoce INSA
            </h1>

            <p className="text-2xl md:text-3xl mb-4 animate-fade-in-delay-1">
              Instituto Nacional del Saber
            </p>

            <p className="text-lg md:text-xl mb-12 opacity-90 animate-fade-in-delay-2">
              Completa tu educación desde grado 6° hasta 11°.
              Nunca es tarde para alcanzar tus metas educativas.
            </p>

            <button
              onClick={onContactClick}
              className="bg-accent-500 hover:bg-accent-600 text-primary-900 font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl inline-flex items-center gap-3 animate-fade-in-delay-3"
            >
              ¡Inscríbete Ahora!
              <ArrowRight size={24} />
            </button>
          </div>

          <div className="animate-fade-in-delay-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-accent-400 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
              <img
                src="/hero1.jpg"
                alt="Estudiante en campus"
                className="relative w-full h-auto rounded-2xl shadow-2xl object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
