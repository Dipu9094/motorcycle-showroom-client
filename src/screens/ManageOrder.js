import React, { useEffect, useState } from "react";
import swal from "sweetalert";

const ManageOrder = () => {
    const [orders, setorders] = useState([]);
    // const [orderInfo, setorderInfo] = useState();
    const [count, setcount] = useState(0);

    const [updated, setUpdated] = useState({});
    let x = 1;

    useEffect(() => {
        fetch("https://frozen-peak-94262.herokuapp.com/orders")
            .then((res) => res.json())
            .then((data) => {
                setorders(data.orders);
                setcount(data.count);
            });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updated]);

    //
    const handleUpdate = (id) => {
        const matched = orders.filter((order) => order._id === id);

        let orderstatus;

        if (matched[0].status === "Pending") {
            orderstatus = "shipped ";
        } else {
            orderstatus = "Pending";
        }
        const updates = {
            phone: matched[0].phone,
            roadNo: matched[0].roadNo,
            flatno: matched[0].flatno,
            name: matched[0].name,
            status: orderstatus,
            order: matched[0].order,
        };

        setUpdated(updates);

        if (matched[0].name) {
            const url = `https://frozen-peak-94262.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(updates),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.modifiedCount > 0) {
                        swal("Status placed successfully");
                        setorders(orders);
                        setUpdated({});
                    }
                });
        }
    };

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
                        const remaining = orders.filter(
                            (service) => service._id !== id
                        );
                        setorders(remaining);
                        const c = Object.keys(remaining).length;
                        setcount(c);
                    }
                });
        }
    };
    return (
        <>
            <div className=" mt-5 md:mt-0 p-3 ">
                <h2 className="my-4 text-center text-5xl text-gray-500">
                    Total Orders : {count}
                </h2>

                <div className="outer  ">
                    <table className=" mx-auto table text-center border-collapse border-solid border-4  border-gray-500 bg-gray-50 ...">
                        <thead>
                            <tr>
                                <th className=" border-2 border-green-600 ... ">
                                    Order Id
                                </th>
                                <th className="border-2 border-green-600 ... ">
                                    Customer's Name
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
                            {orders.map((item) => (
                                <tr>
                                    <td className="border-2 border-green-600 ...">
                                        {x++}. {item._id}{" "}
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
                                            <button
                                                onClick={() =>
                                                    handleUpdate(item._id)
                                                }
                                                className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer"
                                            >
                                                Update
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

export default ManageOrder;
