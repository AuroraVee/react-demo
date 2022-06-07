import Home from "../pages/Home";
import About from "../pages/About";
import { Navigate } from "react-router-dom";
import News from "../pages/Home/News";
import Msg from "../pages/Home/Message";
import Detail from "../pages/Home/Message/Detail";

export default [
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "msg",
        element: <Msg />,
        children: [{ path: "detail", element: <Detail></Detail> }],
      },
      {
        path: "news",
        element: <News />,
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to="about"></Navigate>,
  },
];
