import React from "react";

const Banner = () => {
    const n = new Date();
    const y = n.getFullYear();
    const m = n.getMonth() + 1;
    const d = n.getDate();
    const currentDate = m + "/" + d + "/" + y;

    return (
        <section className="header-banner h-96 w-full bg-yellow-50">
            <div className="flex flex-col items-center justify-center h-full">
                <h1
                    data-aos="fade-right"
                    className="text-center text-3xl mt-40 md:mt-2 md:text-4xl lg:text-5xl poppins font-semibold text-gray-600 p-2 shadow-2xl  rounded glass"
                >
                    {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
                    <marquee>
                        Best Bike Showroom is waiting guys! Date-{currentDate}
                    </marquee>
                </h1>

                <div className="rounded-full p-1 box-border mt-8 bg-white overflow-hidden ring-red-300 focus:ring-4 w-80 md:w-96 flex items-center">
                    <input
                        type="text"
                        className=" rounded-full px-4 focus:outline-none  w-full bg-transparent"
                        placeholder="Search here ......."
                    />
                    <button className="text-sm bg-primary py-3 px-6 rounded-full text-white poppins ring-red-300 focus:ring-4 transition duration-300 hover:scale-105 transform">
                        Search
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Banner;
