import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import mainContext from "./Context/MainContext";
import Toolbar from "./Components/Toolbar";
import HomePage from "./Pages/HomePage";
import CreateProductPage from "./Pages/CreateProductPage";
import SingleProductPage from "./Pages/SingleProductPage";
import ShoppingCartPage from "./Pages/ShoppingCartPage";
import {useState} from "react";

function App() {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    return (
        <>
            <mainContext.Provider value={{products, setProducts, cart, setCart}}>
                <BrowserRouter>
                    <nav>
                        <Toolbar />
                    </nav>
                    <Routes>
                        <Route path="/" element={<HomePage />}/>
                        <Route path="/create" element={<CreateProductPage />}/>
                        <Route path="/product/:title" element={<SingleProductPage />}/>
                        <Route path="/cart" element={<ShoppingCartPage />}/>
                    </Routes>
                </BrowserRouter>
            </mainContext.Provider>
        </>
    );
}

export default App;
