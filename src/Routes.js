import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ModeOfAuth, UserForgot, UserSignInForm, VendorForgot, VendorOnboard, VendorSignInForm } from "./pages";
import UserOnboard from "./pages/useronboardpage/UserOnboard";
import { LogInMode, SignUpMode } from "./components";


const routeObjects = createBrowserRouter([
            {path: '/', element: <ModeOfAuth />},
            {path: '/vendoronboardingpage', element: <VendorOnboard />},
            {path: '/useronboardingpage', element: <UserOnboard />},
            {path: '/loginmodepage', element: <LogInMode />},
            {path: '/usersigninpage', element: <UserSignInForm />},
            {path: '/vendorsiginpage', element: <VendorSignInForm />},
            {path: '/signupmodepage', element: <SignUpMode />},
            {path: '/userforgot', element: <UserForgot />},
            {path: '/vendorforgot', element: <VendorForgot />},
        ]);

export const Routes = () => {
    return(
        <RouterProvider router={routeObjects} />
    )
}

export default Routes;