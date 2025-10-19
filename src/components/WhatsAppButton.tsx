import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = "96500000000"; // Kuwait format without +
    const message = encodeURIComponent("Hello, I'm interested in your interior fitout services.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full gradient-gold text-black flex items-center justify-center shadow-elegant hover:opacity-90 transition-all hover-scale animate-fade-in"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
    </button>
  );
};

export default WhatsAppButton;
