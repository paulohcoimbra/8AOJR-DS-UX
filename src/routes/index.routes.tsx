import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider
} from "react-router-dom";

import { Signin, Login, Recover, Register, Home } from "../pages";

const browserRouter = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Navigate to="/signin" replace />}/>,
    <Route path="/signin" element={<Signin />}/>,
    <Route path="/recover" element={<Recover />}/>,
    <Route path="/register" element={<Register />}/>,
    <Route path="/home" element={<Home />}/>,
    <Route path="*" element={<Login />}/>
  ])
)

const Router = () => {
  return <RouterProvider router={browserRouter} />
}

export { Router };