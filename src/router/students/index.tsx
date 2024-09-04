import { ErrorBoundary } from "@/components";
import { MainLayout } from "@/layouts";
import { Students } from "@/pages";
import { RouteObject } from "react-router-dom";

const StudentRoutes: RouteObject[] = [
  {
    path: "/students",
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "",
        element: <Students />,
      },
    ],
  },
];

export default StudentRoutes;
