import {useContext, useRef} from 'react';
import mainContext from "../Context/MainContext";
import {v4 as uuid} from 'uuid';
import {useNavigate} from "react-router-dom";

const CreateProduct = () => {

    const {products, setProducts} = useContext(mainContext)
    const nav = useNavigate()

    const titleRef = useRef()
    const descriptionRef = useRef()
    const photoRef = useRef()
    const priceRef = useRef()

    const createProduct = () => {
        if (titleRef.current.value <= 0) return
        if (descriptionRef.current.value <= 0) return
        if (photoRef.current.value <= 0) return
        if (priceRef.current.value <= 0) return
        const item = {
            uuid: uuid(),
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            photo: photoRef.current.value,
            price: Number(priceRef.current.value),
            quantity: 1
        }
        setProducts([...products, item])
        nav("/")
    }

    return (
        <div className="d-flex column j-center a-center">
            <input className="input" ref={titleRef} type="text" placeholder="Title..."/>
            <input className="input" ref={descriptionRef} type="text" placeholder="Description..."/>
            <input className="input" ref={photoRef} type="text" placeholder="Photo..."/>
            <input className="input" ref={priceRef} type="number" placeholder="Price..."/>
            <button className="link" onClick={createProduct}>Create</button>
        </div>
    );
};

export default CreateProduct;