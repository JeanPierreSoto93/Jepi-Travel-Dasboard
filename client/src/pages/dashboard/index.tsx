import { useAuth } from "@/hooks/use-auth";
import { useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, Hotel, Map, Package, LogOut } from "lucide-react";

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
        <div className="h-screen p-4">
          <div className="flex items-center justify-between mb-8">
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

          <nav className="space-y-2">
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
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" />
              {!collapsed && <span className="ml-2">Cerrar Sesión</span>}
            </Button>
          </nav>
        </div>
      </ResizablePanel>

      <ResizableHandle />

      <ResizablePanel defaultSize={80} minSize={30}>
        <div className="h-screen p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">
              Bienvenido, {user?.businessName}
            </h2>
            <p className="text-muted-foreground">
              Administra tu negocio de {user?.businessType === 'hotel' ? 'hotel' : 
                user?.businessType === 'travel_agency' ? 'agencia de viajes' : 'hotel y agencia'} aquí
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="col-span-3 p-8 rounded-lg border bg-card text-center">
              <p className="text-lg">
                ¡Tu panel está listo! Comienza agregando tu inventario.
              </p>
            </div>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}