import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

import { store, persistor } from "./redux/store.ts";
import AppRoutes from "./Routes/AppRoutes.tsx";

const root = document.getElementById("root");

createRoot(root!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ToastContainer position="top-center" autoClose={2000} />
          <AppRoutes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
