import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Services from "../Pages/Services";
import StartSelling from "../Pages/StartSelling/StartSelling";
import Profile from "../Pages/Profile/Profile";
import Chat from "../Pages/Chat/Chat";
import Header from "../Components/Header/Header";
import NotFound from "../Pages/NotFound/NotFound";
import ServiceDetails from "../Pages/ServiceDetails";
import AccountSettings from "../Components/Settings/AccountSettings";
import SecuritySettings from "../Components/Settings/SecuritySettings";
import NotificationSettings from "../Components/Settings/NotificationSettings";
import BusinessInfoSettings from "../Components/Settings/BusinessInfoSettings";
import PaymentMethodSettings from "../Components/Settings/PaymentMethodSettings";
import SettingsLayout from "../Layout/SettingsLayout";
import Graphic from "../Pages/Graphic";
import DigitalMarketing from "../Pages/DigitalMarketing";
import Writting from "../Pages/Writting";
import Video from "../Pages/Video";
import Music from "../Pages/Music";
import Programming from "../Pages/Programming";
import PrivateRoute from "../Components/Auth/PrivateRoute/PrivateRoute";
import ManageGigs from "../Components/Admin/ManageGigs";
import AdminLayout from "../Layout/AdminLayout";
import ManageUsers from "../Components/Admin/ManageUsers";
import ManageIssues from "../Components/Admin/ManageIssues";
import ManageCategories from "../Components/Admin/ManageCategories";
import ManageDevelopers from "../Components/Admin/ManageDevelopers";
import About from "../Pages/About/About";
import Payment from "../Components/PaymentFile/Payment";
import CreateServiseForm from "../Layout/CreateServiseForm";
import DeveloperProfile from "../Pages/DeveloperProfile/DeveloperProfile";
import DeveloperRegister from "../Pages/DeveloperProfile/DeveloperRegister";
import Admin from "../Components/Admin/Admin";
import AdminRoute from "../Components/Auth/AdminRoute/AdminRoute";
import SslCommerz from "../Components/PaymentFile/SslCommerz/SslCommerz";
import SingleOrder from "../Components/Orders/SingleOrder";
import Orders from "../Components/Orders/Orders";
import OrderSuccess from "../Components/Orders/Components/OrderSuccess";
import OrderError from "../Components/Orders/Components/OrderError";
import OrderCancel from "../Components/Orders/Components/OrderCancel";
import ServiceQuery from "../Components/Services/ServiceQuery";
import CreateService from "../Pages/CreateService";
import DeveloperOrder from "../Components/DeveloperProfile.js/DeveloperOrder";
import DeveloperGIg from "../Components/DeveloperProfile.js/DeveloperGIg";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/graphic-design",
        element: <Graphic />,
      },
      {
        path: "/serviceQuery/:category",
        element: <ServiceQuery />,
      },
      {
        path: "/digital-marketing",
        element: <DigitalMarketing />,
      },
      {
        path: "/writting",
        element: <Writting />,
      },
      {
        path: "/video",
        element: <Video />,
      },
      {
        path: "/music",
        element: <Music />,
      },
      {
        path: "/create-service",
        element: (
          <PrivateRoute>
            <CreateService />
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout/:id",
        loader: ({ params }) => {
          return fetch(
            `https://devhiveserver.vercel.app/service/single/${params.id}`
          );
        },
        element: (
          <PrivateRoute>
            <SslCommerz />
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout/success",
        element: (
          <PrivateRoute>
            <OrderSuccess />
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout/fail",
        element: (
          <PrivateRoute>
            <OrderError />
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout/cancel",
        element: (
          <PrivateRoute>
            <OrderCancel />
          </PrivateRoute>
        ),
      },
      {
        path: "/track-orders",
        element: (
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-orders",
        element: (
          <PrivateRoute>
            <DeveloperOrder />
          </PrivateRoute>
        ),
      },
      {
        path: "/track-orders/:id",
        loader: ({ params }) => {
          return fetch(
            `https://devhiveserver.vercel.app/order/transaction/${params.id}`
          );
        },
        element: (
          <PrivateRoute>
            <SingleOrder />
          </PrivateRoute>
        ),
      },

      {
        path: "/programming",
        element: <Programming />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/start_selling",
        element: <StartSelling />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/slug/:id",
        element: <ServiceDetails />,
      },
      {
        path: "/user-profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-gigs",
        element: (
          <PrivateRoute>
            <DeveloperGIg />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/developer-profile/:user_id",
        loader: ({ params }) =>
          fetch(
            `https://devhiveserver.vercel.app/developer/singledeveloper/${params.user_id}`
          ),
        element: (
          <PrivateRoute>
            <DeveloperProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/developer-register",
        element: (
          <PrivateRoute>
            <DeveloperRegister />
          </PrivateRoute>
        ),
      },

      {
        path: "/settings",
        element: <SettingsLayout />,
        children: [
          {
            path: "/settings/",
            element: <AccountSettings></AccountSettings>,
          },
          {
            path: "/settings/account",
            element: <AccountSettings></AccountSettings>,
          },
          {
            path: "/settings/security",
            element: <SecuritySettings></SecuritySettings>,
          },
          {
            path: "/settings/notification",
            element: <NotificationSettings></NotificationSettings>,
          },
          {
            path: "/settings/business_info",
            element: <BusinessInfoSettings></BusinessInfoSettings>,
          },
          {
            path: "/settings/payment",
            element: <PaymentMethodSettings></PaymentMethodSettings>,
          },
        ],
      },
      {
        path: "/admin",
        element: (
          <AdminRoute>
            <AdminLayout />
          </AdminRoute>
        ),
        children: [
          {
            path: "/admin/",
            element: <Admin></Admin>,
          },
          {
            path: "/admin/all-gigs",
            element: <ManageGigs></ManageGigs>,
          },
          {
            path: "/admin/all-users",
            element: <ManageUsers></ManageUsers>,
          },
          {
            path: "/admin/issues",
            element: <ManageIssues></ManageIssues>,
          },
          {
            path: "/admin/all-categories",
            element: <ManageCategories></ManageCategories>,
          },
          {
            path: "/admin/all-admins",
            element: <ManageDevelopers></ManageDevelopers>,
          },
        ],
      },
      // {
      //   path: "/chat",
      //   element: <Chat />,
      // },
    ],
  },
  {
    path: "/chat",
    element: (
      <PrivateRoute>
        <Chat />
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    element: (
      <div>
        <Header></Header>
        <NotFound></NotFound>
      </div>
    ),
  },

  // CreateServiseRouter
]);

export default router;
