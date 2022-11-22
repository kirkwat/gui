import { CartContext } from "../../context";

export const MyCart = () => {


    return <>
        <table className="table table-condensed table-striped">
            <thead>
                <tr>
                    <th>Qty</th>
                    <th>Product</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {
                    CartContext.cart.map(account => <tr key={account.id}>
                        <td>
                        </td>
                        <td>{account.email}</td>
                        <td>{account.isEmployee ? "Yes" : "No "}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </>;
};