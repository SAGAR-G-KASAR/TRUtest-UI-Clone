import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import HealthPackages from "./Pages/HealthPackages";
import HomeCollection from "./Pages/HomeCollection";
import PartnerWithUs from "./Pages/PartnerWithUs";
import AppLayout from "./Layout/AppLayout";
import TermsCondition from "./Pages/TermsCondition";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import BlogRelibleBlood from "./Pages/BlogRelibleBlood";
import BlogComprehensiveHealth from "./Pages/BlogComprehensiveHealth";
import BlogYourTrusted from "./Pages/BlogYourTrusted";
import PartnerWithUsRegistration from "./Pages/PartnerWithUsRegistration";
import Banglore from "./Cities/Banglore";
import Pune from "./Cities/Pune";
import Kolkata from "./Cities/Kolkata";
import Bhubaneswar from "./Cities/Bhubaneswar";
import Goa from "./Cities/Goa";
import Vijayawada from "./Cities/Vijayawada";
import Ghaziabad from "./Cities/Ghaziabad";
import Gurugram from "./Cities/Gurugram";
import Rohini from "./Cities/Rohini";
import Mangalore from "./Cities/Mangalore";
import Ahmedabad from "./Cities/Ahmedabad";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/contactus",
          element: <ContactUs />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
        },
        {
          path: "/homecollection",
          element: <HomeCollection />,
        },
        {
          path: "/aboutus",
          element: <AboutUs />,
        },
        {
          path: "/partnerwithus",
          element: <PartnerWithUs />,
        },
        {
          path: "/healthpackage",
          element: <HealthPackages />,
        },
        {
          path: "/termscondition",
          element: <TermsCondition />,
        },
        {
          path: "/privacypolicy",
          element: <PrivacyPolicy />,
        },

        {
          path: "/blog/blogrelibleblood",
          element: <BlogRelibleBlood />,
        },

        {
          path: "/blog/blogcomprehensivehealth",
          element: <BlogComprehensiveHealth />,
        },
        {
          path: "/blog/blogyourtrusted",
          element: <BlogYourTrusted />,
        },
        {
          path: "/blog/partnerwithusregistration",
          element: <PartnerWithUsRegistration />,
        },
        {
          path: "/center/banglore",
          element: <Banglore />,
        },
        {
          path: "/center/pune",
          element: <Pune />,
        },
        {
          path: "/center/kolkata",
          element: <Kolkata />,
        },
        {
          path: "/center/bhubaneswar",
          element: <Bhubaneswar />,
        },
        {
          path: "/center/goa",
          element: <Goa />,
        },
        {
          path: "/center/vijayawada",
          element: <Vijayawada />,
        },
        {
          path: "/center/ghaziabad",
          element: <Ghaziabad />,
        },
        {
          path: "/center/gurugram",
          element: <Gurugram />,
        },
        {
          path: "/center/rohini",
          element: <Rohini />,
        },
        {
          path: "/center/mangalore",
          element: <Mangalore />,
        },
        {
          path: "/center/ahmedabad",
          element: <Ahmedabad />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
