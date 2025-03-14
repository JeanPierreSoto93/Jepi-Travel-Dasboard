import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-background pt-20 pb-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                Transform
              </span>{" "}
              your travel business
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              The complete booking system for hotels and travel agencies. Manage
              rooms, tours, and create custom packages all in one place.
            </p>
            <div className="mt-8">
              <Link href="/auth">
                <Button size="lg" className="text-lg px-8">
                  Start Your Free Trial
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1445991842772-097fea258e7b"
              alt="Luxury Hotel Room"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
