import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

const plans = [
  {
    name: "Starter",
    price: "49",
    features: [
      "Up to 100 bookings/month",
      "Basic reporting",
      "Email support",
      "Hotel OR tour management",
    ],
  },
  {
    name: "Professional",
    price: "99",
    features: [
      "Unlimited bookings",
      "Advanced analytics",
      "Priority support",
      "Hotel AND tour management",
      "Package builder",
      "API access",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Everything in Professional",
      "Custom development",
      "Dedicated account manager",
      "SLA guarantee",
      "White-label solution",
    ],
  },
];

export default function PricingSection() {
  return (
    <div className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Choose the right plan for your business
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
                  {plan.price !== "Custom" && (
                    <span className="text-muted-foreground">/month</span>
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
                  <Button className="w-full">Get Started</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
