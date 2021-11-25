import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import swal from "sweetalert";
import useFetch from "../../hooks/useFetch";

const ManageProducts = () => {
    const [bikes, spinner, setbikes] = useFetch();
    AOS.init();

    const handleDelete = (id) => {
        const url = `https://frozen-peak-94262.herokuapp.com/products/${id}`;
        fetch(url, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                    swal("Are you sure want to delte?");
                    const remaining = bikes.filter((bike) => bike._id !== id);
                    setbikes(remaining);
                }
            });
    };

    if (spinner) {
        return (
            <>
                <div>
                    <svg className="spinner mt-40 my-8" viewBox="0 0 50 50">
                        <circle
                            className="path"
                            cx="25"
                            cy="25"
                            r="20"
                            fill="none"
                            stroke-width="5"
                        ></circle>
                    </svg>
                </div>
            </>
        );
    }

    return (
        <>
            <section className="mt-32 md:mt-5  max-w-screen-xl mx-auto px-6">
                <h1 className="text-center text-3xl mt-8 md:mt-5 md:text-4xl lg:text-5xl poppins font-semibold text-gray-600 p-2 shadow-2xl ">
                    Available Products : -
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                    {bikes.map((item) => (
                        <div
                            data-aos="flip-up"
                            className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative"
                        >
                            <span className="bg-red-100 border  border-red-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4 ">
                                {item.company}
                            </span>
                            <img
                                className="w-64 rounded-lg mx-auto transform transition duration-300 hover:scale-105"
                                src={item.img}
                                alt=""
                            />
                            <div className="flex flex-col items-center my-3 space-y-2">
                                <h1 className="text-gray-900 poppins text-lg">
                                    {item.name}
                                </h1>
                                <p className="text-gray-500 poppins text-sm text-center">
                                    {item.description.slice(0, 50)}
                                </p>
                                <h2 className="text-gray-900 poppins text-2xl font-bold">
                                    ${item.price}
                                </h2>
                                <button
                                    className="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105"
                                    onClick={() => handleDelete(item._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ManageProducts;
