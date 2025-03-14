import { useAuth } from "@/hooks/use-auth";
import { useEffect } from "react";
import { useLocation } from "wouter";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BusinessTypeForm from "@/components/business-type-form";
import OnboardingForm from "@/components/onboarding-form";

export default function AuthPage() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (user) {
      setLocation("/dashboard");
    }
  }, [user, setLocation]);

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      <div className="flex items-center justify-center p-8 bg-muted/30">
        <Card className="w-full max-w-lg mx-auto shadow-lg">
          <CardHeader className="space-y-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">
                <span className="text-primary font-bold">Jepi</span>
                <span className="font-bold">Travel</span>
              </CardTitle>
            </div>
            <CardDescription className="text-base">
              Gestiona tu negocio turístico de manera eficiente con nuestra plataforma integral
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="register" className="space-y-4">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="register">Registrarse</TabsTrigger>
                <TabsTrigger value="login">Iniciar Sesión</TabsTrigger>
              </TabsList>
              <TabsContent value="register">
                <OnboardingForm />
              </TabsContent>
              <TabsContent value="login">
                <BusinessTypeForm mode="login" />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      <div
        className="hidden md:block bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1517840901100-8179e982acb7")',
        }}
      >
        <div className="absolute inset-0 bg-primary/10 backdrop-blur-sm" />
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="max-w-lg text-white">
            <h2 className="text-4xl font-bold mb-4">
              Únete a la revolución del turismo digital
            </h2>
            <p className="text-lg opacity-90">
              Optimiza tus operaciones, aumenta tus ventas y ofrece una mejor experiencia a tus clientes con nuestra plataforma todo en uno.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}