import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/9779857085058"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[hsl(142,70%,49%)] hover:bg-[hsl(142,70%,44%)] p-3.5 rounded-full shadow-elevated hover:shadow-lg transition-all duration-200 hover:scale-110 active:scale-100"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="text-accent-foreground w-5 h-5" />
  </a>
);

export default WhatsAppButton;
