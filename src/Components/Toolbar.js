import {useContext} from 'react';
import {Link} from "react-router-dom";
import mainContext from "../Context/MainContext";

const Toolbar = () => {

    const {cart, price} = useContext(mainContext)

    function itemsTotal() {
        if (cart.length > 0) {
            return cart.map(x => x.quantity).reduce((a, b) => a + b)
        } else {
            return 0
        }
    }

    return (
        <div className="toolbar">
            <Link className="link" to="/">All Products</Link>
            <Link className="link" to="/create">Create Product</Link>
            <Link className="link" to="/cart">Shopping Cart</Link>
            <h3 style={{color: "white"}}>Items in cart: {itemsTotal()} Total price: {price}</h3>
        </div>
    );
};

export default Toolbar;