import './App.css';
import Navigation from './Customer/Components/Navigation/Navigation.jsx';
import Footer from './Customer/Components/Footer/Footer';
import HomePage from './Customer/pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <div>
        <Navigation />
      </div>
      <div>
        <HomePage/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
