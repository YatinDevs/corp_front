// src/App.jsx
import React, { useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/ErrorPages/NotFound";
import Checkout from "./pages/CartFeature/Checkout";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import { useToast } from "./context/ToastContext";
import { useStore } from "./store/useStore";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import GiftSetsPage from "./pages/GiftSetsPage/GiftSetsPage";
import OccasionsPage from "./pages/OccasionsPage/OccasionsPage";

function App() {
  const { fetchCategories, fetchSingleProducts, fetchComboProducts } =
    useStore();
  const { addToast, removeToast } = useToast();

  // Load initial data
  useEffect(() => {
    const loadData = async () => {
      try {
        await Promise.all([
          fetchCategories(),
          fetchSingleProducts(),
          fetchComboProducts(),
        ]);
      } catch (error) {
        console.error("Initial data loading error:", error);
      }
    };

    loadData();
  }, [fetchCategories, fetchSingleProducts, fetchComboProducts]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/category/:slug" element={<ProductsPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="gift-sets" element={<GiftSetsPage />} />
        <Route path="occasions" element={<OccasionsPage />} />

        <Route path="contact" element={<ContactUsPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
