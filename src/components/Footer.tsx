import {
  GraduationCap,
  Facebook,
  Instagram,
  // Youtube,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap size={32} className="text-accent-500" />
              <span className="text-2xl font-bold">INSA</span>
            </div>
            <p className="text-gray-400">
              Transformando vidas a través de la educación desde 2000.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#grades"
                  className="hover:text-white transition-colors"
                >
                  Grados
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="hover:text-white transition-colors"
                >
                  Beneficios
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-white transition-colors"
                >
                  Testimonios
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>+57 300 556 9131</li>
              <li>institucioneducativainsa@gmail.com</li>
              <li>Carrera 8 #21-12</li>
              <li>Pereira, Colombia</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61587602171445"
                className="bg-gray-800 p-3 rounded-full hover:bg-primary-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/insaestudio"
                className="bg-gray-800 p-3 rounded-full hover:bg-cyan-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
              {
                //<a
                //href="#"
                //className="bg-gray-800 p-3 rounded-full hover:bg-secondary-600 transition-colors"
                //>
                //<Youtube size={20} />
                //</a>
              }
              <a
                href="mailto:institucioneducativainsa@gmail.com"
                className="bg-gray-800 p-3 rounded-full hover:bg-accent-600 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Instituto INSA. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
