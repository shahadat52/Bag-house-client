import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import PrivateRoute from "./PrivateRoute";

// 🔹 Simple loading spinner
const Loader = () => (
    <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
);

// --- Lazy-loaded layouts ---
const MainLayout = lazy(() => import("../layouts/MainLayout"));
const DashboardLayout = lazy(() => import("../layouts/DashboardLayout"));
const DashboardHome = lazy(() => import("../layouts/DashboardHome"));

// --- Lazy-loaded pages ---
const Home = lazy(() => import("../pages/home/Home"));
const About = lazy(() => import("../pages/About"));
const Bag = lazy(() => import("../pages/bag/BagPage"));
const BagDetails = lazy(() => import("../pages/bag/BagDetails"));
const Fashion = lazy(() => import("../pages/fashion/Fashion"));
const Agro = lazy(() => import("../pages/agro/Agro"));
const FoodPage = lazy(() => import("../pages/food/FoodPage"));
const CartPage = lazy(() => import("../pages/cart/CartPage"));
const Checkout = lazy(() => import("../pages/checkout/Checkout"));
const OrdersPage = lazy(() => import("../pages/order/OrdersPage"));
const OrderBill = lazy(() => import("../pages/order/OrderBill"));
const ProductManagementPage = lazy(() => import("../pages/product/ProductManagementPage"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const NotFound = lazy(() => import("../pages/NotFound"));

const AppRoutes = () => {
    return (
        // React Router v7 uses fallbackElement for lazy() suspense handling
        <Suspense fallback={<Loader />}>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="bag" element={<Bag />} />
                    <Route path="bag/:id" element={<BagDetails />} />
                    <Route path="fashion" element={<Fashion />} />
                    <Route path="food" element={<FoodPage />} />
                    <Route path="agro" element={<Agro />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="about" element={<About />} />
                    <Route path="checkout/:id" element={<Checkout />} />
                    <Route path="*" element={<NotFound />} />
                </Route>

                {/* Protected Dashboard Routes */}
                <Route
                    path="dashboard"
                    element={
                        <PrivateRoute>
                            <DashboardLayout />
                        </PrivateRoute>
                    }
                >
                    <Route index element={<DashboardHome />} />
                    <Route path="orders" element={<OrdersPage />} />
                    <Route path="orders/:id" element={<OrderBill />} />
                    <Route path="products" element={<ProductManagementPage />} />
                </Route>

                {/* Auth Routes */}
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />

                {/* Redirect Unknown Routes */}
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
