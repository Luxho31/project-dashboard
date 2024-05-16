import Profile from "../../../assets/image/profile.jpg";

import "./user-dashboard.css";

const UserDashboard = () => {
    return (
        <main className="table">
            <section className="table--header">
                <h1>Customer's Orders</h1>
            </section>
            <section className="table--body">
                <table>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>Total</th>
                            <th>Operación</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <img src={Profile} alt="" /> Luis Sánchez
                            </td>
                            <td>Product 1</td>
                            <td>$100</td>
                            <td>2</td>
                            <td>
                                <p className="status shipped">Shipped</p>
                            </td>
                            <td>
                                <strong>$200</strong>
                            </td>
                            <td>
                                <div>Editar</div>
                                <div>Eliminar</div>
                                <div>Visualizar</div>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <img src={Profile} alt="" /> Luis Sánchez
                            </td>
                            <td>Product 1</td>
                            <td>$100</td>
                            <td>2</td>
                            <td>
                                <p className="status delivered">Delivered</p>
                            </td>
                            <td>$200</td>
                            <td>
                                <div>Editar</div>
                                <div>Eliminar</div>
                                <div>Visualizar</div>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <img src={Profile} alt="" /> Luis Sánchez
                            </td>
                            <td>Product 1</td>
                            <td>$100</td>
                            <td>2</td>
                            <td>
                                <p className="status pending">Pending</p>
                            </td>
                            <td>$200</td>
                            <td>
                                <div>Editar</div>
                                <div>Eliminar</div>
                                <div>Visualizar</div>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <img src={Profile} alt="" /> Luis Sánchez
                            </td>
                            <td>Product 1</td>
                            <td>$100</td>
                            <td>2</td>
                            <td>
                                <p className="status cancelled">Cancelled</p>
                            </td>
                            <td>$200</td>
                            <td>
                                <div>Editar</div>
                                <div>Eliminar</div>
                                <div>Visualizar</div>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <img src={Profile} alt="" /> Luis Sánchez
                            </td>
                            <td>Product 1</td>
                            <td>$100</td>
                            <td>2</td>
                            <td>
                                <p className="status shipped">Shipped</p>
                            </td>
                            <td>
                                <strong>$200</strong>
                            </td>
                            <td>
                                <div>Editar</div>
                                <div>Eliminar</div>
                                <div>Visualizar</div>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <img src={Profile} alt="" /> Luis Sánchez
                            </td>
                            <td>Product 1</td>
                            <td>$100</td>
                            <td>2</td>
                            <td>
                                <p className="status delivered">Delivered</p>
                            </td>
                            <td>$200</td>
                            <td>
                                <div>Editar</div>
                                <div>Eliminar</div>
                                <div>Visualizar</div>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <img src={Profile} alt="" /> Luis Sánchez
                            </td>
                            <td>Product 1</td>
                            <td>$100</td>
                            <td>2</td>
                            <td>
                                <p className="status pending">Pending</p>
                            </td>
                            <td>$200</td>
                            <td>
                                <div>Editar</div>
                                <div>Eliminar</div>
                                <div>Visualizar</div>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <img src={Profile} alt="" /> Luis Sánchez
                            </td>
                            <td>Product 1</td>
                            <td>$100</td>
                            <td>2</td>
                            <td>
                                <p className="status cancelled">Cancelled</p>
                            </td>
                            <td>$200</td>
                            <td>
                                <div>Editar</div>
                                <div>Eliminar</div>
                                <div>Visualizar</div>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <img src={Profile} alt="" /> Luis Sánchez
                            </td>
                            <td>Product 1</td>
                            <td>$100</td>
                            <td>2</td>
                            <td>
                                <p className="status shipped">Shipped</p>
                            </td>
                            <td>
                                <strong>$200</strong>
                            </td>
                            <td>
                                <div>Editar</div>
                                <div>Eliminar</div>
                                <div>Visualizar</div>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <img src={Profile} alt="" /> Luis Sánchez
                            </td>
                            <td>Product 1</td>
                            <td>$100</td>
                            <td>2</td>
                            <td>
                                <p className="status delivered">Delivered</p>
                            </td>
                            <td>$200</td>
                            <td>
                                <div>Editar</div>
                                <div>Eliminar</div>
                                <div>Visualizar</div>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <img src={Profile} alt="" /> Luis Sánchez
                            </td>
                            <td>Product 1</td>
                            <td>$100</td>
                            <td>2</td>
                            <td>
                                <p className="status pending">Pending</p>
                            </td>
                            <td>$200</td>
                            <td>
                                <div>Editar</div>
                                <div>Eliminar</div>
                                <div>Visualizar</div>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <img src={Profile} alt="" /> Luis Sánchez
                            </td>
                            <td>Product 1</td>
                            <td>$100</td>
                            <td>2</td>
                            <td>
                                <p className="status cancelled">Cancelled</p>
                            </td>
                            <td>$200</td>
                            <td>
                                <div>Editar</div>
                                <div>Eliminar</div>
                                <div>Visualizar</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </main>
    );
};

export default UserDashboard;
