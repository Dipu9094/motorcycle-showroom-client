import React, { createContext, useContext, useState } from "react";

export const OrderContext = createContext();

export const useOrder = () => {
    return useContext(OrderContext);
};
const OrderProvider = ({ children }) => {
    const [order, setOrder] = useState([]);

    // add order function
    const handleOrder = (bike) => {
        setOrder((prevValue) => {
            return [...prevValue, bike];
        });
    };

    //remove order from cart
    const removeOrder = (id) => {
        const con = window.confirm("Are you sure want to delete?");
        if (con) {
            setOrder((prev) => {
                return prev.filter((item) => {
                    return item._id !== id;
                });
            });
        }
    };

    const value = {
        setOrder,
        order,
        handleOrder,
        removeOrder,
    };
    return (
        <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
    );
};

export default OrderProvider;
