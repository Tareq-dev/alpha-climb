import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/Products/ProductsPage";
import Purchase from "./pages/Purchase/Purchase";

function App() {
  return (
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<ProductsPage />}></Route>
      <Route path="/products/:id" element={<Purchase />}></Route>
    </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
