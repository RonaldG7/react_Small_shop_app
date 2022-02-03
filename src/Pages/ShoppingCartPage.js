import {useContext} from 'react';
import mainContext from "../Context/MainContext";
import CartSingleProduct from "../Components/CartSingleProduct";

const ShoppingCartPage = () => {

    const {cart} = useContext(mainContext)

    return (
        <div className="d-flex column a-center">
            {cart.map((x, i) => <CartSingleProduct item={x} key={i} index={i} />)}
        </div>
    );
};

export default ShoppingCartPage;