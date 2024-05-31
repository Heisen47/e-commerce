// import './App.css';
import Navigation from './Customer/Components/Navigation/Navigation.jsx';
import Footer from './Customer/Components/Footer/Footer';
import HomePage from './Customer/pages/HomePage/HomePage';
import Product from './Customer/Components/Product/Product.jsx';
import ProductDetails from './Customer/Components/ProductDetails/ProductDetails.jsx';
import Cart from './Customer/Components/cart/Cart.jsx';
import Checkout from './Customer/Components/Checkout/Checkout.jsx';
import Order from './Customer/Components/Order/Order.jsx';
import OrderDetails from './Customer/Components/Order/OrderDetails.jsx';
import { Route, Routes } from 'react-router-dom';
import CustomerRoutes from './Routers/CustomerRoutes.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<CustomerRoutes/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
