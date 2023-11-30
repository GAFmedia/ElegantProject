import { Routes, Route, useRoutes } from "react-router-dom";
import { Welcome, UserForgot, UserSignIn, VendorForgot, VendorOnboard, Login } from "./containers";
// import UserOnboard from "./containers/useronboard/UserOnboard";
import { LogInMode, Preloader, SignUpMode } from "./components";

//
const AppRouter =() => {

    const routes = useRoutes ([

        { path:'/', element:<Login /> },
        { path:'/preloader', element:<Preloader /> },
        { path:'/Welcome', element:<Welcome /> },
        { path:'/login', element:<Login /> },

    ]);

    return routes

}

export default AppRouter