import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappNumber = '573001234567';
  const whatsappMessage = encodeURIComponent(
    '¡Hola! Me interesa obtener más información sobre los programas del Instituto INSA.'
  );

  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 animate-bounce-slow"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={32} />
    </button>
  );
}
