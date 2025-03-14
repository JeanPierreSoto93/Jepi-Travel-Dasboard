import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import PricingSection from "@/components/pricing-section";

export default function LandingPage() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen">
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">JepiTravel</h1>
          <div className="flex items-center gap-4">
            {user ? (
              <Link href="/dashboard">
                <Button>Panel de Control</Button>
              </Link>
            ) : (
              <Link href="/auth">
                <Button>Empezar Ahora</Button>
              </Link>
            )}
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
      </main>
    </div>
  );
}