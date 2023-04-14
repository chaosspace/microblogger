import Login from "../pages/login";
import Register from "../pages/register";
import Specials from "../pages/specials";
import Passages from "../pages/passages";
import { Navigate } from "react-router-dom";
const routes = [
  {
    path: "/login",
    element: <Login />,
    
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home/specials",
    element: <Specials />,
  },

  {
    path: "/home/passages",
    element: <Passages />,
  },
  {
    path:'/home/recommand',
    element:<Passages />
  },
  {
    path: "/*",
    element: <Navigate to="/login" />,
  },
];
export default routes;