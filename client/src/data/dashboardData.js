import {
  Truck,
  CheckCircle,
  AlertTriangle,
  Route,
  Clock3,
  Users,
  TrendingUp,
} from "lucide-react";

export const vehicleTypes = [
  "All",
  "Light Truck",
  "Medium Truck",
  "Heavy Truck",
];

export const vehicleStatus = [
  "All",
  "Available",
  "On Trip",
  "In Shop",
];

export const dashboardCards = [
  {
    id: 1,
    title: "Active Vehicles",
    value: 7,
    icon: Truck,
    color: "blue",
    growth: "+2",
  },
  {
    id: 2,
    title: "Available",
    value: 3,
    icon: CheckCircle,
    color: "green",
  },
  {
    id: 3,
    title: "In Maintenance",
    value: 2,
    icon: AlertTriangle,
    color: "orange",
  },
  {
    id: 4,
    title: "Active Trips",
    value: 1,
    icon: Route,
    color: "indigo",
    growth: "+1",
  },
  {
    id: 5,
    title: "Pending Trips",
    value: 2,
    icon: Clock3,
    color: "gray",
  },
  {
    id: 6,
    title: "Drivers On Duty",
    value: 3,
    icon: Users,
    color: "purple",
  },
  {
    id: 7,
    title: "Fleet Utilization",
    value: "29%",
    icon: TrendingUp,
    color: "green",
    growth: "+3%",
  },
];

export const fleetTrend = [
  {
    week: "Jun W1",
    utilization: 72,
  },
  {
    week: "Jun W2",
    utilization: 78,
  },
  {
    week: "Jun W3",
    utilization: 81,
  },
  {
    week: "Jun W4",
    utilization: 75,
  },
  {
    week: "Jul W1",
    utilization: 84,
  },
  {
    week: "Jul W2",
    utilization: 87,
  },
];

export const fleetStatus = [
  {
    name: "Available",
    value: 3,
    color: "#16a34a",
  },
  {
    name: "On Trip",
    value: 2,
    color: "#3b82f6",
  },
  {
    name: "In Shop",
    value: 2,
    color: "#f59e0b",
  },
  {
    name: "Retired",
    value: 1,
    color: "#94a3b8",
  },
];