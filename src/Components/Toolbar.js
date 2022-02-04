import {useContext} from 'react';
import {Link} from "react-router-dom";
import mainContext from "../Context/MainContext";

const Toolbar = () => {

    const {cart} = useContext(mainContext)

    function itemsTotal() {
        if (cart.length > 0) {
            return cart.map(x => x.quantity).reduce((a, b) => a + b)
        } else {
            return 0
        }
    }

    function priceTotal () {
            let counter = 0
            cart.map(x => counter += x.price * x.quantity)
            return counter
    }

    return (
        <div className="toolbar">
            <Link className="link" to="/">All Products</Link>
            <Link className="link" to="/create">Create Product</Link>
            <Link className="link" to="/cart">Shopping Cart</Link>
            <h3 style={{color: "white"}}>Items in cart: {itemsTotal()} Total price: {priceTotal()}</h3>
        </div>
    );
};

export default Toolbar;