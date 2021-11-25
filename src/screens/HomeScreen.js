import React from "react";
import AboutUs from "../components/About/AboutUs";
import Bikes from "../components/Bikes Showcase/Bikes";

import Footer from "../components/Footer/Footer";
import Banner from "../components/Header/Banner";
import Navbar from "../components/Navbar/Navbar";
import GoogleMap from "./GoogleMap";
import Reviews from "./Reviews";

const HomeScreen = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <h1 className="text-center text-3xl mt-8 md:mt-5 md:text-4xl lg:text-5xl poppins font-semibold text-gray-600 p-2 shadow-2xl glass rounded-lg">
                Available Bikes : -
            </h1>
            <Bikes />
            <Reviews/>
            <AboutUs />
            <GoogleMap />
            <Footer />
        </>
    );
};

export default HomeScreen;
