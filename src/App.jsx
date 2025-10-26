import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Nav } from "./components/Nav/Nav"
import { ItemListContainer } from './components/ItemlistContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext/CartProvider';
import { Footer } from './components/Footer/Footer';
import Header from './components/Header/Header';


function App() {
  return (
    <>
      <BrowserRouter>
      <CartProvider>
        <div>
        <Header />
        <Routes>
          <Route path="/" element={<ItemListContainer titulo={"Bienvenidos"} />}/>
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<h1>Carrito</h1>} />
        </Routes>
        <Footer />
        </div>
      </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
