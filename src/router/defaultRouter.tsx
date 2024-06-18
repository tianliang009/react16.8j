import Login from "@/src/page/Login";
import { RouteConfig } from "./routerUtils";

export const router: RouteConfig[] = [
  {
    path: "/auth/signin",
    element: <Login />,
    auth: false,
  },
  {
    path: "*",
    element: <Login />,
    auth: true,
  },
];
