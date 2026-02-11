import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'María González',
      grade: 'Graduada 11°',
      text: 'Después de 15 años sin estudiar, INSA me dio la oportunidad de completar mi bachillerato. Los profesores son increíbles y los horarios se adaptaron perfecto a mi trabajo.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Carlos Ramírez',
      grade: 'Estudiante 10°',
      text: 'Nunca pensé que podría volver a estudiar. Gracias a INSA estoy a punto de lograr mi sueño de ser bachiller y poder estudiar en la universidad.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Ana Martínez',
      grade: 'Graduada 11°',
      text: 'La flexibilidad de horarios fue clave para mí. Pude trabajar y estudiar al mismo tiempo. Ahora tengo mejores oportunidades laborales.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-primary-900 to-primary-700">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Historias de Éxito
          </h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Conoce a quienes ya transformaron sus vidas con INSA
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <Quote size={40} className="text-primary-600 mb-4" />

              <p className="text-gray-700 mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-primary-100"
                />
                <div>
                  <h4 className="font-bold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-primary-600">
                    {testimonial.grade}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
