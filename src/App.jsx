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
import { useStore } from "./store/useStore";
import Checkout from "./pages/CartFeature/Checkout";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";

function App() {
  const {
    products,
    categories,
    comboPacks,
    fetchCategories,
    fetchProducts,
    fetchComboPacks,
  } = useStore();
  // console.log(products, categories, comboPacks);

  useEffect(() => {
    fetchCategories();
    fetchProducts();
    fetchComboPacks();
  }, [fetchCategories, fetchProducts, fetchComboPacks]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/category/:slug" element={<ProductsPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactUsPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
