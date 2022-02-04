import {useContext} from 'react';
import mainContext from "../Context/MainContext";

const CartSingleProduct = ({item, index}) => {

    const {cart, setCart} = useContext(mainContext)

    const addToCart = () => {
        cart[index].quantity++
        setCart([...cart])
    }

    const removeFromCart = () => {
        if (cart[index].quantity === 1){
            setCart(cart.filter((x, i) => i !== index))
        } else {
            cart[index].quantity--
            setCart([...cart])
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