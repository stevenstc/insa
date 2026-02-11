import { BookOpen, CheckCircle } from 'lucide-react';

export default function Grades() {
  const grades = [
    {
      grade: 'Grado 6°',
      description: 'Inicia tu secundaria con bases sólidas',
      subjects: ['Matemáticas', 'Español', 'Ciencias', 'Sociales'],
    },
    {
      grade: 'Grado 7°',
      description: 'Desarrolla habilidades fundamentales',
      subjects: ['Álgebra', 'Literatura', 'Biología', 'Historia'],
    },
    {
      grade: 'Grado 8°',
      description: 'Profundiza en conocimientos clave',
      subjects: ['Geometría', 'Física', 'Química', 'Geografía'],
    },
    {
      grade: 'Grado 9°',
      description: 'Prepárate para la educación media',
      subjects: ['Trigonometría', 'Inglés', 'Filosofía', 'Ética'],
    },
    {
      grade: 'Grado 10°',
      description: 'Educación media con enfoque práctico',
      subjects: ['Cálculo', 'Economía', 'Política', 'Tecnología'],
    },
    {
      grade: 'Grado 11°',
      description: 'Alcanza tu título de bachiller',
      subjects: ['Estadística', 'Proyecto Final', 'ICFES', 'Orientación'],
    },
  ];

  return (
    <section id="grades" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Grados Disponibles
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Completa cualquier grado que necesites desde 6° hasta 11°
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {grades.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-primary-600"
            >
              <div className="flex items-center gap-3 mb-4">
                <BookOpen size={32} className="text-primary-600" />
                <h3 className="text-2xl font-bold text-gray-800">
                  {item.grade}
                </h3>
              </div>

              <p className="text-gray-600 mb-6">
                {item.description}
              </p>

              <div className="space-y-2">
                {item.subjects.map((subject, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-secondary-600" />
                    <span className="text-gray-700">{subject}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
