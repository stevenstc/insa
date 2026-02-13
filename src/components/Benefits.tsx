import { Target, TrendingUp, Briefcase, Star } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Target,
      title: 'Protagonismo y Resultados',
      description: 'Tu eres el protagonista de tu estudio, con nuestra ayuda y asesoria vamos de la mano hacia tus metas académicas.',
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: TrendingUp,
      title: 'Avanza a tu Ritmo',
      description: 'Facilitamos tu camino con una metodología única, donde tu dedicación y criterio personal definen el alcance de tus logros.',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: Briefcase,
      title: 'Liderazgo y Emprendimiento',
      description: 'No solo obtienes un título; desarrollas un proyecto productivo diseñado para crear empresa, generar empleo y transformar la vida de otros.',
      color: 'from-secondary-500 to-secondary-600',
    },
    {
      icon: Star,
      title: 'Profesores Experimentados',
      description: 'Nuestro equipo docente cuenta con años de experiencia en educación para todos nuestros estudiantes.',
      color: 'from-accent-500 to-accent-600',
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Beneficios que Transforman Vidas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Más que estudios, te ofrecemos una oportunidad de cambiar tu futuro
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-90 group-hover:opacity-100 transition-opacity`}></div>

              <div className="relative p-10 text-white">
                <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform">
                  <benefit.icon size={40} />
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {benefit.title}
                </h3>

                <p className="text-lg opacity-90">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
