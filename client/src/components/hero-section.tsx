import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-background pt-20 pb-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="text-transparent bg-clip-text hero-gradient">
                Transforma
              </span>{" "}
              tu negocio turístico
            </h1>
            <p className="mt-6 text-xl text-secondary">
              El sistema de reservas completo para hoteles y agencias de viajes. 
              Gestiona habitaciones, tours y crea paquetes personalizados en un solo lugar.
            </p>
            <div className="mt-8">
              <Link href="/auth">
                <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90">
                  Prueba Gratis
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-lg" />
            <img
              src="https://images.unsplash.com/photo-1445991842772-097fea258e7b"
              alt="Habitación de Hotel de Lujo"
              className="rounded-lg shadow-2xl relative"
            />
          </div>
        </div>
      </div>
    </div>
  );
}