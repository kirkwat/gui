import { ProductList, ProductDetails, MyCart } from "./components";

export const MyRoutes = () => [
    { path: '', element: <ProductList />},
    { path: '/products/:productId', element: <ProductDetails />},
    { path: 'cart', element: <MyCart />}
];