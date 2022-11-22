import { useContext } from "react";
import { CartContext } from "../../context";

export const MyCart = () => {

    const cartContext = useContext(CartContext);

    return <>
        <div className="container">
            <table className="table table-condensed table-striped">
                <thead>
                    <tr>
                        <th>Qty</th>
                        <th>Product</th>
                        <th className="text-end">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartContext.cart.items.map(item => <tr key={item.product.id}>
                            <td>{item.quantity}</td>
                            <td>{item.product.name} - 
                                <span className="text-secondary"> ${item.product.price}/each</span>
                            </td>
                            <td className="text-end">${item.totalPrice}</td>
                        </tr>)
                    }
                </tbody>
            </table>
            <div className="fw-bold text-end pe-2">
                ${cartContext.cart.total}
            </div>
        </div>
    </>;
};