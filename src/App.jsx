import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/checkout" element={<CartPage />} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </div>
  );
}
