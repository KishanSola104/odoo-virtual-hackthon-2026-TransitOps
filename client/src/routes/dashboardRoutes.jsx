import ManagerDashboard from "../pages/users/manager/ManagerDashboard";
import Vehicles from "../pages/users/manager/Vehicles";
import Drivers from "../pages/users/manager/Drivers";
import Trips from "../pages/users/manager/Trips";
import Maintenance from "../pages/users/manager/Maintenance";
import FuelExpenses from "../pages/users/manager/FuelExpenses";
import Reports from "../pages/users/manager/Reports";
import Settings from "../pages/users/manager/Settings";

// Driver
// import DriverDashboard from "../pages/users/driver/DriverDashboard";

// Safety Officer
// import SafetyDashboard from "../pages/users/safety-officer/SafetyDashboard";

// Financial Analyst
// import FinanceDashboard from "../pages/users/financial-analyst/FinanceDashboard";

export const dashboardRoutes = {
  "Fleet Manager": [
    {
      path: "",
      element: <ManagerDashboard />,
    },
    {
      path: "vehicles",
      element: <Vehicles />,
    },
    {
      path: "drivers",
      element: <Drivers />,
    },
    {
      path: "trips",
      element: <Trips />,
    },
    {
      path: "maintenance",
      element: <Maintenance />,
    },
    {
      path: "fuel",
      element: <FuelExpenses />,
    },
    {
      path: "reports",
      element: <Reports />,
    },
    {
      path: "settings",
      element: <Settings />,
    },
  ],

  // Driver: [
  //   {
  //     path: "",
  //     element: <DriverDashboard />,
  //   },
  // ],

  // "Safety Officer": [
  //   {
  //     path: "",
  //     element: <SafetyDashboard />,
  //   },
  // ],

  // "Financial Analyst": [
  //   {
  //     path: "",
  //     element: <FinanceDashboard />,
  //   },
  // ],
};