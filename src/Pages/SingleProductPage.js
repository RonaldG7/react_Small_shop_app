import {useContext} from 'react';
import {useParams} from "react-router-dom";
import mainContext from "../Context/MainContext";
import SingleProduct from "../Components/SingleProduct";

const SingleProductPage = () => {

    const {products} = useContext(mainContext)

    const {title} = useParams()

    return (
        <div className="d-flex wrap j-center">
            {products.filter(x => x.uuid === title).map((x, i) => <SingleProduct item={x} key={x.uuid} /> )}
        </div>
    );
};

export default SingleProductPage;