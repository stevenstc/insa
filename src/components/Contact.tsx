import { MessageCircle, Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const whatsappNumber = '573001234567';
  const whatsappMessage = encodeURIComponent(
    '¡Hola! Me interesa obtener más información sobre los programas del Instituto INSA.'
  );

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:contacto@institutoinsa.edu.co?subject=Consulta sobre programas INSA';
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            ¡Da el Primer Paso Hoy!
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Contáctanos y descubre cómo podemos ayudarte a alcanzar tus metas educativas
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Información de Contacto
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Phone size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Teléfono</p>
                      <p className="text-gray-600">+57 300 123 4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <MessageCircle size={24} className="text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">WhatsApp</p>
                      <p className="text-gray-600">+57 300 123 4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <Mail size={24} className="text-orange-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <p className="text-gray-600">contacto@institutoinsa.edu.co</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 p-3 rounded-full">
                      <MapPin size={24} className="text-red-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Ubicación</p>
                      <p className="text-gray-600">Calle 123 #45-67, Tu Ciudad</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl border-2 border-yellow-200">
                <h4 className="font-bold text-gray-800 mb-2">Horario de Atención</h4>
                <p className="text-gray-700">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-700">Sábados: 9:00 AM - 2:00 PM</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">
                ¿Listo para Comenzar?
              </h3>

              <p className="text-lg mb-8 opacity-90">
                Contacta con nosotros por tu medio preferido y un asesor te responderá de inmediato para resolver todas tus dudas.
              </p>

              <div className="space-y-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg"
                >
                  <MessageCircle size={24} />
                  Escribir por WhatsApp
                </button>

                <button
                  onClick={handleEmailClick}
                  className="w-full bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg"
                >
                  <Send size={24} />
                  Enviar Email
                </button>
              </div>

              <div className="mt-8 pt-8 border-t border-blue-400">
                <p className="text-center text-sm opacity-90">
                  🎓 Recibe una asesoría gratuita personalizada
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
