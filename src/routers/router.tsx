import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/RootLayout";
import Home from "../modules/Home";
import Game from "../modules/GameDetail";
import Auth from "../modules/Auth/Auth";
export const router = createBrowserRouter([
  { path:"/", element: <RootLayout/>, children:[
    {index:true, element:<Home/>},
    {path:"/game/:gameId", element: <Game/>},
    {path:"/signin", element: <Auth/>}
  ] }
])
