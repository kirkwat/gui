import { useState, useEffect } from "react";
import { getProductById } from "../../api";

export const ProductDetails = () => {

    const [ product, setProduct ] = useState(undefined);

    useEffect(() => {
        getProductById(1).then(x => setProduct(x));
    }, []);

    const mergeProduct = delta => setProduct({ ...product, ...delta });

    return <>product stuff goes here</>
};