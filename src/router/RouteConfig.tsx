import { Layout } from "@douyinfe/semi-ui";
import AppEchart from "../components/AppEchart";

export const router: RouteConfig[] = [
    {
        path: "/",
        auth: true,
        element: <Layout />,
        children: [
            { path: '/main', element: <AppEchart/>, auth: true}
        ]
    }
]