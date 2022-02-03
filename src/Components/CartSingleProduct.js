import {useContext} from 'react';
import mainContext from "../Context/MainContext";

const CartSingleProduct = ({item, index}) => {

    const {cart, setCart, price, setPrice} = useContext(mainContext)

    const addToCart = () => {
        cart[index].quantity++
        setCart([...cart])
        setPrice(price + cart[index].price)
    }

    const removeFromCart = () => {
        if (item.quantity > 1) {
            cart[index].quantity--
            setCart([...cart])
            setPrice(price - cart[index].price)
        } else {
            cart[index].quantity--
            setCart(cart.filter((x, i) => i !== index))
            setPrice(price - cart[index].price)
            // remove item with splice
            // cart.splice(index, 1)
            // setCart([...cart])
        }
    }

    return (
        <div className="cardCart d-flex a-center s-btw">
            <img src={item.photo} alt=""/>
            <h4>Title: {item.title}</h4>
            <p><b>Description:</b> {item.description}</p>
            <h4>Price per unit: ${item.price}</h4>
            <div className="p10">
                <button className="link" onClick={() => addToCart()}>Add</button>
                <h4>Quantity: {item.quantity}</h4>
                <button className="link" onClick={() => removeFromCart()}>Remove</button>
            </div>
        </div>
    );
};

export default CartSingleProduct;