import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import ContactSection from "@/components/contact-section";
import { Twitter, Linkedin, Facebook } from "lucide-react";

export default function LandingPage() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            <span className="text-primary">Jepi</span>Travel
          </h1>
          <div className="flex items-center gap-4">
            <a 
              href="https://jepi-travel-booking-engine.replit.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              Ver Demo
            </a>
            {user && (
              <a href="/dashboard">
                <Button variant="secondary">Panel de Control</Button>
              </a>
            )}
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <ContactSection />
      </main>

      <footer className="bg-muted py-16 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">JepiTravel</h3>
              <p className="text-muted-foreground">
                La plataforma líder en gestión de reservas para el sector turístico.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Producto</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Características</li>
                <li>Demo</li>
                <li>Seguridad</li>
                <li>Actualizaciones</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Documentación</li>
                <li>Guías</li>
                <li>API</li>
                <li>Estado</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Compañía</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Acerca de</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contacto</li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} JepiTravel. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}