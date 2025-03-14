import {
  Building2,
  Map,
  Package,
  Calendar,
  CreditCard,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Gestión Hotelera",
    description:
      "Administra tu inventario de hotel, tipos de habitaciones y precios con nuestra interfaz intuitiva.",
  },
  {
    icon: Map,
    title: "Operación de Tours",
    description:
      "Crea y gestiona tours, establece horarios y maneja reservas eficientemente.",
  },
  {
    icon: Package,
    title: "Creador de Paquetes",
    description:
      "Construye paquetes turísticos personalizados combinando hoteles, tours y actividades.",
  },
  {
    icon: Calendar,
    title: "Reservas Inteligentes",
    description:
      "Disponibilidad en tiempo real y confirmación instantánea para todos tus servicios.",
  },
  {
    icon: CreditCard,
    title: "Pagos Seguros",
    description:
      "Acepta pagos de forma segura con nuestro sistema de procesamiento integrado.",
  },
  {
    icon: BarChart3,
    title: "Análisis",
    description:
      "Obtén información detallada sobre el rendimiento de tu negocio y tendencias de reservas.",
  },
];

export default function FeaturesSection() {
  return (
    <div className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Todo lo que necesitas para administrar tu negocio turístico
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card p-6 rounded-lg border shadow-sm"
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}