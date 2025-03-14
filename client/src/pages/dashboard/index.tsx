import { useAuth } from "@/hooks/use-auth";
import { useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Menu,
  Hotel,
  Map,
  Package,
  LogOut,
  Home,
  Calendar,
  Users,
  Settings,
  PieChart,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  {
    name: "Reservas Totales",
    value: "0",
    icon: Calendar,
    description: "Este mes",
  },
  {
    name: "Ingresos",
    value: "$0",
    icon: PieChart,
    description: "Este mes",
  },
  {
    name: "Clientes",
    value: "0",
    icon: Users,
    description: "Total activos",
  },
];

const quickActions = [
  {
    name: "Nueva Reserva",
    icon: Calendar,
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    name: "Añadir Hotel",
    icon: Hotel,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    name: "Crear Tour",
    icon: Map,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    name: "Nuevo Paquete",
    icon: Package,
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
];

export default function DashboardPage() {
  const { user, logoutMutation } = useAuth();
  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel
        defaultSize={20}
        collapsible
        minSize={10}
        maxSize={20}
        onCollapse={() => setCollapsed(true)}
        onExpand={() => setCollapsed(false)}
        className="bg-muted"
      >
        <div className="h-screen flex flex-col">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between mb-4">
              <h1
                className={cn(
                  "font-bold transition-all",
                  collapsed ? "text-sm" : "text-xl"
                )}
              >
                {collapsed ? "JT" : "JepiTravel"}
              </h1>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCollapsed(!collapsed)}
              >
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <nav className="flex-1 p-4 space-y-2">
            <Button
              variant="ghost"
              className="w-full justify-start"
              size={collapsed ? "icon" : "default"}
            >
              <Home className="h-4 w-4" />
              {!collapsed && <span className="ml-2">Inicio</span>}
            </Button>

            {user?.settings.sellsHotels && (
              <Button
                variant="ghost"
                className="w-full justify-start"
                size={collapsed ? "icon" : "default"}
              >
                <Hotel className="h-4 w-4" />
                {!collapsed && <span className="ml-2">Hoteles</span>}
              </Button>
            )}

            {user?.settings.sellsTours && (
              <Button
                variant="ghost"
                className="w-full justify-start"
                size={collapsed ? "icon" : "default"}
              >
                <Map className="h-4 w-4" />
                {!collapsed && <span className="ml-2">Tours</span>}
              </Button>
            )}

            {user?.settings.sellsPackages && (
              <Button
                variant="ghost"
                className="w-full justify-start"
                size={collapsed ? "icon" : "default"}
              >
                <Package className="h-4 w-4" />
                {!collapsed && <span className="ml-2">Paquetes</span>}
              </Button>
            )}

            <Button
              variant="ghost"
              className="w-full justify-start"
              size={collapsed ? "icon" : "default"}
            >
              <Settings className="h-4 w-4" />
              {!collapsed && <span className="ml-2">Configuración</span>}
            </Button>
          </nav>

          <div className="p-4 border-t">
            <Button
              variant="ghost"
              className="w-full justify-start"
              size={collapsed ? "icon" : "default"}
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" />
              {!collapsed && <span className="ml-2">Cerrar Sesión</span>}
            </Button>
          </div>
        </div>
      </ResizablePanel>

      <ResizableHandle />

      <ResizablePanel defaultSize={80} minSize={30}>
        <div className="h-screen overflow-auto">
          <div className="p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">
                Bienvenido, {user?.businessName}
              </h2>
              <p className="text-muted-foreground">
                Panel de control de tu {user?.businessType === 'hotel' ? 'hotel' : 
                  user?.businessType === 'travel_agency' ? 'agencia de viajes' : 'hotel y agencia'}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3 mb-8">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <Card key={stat.name}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        {stat.name}
                      </CardTitle>
                      <Icon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <p className="text-xs text-muted-foreground">
                        {stat.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Acciones Rápidas</h3>
              <div className="grid gap-4 md:grid-cols-4">
                {quickActions.map((action) => (
                  <Button
                    key={action.name}
                    variant="outline"
                    className="h-24 flex flex-col items-center justify-center gap-2"
                  >
                    <div className={cn("p-2 rounded-full", action.bgColor)}>
                      <action.icon className={cn("h-6 w-6", action.color)} />
                    </div>
                    <span className="text-sm">{action.name}</span>
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Últimas Reservas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground py-8">
                    No hay reservas recientes
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Actividad Reciente</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground py-8">
                    No hay actividad reciente
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}