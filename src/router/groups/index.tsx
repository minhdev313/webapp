import { ErrorBoundary } from "@/components";
import { MainLayout } from "@/layouts";
import Groups from "@/pages/groups";
import { RouteObject } from "react-router-dom";

const GroupsRoutes: RouteObject[] = [
  {
    path: "/groups",
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "",
        element: <Groups />,
      },
      {
        path: ":id",
        element: <Groups />,
      },
    ],
  },
];

export default GroupsRoutes;
