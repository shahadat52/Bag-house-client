import { BrowserRouter, Route, Routes } from 'react-router'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Bag from './pages/bag/BagPage.tsx'
import Checkout from './pages/checkout/Checkout.tsx'
import MainLayout from './layouts/MainLayout.tsx'
import About from './pages/About.tsx'
import Fashion from './pages/fashion/Fashion.tsx'
import Food from './pages/food/Food.tsx'
import Agro from './pages/agro/Agro.tsx'
import Login from './pages/Login.tsx'
import Cart from './pages/cart/Cart.tsx'
import BagDetails from './pages/bag/BagDetails.tsx'
import NotFound from './pages/NotFound.tsx'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.ts'
import { PersistGate } from 'redux-persist/integration/react'
import OrdersPage from './pages/order/OrdersPage.tsx'
import Register from './pages/Register.tsx'
import { ToastContainer } from 'react-toastify'
import DashboardLayout from './layouts/DashboardLayout.tsx'
import ProductManagementPage from './pages/product/ProductManagementPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <PersistGate loading={null} persistor={persistor}></PersistGate>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Bag />} /> {/* Default child route */}
            <Route path="bag" element={<Bag />} />
            <Route path="/bag/:id" element={<BagDetails />} />
            <Route path="fashion" element={<Fashion />} />
            <Route path="food" element={<Food />} />
            <Route path="agro" element={<Agro />} />
            <Route path="cart" element={<Cart />} />
            <Route path="about" element={<About />} />
            <Route path="/checkout/:id" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          {/* Dashboard layout */}
          <Route path="dashboard" element={<DashboardLayout />} >
            <Route path="/dashboard/orders" element={<OrdersPage />} />
            <Route path="/dashboard/products" element={<ProductManagementPage />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
        <Routes>

        </Routes>
      </BrowserRouter>
    </Provider>

  </StrictMode>,
)
