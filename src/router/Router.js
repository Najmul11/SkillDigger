import { createBrowserRouter } from "react-router-dom";
import { Login } from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";
import ForgotPassword from "../components/Authentication/ForgotPassword";
import { Courses } from "../components/Courses/Courses";
import { Home } from "../components/Home/Home";
import Main from "../layout/Main";
import ResetPassword from "../components/Authentication/ResetPassword";
import Contact from "../components/Contact/Contact";
import Request from "../components/Request/Request";
import { About } from "../components/About/About";
import { Error } from "../components/Error/Error";
import { Subscribe } from "../components/Payments/Subscribe";
import { PaymentFail } from "../components/Payments/PaymentFail";
import { PaymentSuccess } from "../components/Payments/PaymentSuccess";
import CourseDetail from "../components/Courses/CourseDetail/CourseDetail";
import { Profile } from "../components/Profile/Profile";
import { ChangePassword } from "../components/Profile/ChangePassword";
import { UpdateProfile } from "../components/Profile/UpdateProfile";
import { Dashboard } from "../components/Admin/Dashboard/Dashboard";
import { CreateCourse } from "../components/Admin/CreateCourse/CreateCourse";
import { AdminCourses } from "../components/Admin/AdminCourses/AdminCourses";
import { Users } from "../components/Admin/Users/Users";
import { DashboardLayout } from "../layout/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";
import { AntiProtected } from "./AntiProtected";
import AdminRoute from "./AdminRoute";

 export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/courses',
                element:<Courses/>
            },
            {
                path:'/course/:id',
                element:<ProtectedRoute><CourseDetail/></ProtectedRoute>
            },
            {
                path:'/login',
                element:<AntiProtected><Login/></AntiProtected>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/forgotpassword',
                element:<AntiProtected><ForgotPassword/></AntiProtected>
            },
            {
                path:'/resetpassword/:token',
                element:<ResetPassword/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/request',
                element:<Request/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/profile',
                element:<ProtectedRoute><Profile/></ProtectedRoute>
            },
            {
                path:'/changepassword',
                element:<ProtectedRoute><ChangePassword/></ProtectedRoute>
            },
            {
                path:'/updateprofile',
                element:<ProtectedRoute><UpdateProfile/></ProtectedRoute>
            },
            {
                path:'/subscribe',
                element:<Subscribe/>
            },
            {
                path:'/paymentfail',
                element:<PaymentFail/>
            },
            {
                path:'/paymentsuccess',
                element:<PaymentSuccess/>
            },
            {
                path:'/admin',
                element:<ProtectedRoute><AdminRoute><DashboardLayout/></AdminRoute></ProtectedRoute>,
                children:[
                    {
                        path:'/admin/dashboard',
                        element:<Dashboard/>
        
                    },
                    {
                        path:'/admin/createcourse',
                        element:<CreateCourse/>
        
                    },
                    {
                        path:'/admin/courses',
                        element:<AdminCourses/>
        
                    },
                    {
                        path:'/admin/users',
                        element:<Users/>
        
                    },
                ]
            },
            {
                path:'*',
                element:<Error/>
            },
        ]
    }
]) 