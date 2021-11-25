import React from "react";
import useFetch from "../../hooks/useFetch";
import BikeItem from "./BikeItem";

const Bikes = () => {
    const [bikes, spinner] = useFetch();
    if (spinner) {
        return (
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
        );
    }

    return (
        <section className="my-12 max-w-screen-xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                {bikes.slice(0, 6).map((item) => (
                    <BikeItem key={item.id} {...item} />
                ))}
            </div>
        </section>
    );
};

export default Bikes;
