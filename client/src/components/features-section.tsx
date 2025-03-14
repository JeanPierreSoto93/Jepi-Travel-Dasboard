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
    title: "Hotel Management",
    description:
      "Manage your hotel inventory, room types, and pricing with our intuitive interface.",
  },
  {
    icon: Map,
    title: "Tour Operations",
    description:
      "Create and manage tours, set schedules, and handle bookings efficiently.",
  },
  {
    icon: Package,
    title: "Package Builder",
    description:
      "Build custom travel packages combining hotels, tours, and activities.",
  },
  {
    icon: Calendar,
    title: "Smart Booking",
    description:
      "Real-time availability and instant confirmation for all your services.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description:
      "Accept payments securely with our integrated payment processing system.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "Get detailed insights into your business performance and booking trends.",
  },
];

export default function FeaturesSection() {
  return (
    <div className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Everything you need to run your travel business
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
