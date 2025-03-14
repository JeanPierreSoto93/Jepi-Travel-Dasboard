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
      <div className="flex items-center justify-center p-8">
        <Card className="w-full max-w-lg">
          <CardHeader>
            <CardTitle>Bienvenido a JepiTravel</CardTitle>
            <CardDescription>
              Gestiona tu negocio turístico eficientemente con nuestra plataforma
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="register">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="register">Registrarse</TabsTrigger>
                <TabsTrigger value="login">Iniciar Sesión</TabsTrigger>
              </TabsList>
              <TabsContent value="register">
                <BusinessTypeForm mode="register" />
              </TabsContent>
              <TabsContent value="login">
                <BusinessTypeForm mode="login" />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      <div
        className="hidden md:block bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1517840901100-8179e982acb7")',
        }}
      />
    </div>
  );
}