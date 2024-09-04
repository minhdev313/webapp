import { ErrorBoundary } from "@/components";
import { MainLayout } from "@/layouts";
import Majors from "@/pages/majors";
import { RouteObject } from "react-router-dom";

const MajorRoutes: RouteObject[] = [
  {
    path: "/majors",
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "",
        element: <Majors />,
      },
    ],
  },
];

export default MajorRoutes;
