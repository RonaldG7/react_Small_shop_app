import {useContext} from 'react';
import mainContext from "../Context/MainContext";
import {useNavigate} from "react-router-dom";

const SingleProduct = ({item}) => {

    const {cart, setCart, price, setPrice} = useContext(mainContext)
    const nav = useNavigate()

    const addToCart = (item) => {
        if (item.quantity < 1) {
            item.quantity++
            setCart([...cart, item])
            setPrice(price + item.price)
        } else {
            item.quantity++
            setPrice(price + item.price)
        }
    }

    const openSingleItem = () => {
        nav("/product/" + item.uuid)
    }

    return (
        <div className="card">
            <img onClick={() => openSingleItem()} src={item.photo} alt=""/>
            <div className="p10">
                <h4>Title: {item.title}</h4>
                <p><b>Description:</b> {item.description}</p>
                <h4>Price: ${item.price}</h4>
                <button className="link" onClick={() => addToCart(item, item.uuid)}>Add To Cart</button>
            </div>
        </div>
    );
};

export default SingleProduct;