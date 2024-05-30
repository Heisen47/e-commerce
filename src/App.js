// import './App.css';
import Navigation from './Customer/Components/Navigation/Navigation.jsx';
import Footer from './Customer/Components/Footer/Footer';
import HomePage from './Customer/pages/HomePage/HomePage';
import Product from './Customer/Components/Product/Product.jsx';
import ProductDetails from './Customer/Components/ProductDetails/ProductDetails.jsx';
import Cart from './Customer/Components/cart/Cart.jsx';

function App() {
  return (
    <div className="App">
      <div>
        <Navigation />
      </div>
      <div>
        {/* <HomePage/> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        <Cart />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
