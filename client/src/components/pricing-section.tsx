import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

const plans = [
  {
    name: "Básico",
    price: "49",
    features: [
      "Hasta 100 reservas/mes",
      "Reportes básicos",
      "Soporte por email",
      "Gestión de hotel O tours",
    ],
  },
  {
    name: "Profesional",
    price: "99",
    features: [
      "Reservas ilimitadas",
      "Análisis avanzado",
      "Soporte prioritario",
      "Gestión de hoteles Y tours",
      "Creador de paquetes",
      "Acceso API",
    ],
  },
  {
    name: "Empresarial",
    price: "Personalizado",
    features: [
      "Todo en Profesional",
      "Desarrollo personalizado",
      "Gerente de cuenta dedicado",
      "Garantía de servicio",
      "Solución marca blanca",
    ],
  },
];

export default function PricingSection() {
  return (
    <div className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Elige el plan perfecto para tu negocio
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className="relative">
              <CardHeader>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">
                    ${plan.price}
                  </span>
                  {plan.price !== "Personalizado" && (
                    <span className="text-muted-foreground">/mes</span>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/auth">
                  <Button className="w-full">Comenzar</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
