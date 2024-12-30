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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
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
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>

  </StrictMode>,
)
