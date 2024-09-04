import { createBrowserRouter } from "react-router-dom";
import AuthRoutes from "@/router/auth";
import HomeRoutes from "@/router/home";
import DashboardRoutes from "@/router/dashboard";
import SettingRoutes from "@/router/settings";
import CategoryRoutes from "@/router/categories";
import ProductRoutes from "./products";
import UserRoutes from "./users";
import MajorRoutes from "./majors";

const router = createBrowserRouter([
  ...AuthRoutes,
  ...HomeRoutes,
  ...DashboardRoutes,
  ...CategoryRoutes,
  ...ProductRoutes,
  ...UserRoutes,
  ...SettingRoutes,
  ...MajorRoutes
]);

export default router;
