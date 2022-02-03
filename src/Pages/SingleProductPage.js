import {useContext} from 'react';
import {useParams} from "react-router-dom";
import mainContext from "../Context/MainContext";
import SingleProduct from "../Components/SingleProduct";

const SingleProductPage = () => {

    const {products} = useContext(mainContext)

    const params = useParams()

    return (
        <div className="d-flex wrap j-center">
            {products.filter(x => x.uuid === params.title).map(x => <SingleProduct item={x} key={x.uuid}/> )}
        </div>
    );
};

export default SingleProductPage;