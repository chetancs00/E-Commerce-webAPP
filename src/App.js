import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/modules/Home/Home';
import ProductPage from './Components/modules/ProductPage';
import Cart from './Components/modules/Cart/Cart';
import Checkout from './Components/modules/Checkout';

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="product/:id" element={<ProductPage/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/checkout" element={<Checkout/>} />
      </Routes>
    </Router>
  );
}

export default App;
