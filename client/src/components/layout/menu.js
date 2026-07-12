import {
  LayoutDashboard,
  Truck,
  Users,
  Route,
  Wrench,
  Fuel,
  BarChart3,
  Settings,
} from "lucide-react";

export const fleetManagerMenu = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Vehicles",
    path: "/dashboard/vehicles",
    icon: Truck,
  },
  {
    title: "Drivers",
    path: "/dashboard/drivers",
    icon: Users,
  },
  {
    title: "Trips",
    path: "/dashboard/trips",
    icon: Route,
  },
  {
    title: "Maintenance",
    path: "/dashboard/maintenance",
    icon: Wrench,
  },
  {
    title: "Fuel & Expenses",
    path: "/dashboard/fuel",
    icon: Fuel,
  },
  {
    title: "Reports",
    path: "/dashboard/reports",
    icon: BarChart3,
  },
  {
    title: "Settings",
    path: "/dashboard/settings",
    icon: Settings,
  },
];