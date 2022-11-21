//TODO update with array

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductList, ProductDetails, MyCart } from "..";

export const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={ <ProductList /> } exact />
            <Route path="/products/:productId" element={ <ProductDetails />} />
            <Route path="cart" element={ <MyCart />} />
        </Routes>
    </BrowserRouter>
};