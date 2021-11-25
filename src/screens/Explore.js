import React from "react";
import BikeItem from "../components/Bikes Showcase/BikeItem";
import Navbar from "../components/Navbar/Navbar";
import useFetch from "../hooks/useFetch";

const Explore = () => {
    const [bikes, spinner] = useFetch();

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
            <Navbar />
            <section className="my-12 mt-72 md:mt-32 max-w-screen-xl mx-auto px-6">
                <h1 className="text-center text-3xl mt-8 md:mt-5 md:text-4xl lg:text-5xl poppins font-semibold text-gray-600 p-2 shadow-2xl ">
                    Available Products : -
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                    {bikes.map((item) => (
                        <BikeItem key={item.id} {...item} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Explore;
