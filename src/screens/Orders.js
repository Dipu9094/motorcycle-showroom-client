import React, { useEffect, useState } from "react";
import useFirebase from "../hooks/useFirebase";

const Orders = () => {
    const [MyOrders, setMyOrders] = useState([]);
    // const [orderInfo, setorderInfo] = useState();

    const { user } = useFirebase();

    // const [updated, setUpdated] = useState({});

    useEffect(() => {
        fetch("https://frozen-peak-94262.herokuapp.com/orders")
            .then((res) => res.json())
            .then((data) => {
                setMyOrders(data.orders);
            });

    }, []);

    // eslint-disable-next-line eqeqeq
    const filtered = MyOrders.filter((order) => order.email == user.email);
    

    //

    const handleDelete = (id) => {
        const conf = window.confirm("Are you sure want to delete this user?");
        if (conf) {
            const url = `https://frozen-peak-94262.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        const remaining = MyOrders.filter(
                            (service) => service._id !== id
                        );
                        setMyOrders(remaining);
                     
                    }
                });
        }
    };
    return (
        <>
            <div className=" mt-5 md:mt-0 p-3 ">
                <h1 className='text-4xl text-center my-2'>My Orders-</h1>
                <div className="outer  ">
                    <table className=" mx-auto table text-center border-collapse border-solid border-4  border-gray-500 bg-gray-50 ...">
                        <thead>
                            <tr>
                                <th className=" border-2 border-green-600 ... ">
                                    Order Id
                                </th>
                                <th className="border-2 border-green-600 ... ">
                                     Name
                                </th>
                                <th className="border-2 border-green-600 ......">
                                    Phone
                                </th>
                                <th className="border-2 border-green-600 ......">
                                    Orders
                                </th>
                                <th className="border-2 border-green-600 ......">
                                    Status
                                </th>
                                <th className="border-2 border-green-600 ......">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((item) => (
                                <tr>
                                    <td className="border-2 border-green-600 ...">
                                        {item._id}{" "}
                                    </td>

                                    <td className="border-2 border-green-600 ...">
                                        {item.name}{" "}
                                    </td>
                                    <td className="border-2 border-green-600 ...">
                                        {item.phone}
                                    </td>

                                    <td className="border-2 border-green-600 ...">
                                        {item.order.map((it) => (
                                            <li className="list-decimal text-left m-2">
                                                {it.name}
                                            </li>
                                        ))}
                                    </td>

                                    <td className="border-2 border-green-600 ...">
                                        {item.status}
                                    </td>
                                    <td
                                        className="border-2
                                 border-green-600 ..."
                                    >
                                        <div className="flex flex-col m-2">
                                            <button
                                                onClick={() =>
                                                    handleDelete(item._id)
                                                }
                                                className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer my-3"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Orders;
