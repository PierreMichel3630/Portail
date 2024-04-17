import { useRoutes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ApplicationPage } from "../pages/ApplicationPage";

export default function ThemeRoutes() {
  const routes = [
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          path: "/",
          element: <ApplicationPage />,
        },
      ],
    },
  ];
  return useRoutes([...routes]);
}
