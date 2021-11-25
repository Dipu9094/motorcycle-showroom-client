import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../components/Navbar/Navbar";
import DeliveryForm from "../components/PlaceOrder/DeliveryForm";
import OrderCard from "../components/PlaceOrder/OrderCard";
import OrderPrice from "../components/PlaceOrder/OrderPrice";
import { useDelivery } from "../contexts/DeliveryProvider";
import { useOrder } from "../contexts/OrderProvider";
import useAuth from "../hooks/useAuth";

const PlaceOrderScreen = () => {
    const { order, setOrder } = useOrder([]);
    const { input, disabled } = useDelivery();
    const {user}=useAuth()
    const history = useHistory();
    AOS.init();
    const handleOrder = () => {
        swal(
            "Congratualations!!!",
            `You have order ${order.length} times successfully`,
            "success"
        );
        history.push("/order-successful");

        // order.map((item) => console.log(item));

        input.order = order;
        input.status = "Pending";
        input.email=user.email

        fetch("https://frozen-peak-94262.herokuapp.com/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(input),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
            });

        setOrder([]);
    };

    return (
        <>
            <Navbar />
            <main
                data-aos="fade-up"
                data-aos-duration="3000"
                className=" h-screen  bg-gray-300"
            >
                <div className="max-w-screen-xl py-20 mx-auto px-6">
                    <br />
                    {order.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                                {/* left side form  */}
                                <div className="col-span-1 mt-32 md:mt-2">
                                    <DeliveryForm />
                                </div>
                                {/* right side  */}
                                <div className="col-span-1">
                                    <div className="glass p-6 box-border rounded-lg">
                                        {/* order details  */}
                                        <div className="flex flex-col space-y-4 mb-3">
                                            <p className="poppins text-gray-700">
                                                Deliver Place :{" "}
                                                <span className="font-semibold text-black">
                                                    {input.country
                                                        ? `${input.country}`
                                                        : "-----"}
                                                </span>
                                            </p>
                                            <p className="poppins text-gsray-700">
                                                Ariving in 2-3 days
                                            </p>
                                            <p className="poppins text-gray-700">
                                                Road{" "}
                                                <span className="font-semibold text-black">
                                                    {input.roadNo
                                                        ? `${input.roadNo}`
                                                        : "-----"}
                                                </span>{" "}
                                            </p>
                                            <p className="poppins text-gray-700">
                                                Floor :{" "}
                                                <span className="font-semibold text-black">
                                                    {input.flatno
                                                        ? `${input.flatno}`
                                                        : "-----"}
                                                </span>{" "}
                                            </p>
                                            <p className="poppins text-gray-700">
                                                Deliver to :{" "}
                                                <span className="font-semibold text-black">
                                                    {input.name
                                                        ? `${input.name}`
                                                        : "-----"}
                                                </span>{" "}
                                            </p>
                                        </div>
                                        {/* orders  */}

                                        <div className=" flex  bg-gray-300 flex-col space-y-3 h-64 overflow-y-scroll orderContainer ">
                                            {order.map((item) => (
                                                <OrderCard
                                                    key={item.id}
                                                    {...item}
                                                />
                                            ))}
                                        </div>
                                        {/* price  */}
                                        <OrderPrice {...order} />
                                        {/* place order button  */}
                                        <div>
                                            {disabled ? (
                                                <button
                                                    disabled="disabled"
                                                    className="w-full px-6 py-3 rounded-lg bg-primary   text-white poppins ring-red-300 focus:ring-4 transition duration-500 opacity-40"
                                                >
                                                    Place Order
                                                </button>
                                            ) : (
                                                <button
                                                    className="w-full px-6 py-3 rounded-lg bg-primary  text-white poppins ring-red-300 focus:ring-4 transition duration-500"
                                                    onClick={handleOrder}
                                                >
                                                    Place Order
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="pt-24">
                            <h1 className="text-center text-5xl text-primary poppins">
                                No Order has added!!
                            </h1>
                        </div>
                    )}
                </div>
            </main>
        </>
    );
};

export default PlaceOrderScreen;
