
export default function Testimonials() {
  const testimonials = [
    {
      name: 'Cloud Lab',
      grade: 'Laboratorios virtuales',
      text: 'Después de 15 años sin estudiar, INSA me dio la oportunidad de completar mi bachillerato. Los profesores son increíbles y los horarios se adaptaron perfecto a mi trabajo.',
      image: 'https://cloudlabslearning.com/_next/image?url=%2Fbrand.webp&w=256&q=75',
      link: 'https://cloudlabslearning.com/'
    },
    {
      name: 'Holmwoods',
      grade: 'Certificacion en Ingles',
      text: 'Nunca pensé que podría volver a estudiar. Gracias a INSA estoy a punto de lograr mi sueño de ser bachiller y poder estudiar en la universidad.',
      image: 'holmwoods_logo.svg',
      link: 'https://lat.holmwoods.eu/'
    },
    {
      name: 'Emprendimiento',
      grade: 'Crea tu empresa',
      text: 'La flexibilidad de horarios fue clave para mí. Pude trabajar y estudiar al mismo tiempo. Ahora tengo mejores oportunidades laborales.',
      image: 'forjadores_logo.jpeg',
      link: 'https://ipforjadores.com/'
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-primary-900 to-primary-700">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Plataformas asociadas
          </h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Conoce las plataformas a las que tendras acceso para cambiar tu vida con INSA
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <a
              href={testimonial.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
          
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className=" h-20 object-cover border-4 border-primary-100"
                />
           

              <div className="flex items-center gap-4">
                
                <div>
                  <h4 className="font-bold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-primary-600">
                    {testimonial.grade}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
