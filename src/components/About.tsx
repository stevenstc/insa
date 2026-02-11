import { Heart, Users, Award, Clock } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Heart,
      title: 'Educación con Propósito',
      description: 'Brindamos apoyo personalizado para cada estudiante',
    },
    {
      icon: Users,
      title: 'Grupos Reducidos',
      description: 'Atención individualizada en grupos pequeños',
    },
    {
      icon: Award,
      title: 'Certificación Oficial',
      description: 'Título de bachiller avalado por el Ministerio de Educación',
    },
    {
      icon: Clock,
      title: 'Horarios Flexibles',
      description: 'Adaptamos los horarios a tu disponibilidad',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            ¿Por Qué Elegir INSA?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Somos más que un instituto, somos tu aliado en el camino hacia un futuro mejor
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-white border-2 border-primary-100 hover:border-primary-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-primary-700 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto transform transition-transform hover:rotate-12">
                <feature.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
