import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/RootLayout";
import Home from "../modules/Home";
export const router = createBrowserRouter([
  { path:"/", element: <RootLayout/>, children:[
    {index:true, element:<Home/>}
  ] }
])
