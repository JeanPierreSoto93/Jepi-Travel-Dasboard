import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertUserSchema, BusinessType, InsertUser } from "@shared/schema";
import { useAuth } from "@/hooks/use-auth";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";

type Step = {
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    title: "Cuenta",
    description: "Crea tus credenciales de acceso",
  },
  {
    title: "Negocio",
    description: "Información de tu empresa",
  },
  {
    title: "Servicios",
    description: "Configura tus servicios",
  },
];

export default function OnboardingForm() {
  const [step, setStep] = useState(0);
  const { registerMutation } = useAuth();
  const form = useForm<InsertUser>({
    resolver: zodResolver(insertUserSchema),
    defaultValues: {
      settings: {
        sellsHotels: false,
        sellsTours: false,
        sellsPackages: false,
      },
    },
    mode: "onChange", // Validar al cambiar
  });

  const progress = ((step + 1) / steps.length) * 100;

  const onSubmit = async (data: InsertUser) => {
    try {
      if (step < steps.length - 1) {
        // Validar campos del paso actual antes de avanzar
        const fieldsToValidate = step === 0 
          ? ["username", "password"]
          : step === 1 
          ? ["businessName", "businessType", "email", "phone"]
          : ["settings"];

        const result = await form.trigger(fieldsToValidate as any);
        if (result) {
          setStep(step + 1);
        }
        return;
      }
      await registerMutation.mutateAsync(data);
    } catch (error) {
      console.error("Error en el formulario:", error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">{steps[step].title}</h2>
        <p className="text-muted-foreground">{steps[step].description}</p>
      </div>

      <Progress value={progress} className="h-2" />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {step === 0 && (
            <>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Usuario</FormLabel>
                    <FormControl>
                      <Input placeholder="usuario123" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          {step === 1 && (
            <>
              <FormField
                control={form.control}
                name="businessName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre del Negocio</FormLabel>
                    <FormControl>
                      <Input placeholder="Mi Hotel / Agencia" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="businessType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipo de Negocio</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona el tipo de negocio" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={BusinessType.HOTEL}>Hotel</SelectItem>
                        <SelectItem value={BusinessType.TRAVEL_AGENCY}>
                          Agencia de Viajes
                        </SelectItem>
                        <SelectItem value={BusinessType.HYBRID}>
                          Híbrido (Ambos)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Correo Electrónico</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="contacto@tuempresa.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Teléfono</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="+51 999 888 777" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="font-medium">¿Qué servicios ofreces?</h3>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="settings.sellsHotels"
                  render={({ field }) => (
                    <FormItem className="flex items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1">
                        <FormLabel>Hoteles</FormLabel>
                        <p className="text-sm text-muted-foreground">
                          Gestiona habitaciones, tarifas y disponibilidad
                        </p>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="settings.sellsTours"
                  render={({ field }) => (
                    <FormItem className="flex items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1">
                        <FormLabel>Tours</FormLabel>
                        <p className="text-sm text-muted-foreground">
                          Organiza tours y excursiones
                        </p>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="settings.sellsPackages"
                  render={({ field }) => (
                    <FormItem className="flex items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1">
                        <FormLabel>Paquetes</FormLabel>
                        <p className="text-sm text-muted-foreground">
                          Crea paquetes combinando hoteles y tours
                        </p>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            </div>
          )}

          <div className="flex justify-between pt-4">
            {step > 0 && (
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(step - 1)}
              >
                Anterior
              </Button>
            )}
            <Button
              type="submit"
              className="ml-auto bg-primary text-white hover:bg-primary/90"
              disabled={registerMutation.isPending}
            >
              {step === steps.length - 1 ? "Completar Registro" : "Siguiente"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}