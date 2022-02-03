import {useContext} from 'react';
import mainContext from "../Context/MainContext";
import SingleProduct from "../Components/SingleProduct";

const HomePage = () => {

    const {products} = useContext(mainContext)

    return (
        <div className="d-flex wrap">
            {products.map(x => <SingleProduct item={x} key={x.uuid} />)}
        </div>
    );
};

export default HomePage;