import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ModeOfAuth, UserForgot, UserSignIn, VendorForgot, VendorOnboard, VendorSignIn } from "./containers";
import UserOnboard from "./containers/useronboard/UserOnboard";
import { LogInMode, SignUpMode } from "./components";


const routeObjects = createBrowserRouter([
            {path: '/', element: <ModeOfAuth />},
            {path: '/vendoronboard', element: <VendorOnboard />},
            {path: '/useronboard', element: <UserOnboard />},
            {path: '/loginmode', element: <LogInMode />},
            {path: '/usersignin', element: <UserSignIn />},
            {path: '/vendorsignin', element: <VendorSignIn />},
            {path: '/signupmode', element: <SignUpMode />},
            {path: '/userforgot', element: <UserForgot />},
            {path: '/vendorforgot', element: <VendorForgot />},
        ]);

export const Routes = () => {
    return(
        <RouterProvider router={routeObjects} />
    )
}

export default Routes;