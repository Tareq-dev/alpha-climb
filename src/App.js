import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/Products/ProductsPage";
import Purchase from "./pages/Purchase/Purchase";
import Login from "./pages/Login/Login";
import RequireAuth from "./pages/Login/RequireAuth";
import Register from "./pages/Login/Register";
import Payment from "./pages/Payment/Payment";
import MyReview from './pages/Dashboard/MyReview';
import Dashboard from "./pages/Dashboard/Dashboard";
import MyOrder from './pages/Dashboard/MyOrder';
import AllUser from './pages/Dashboard/AllUser';
import ManageProducts from './pages/Dashboard/ManageProducts';
import ManageOrder from './pages/Dashboard/ManageOrder';
import AddProducts from './pages/Dashboard/AddProducts';
import MyProfile from './pages/Dashboard/MyProfile';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route
          path="/products/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/products/:id" element={<Purchase />}></Route>
        <Route
          path="/payment/:id"
          element={
            <RequireAuth>
              <Payment />
            </RequireAuth>
          }
        ></Route>
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}
        >
          <Route index element={<MyProfile />}></Route>
          <Route path="my-order" element={<MyOrder />}></Route>
          <Route path="my-review" element={<MyReview />}></Route>
          <Route path="manage-products" element={<ManageProducts />}></Route>
          <Route path="add-product" element={<AddProducts />}></Route>
          <Route path="manage-orders" element={<ManageOrder />}></Route>
          <Route path="users" element={<AllUser />}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
