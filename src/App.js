import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <ToastContainer />
    </div>
  );
}

export default App;
