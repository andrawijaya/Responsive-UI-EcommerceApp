import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  Home,
  AllProducts,
  Cart,
  Error,
  Jackets,
  Shirts,
  Bags,
  SingleProduct,
} from "./pages";

// components
import Navbar from "./components/Navbar/Navbar";
import CartSidebar from "./components/CartSidebar/CartSidebar";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";

// scroll to top component
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <CartSidebar />
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/shirts" element={<Shirts />} />
        <Route exact path="/jackets" element={<Jackets />} />
        <Route exact path="/bags" element={<Bags />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/products" element={<AllProducts />} />
        <Route exact path="/products/:id" element={<SingleProduct />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
