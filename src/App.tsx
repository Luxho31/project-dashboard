import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login/login";
import Register from "./pages/auth/register/register";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import HomeDashboard from "./pages/dashboard/home-dashboard/home-dashboard";
import UserDashboard from "./pages/dashboard/user-dashboard/user-dashboard";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Area Pública */}
                {/* <Route path="/" element={<Layout />}>
                    <Route index element={<Landing />}></Route>
                    <Route path="contact-us" element={<Contact />}></Route>
                    <Route path="about" element={<About />}></Route>
                </Route> */}
                <Route path="/" element={<AuthLayout />}>
                    <Route index element={<Login />}></Route>
                    <Route path="register" element={<Register />}></Route>
                </Route>
                {/* Area Privada */}
                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route index element={<HomeDashboard />}></Route>
                    <Route path="my-orders" element={<UserDashboard />}></Route>
                    <Route path="explore" element={<HomeDashboard />}></Route>
                    <Route path="products" element={<HomeDashboard />}></Route>
                    <Route path="charts" element={<HomeDashboard />}></Route>
                    <Route path="trends" element={<HomeDashboard />}></Route>
                    <Route path="contact" element={<HomeDashboard />}></Route>
                    <Route path="billing" element={<HomeDashboard />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
