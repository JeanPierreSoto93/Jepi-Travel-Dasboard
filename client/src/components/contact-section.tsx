import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Aquí iría la lógica para enviar el formulario
    // Por ahora solo mostraremos un toast de confirmación
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">¿Necesitas más información?</h2>
          <p className="text-lg text-muted-foreground">
            Contáctanos para una demostración personalizada o cualquier consulta sobre nuestra plataforma
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input placeholder="Nombre" required />
              </div>
              <div>
                <Input type="email" placeholder="Correo electrónico" required />
              </div>
              <div>
                <Input placeholder="Teléfono" required />
              </div>
              <div>
                <Textarea 
                  placeholder="Mensaje" 
                  className="min-h-[150px]" 
                  required 
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary text-white hover:bg-primary/90"
                disabled={isSubmitting}
              >
                Enviar mensaje
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Información de contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:9982212701" className="hover:text-primary">
                    (998) 221-2701
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:contacto@jepitravel.com" className="hover:text-primary">
                    contacto@jepitravel.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">¿Quieres ver el demo?</h3>
              <p className="text-muted-foreground mb-4">
                Prueba nuestra plataforma en acción y descubre todas sus funcionalidades.
              </p>
              <a 
                href="https://jepi-travel-booking-engine.replit.app/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-secondary text-white hover:bg-secondary/90">
                  Ver demo
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
