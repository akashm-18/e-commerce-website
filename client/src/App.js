import { useSelector } from "react-redux";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";

import { Route , Routes } from 'react-router-dom'

function App() {
  const user = useSelector(state => state.user.currentUser) ;
  console.log(user)
  return (
    <main>
      <Routes>
        <Route index path="/" element = {<Home />} />
        <Route path="/products/:category" element = {<ProductList />} />
        <Route path="/product/:id" element = {<Product />} />
        <Route path="/login" element = {user ? <Home /> : <Login />} />
        <Route path="/register" element = {user ? <Home /> : <Register />} />
        <Route path="/cart" element = {<Cart />} />
      </Routes>
    </main>
  );
}

export default App;
