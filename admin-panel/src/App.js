import SideBar from "./components/sidebar/SideBar";
import TopBar from "./components/topBar/TopBar";
import './app.css'
import Home from "./pages/home/Home";
import { Routes , Route } from 'react-router-dom'
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>

     <Routes>
        <Route
          path="/"
          element={
            <>
              <TopBar />
              <div className="container">
                <SideBar />
                <Routes>
                  <Route index element={<Home />} />
                  <Route path="/users" element={<UserList />} />
                  <Route path="/users/:userId" element={<User />} />
                  <Route path="/newUser" element={<NewUser />} />
                  <Route path="/products" element={<ProductList />} />
                  <Route path="/product/:productId" element={<Product />} />
                  <Route path="/newproduct" element={<NewProduct />} />
                </Routes>
              </div>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
