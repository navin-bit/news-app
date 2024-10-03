import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import News from "../components/News";

import HealthList from "../components/HealthList";
import Health from "../components/Health";
import ScienceList from "../components/ScienceList";
import Science from "../components/Science";
import SportsList from "../components/SportsList";
import Sports from "../components/sports";
import TechnologyList from "../components/TechnologyList";
import Technology from "../components/Technology";
import GeneralList from "../components/GeneralList";
import General from "../components/General";
import EntertainmentList from "../components/EntertainmentList";
import Entertainment from "../components/Entertainment";
import BusinessList from "../components/BusinessList";
import Business from "../components/Business";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/news/:id",
        element: <News />,
      },
      {
        path: "/health",
        element: <HealthList />,
      },
      {
        path: "/health/:id",
        element: <Health />,
      },
      {
        path: "/sports",
        element: <SportsList />,
      },
      {
        path: "/sports/:id",
        element: <Sports />,
      },
      {
        path: "/science",
        element: <ScienceList />,
      },
      {
        path: "/science/:id",
        element: <Science />,
      },
      {
        path: "/technology",
        element: <TechnologyList />,
      },
      {
        path: "/technology/:id",
        element: <Technology />,
      },
      {
        path: "/general",
        element: <GeneralList />,
      },
      {
        path: "/general/:id",
        element: <General />,
      },
      {
        path: "/entertainment",
        element: <EntertainmentList />,
      },
      {
        path: "/entertainment/:id",
        element: <Entertainment />,
      },
      {
        path: "/business",
        element: <BusinessList />,
      },
      {
        path: "/business/:id",
        element: <Business />,
      },
    ],
  },
]);
