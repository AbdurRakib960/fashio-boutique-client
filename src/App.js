import { Route, Routes } from "react-router-dom";
import './App.css';
import Cart from "./pages/Cart/Cart";
import Home from './pages/Home/Home';
import ProductList from "./pages/ProductList/ProductList";
import SelectedSingleProduct from "./pages/SelectedSingleProduct/SelectedSingleProduct";
import Signin from "./pages/Signin/Signin";
import SignUp from "./pages/SignUp/SignUp";
import Success from "./pages/Success/Success";

function App() {
  return (
    <div >
    <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/products/:category" element={<ProductList /> } />
      <Route path="/product/:id" element={<SelectedSingleProduct /> } />
      <Route path="/cart" element={<Cart /> } />
      <Route path="/success" element={<Success />} />
      <Route path="/signin" element={<Signin /> } />
      <Route path="/signup" element={<SignUp /> } />
    </Routes>
    </div>
  );
}

export default App;
