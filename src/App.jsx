import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
