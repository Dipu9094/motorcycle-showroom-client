import React, { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";

const Reviews = () => {
    const [reviews, setreviews] = useState([]);

    useEffect(() => {
        fetch("https://frozen-peak-94262.herokuapp.com/reviews")
            .then((res) => res.json())
            .then((data) => setreviews(data));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <h1 className="font-bold text-5xl text-center text-green-700">
                Customer's Review --
            </h1>
            <section className="my-12 max-w-screen-xl  mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                    {reviews.slice(0, 12).map((review) => (
                        <div className="bg-white border border-gray-300 transition transform duration-700 hover:shadow-2xl hover:scale-105 p-4 rounded-lg relative">
                            <div className="flex flex-col  my-3 space-y-2">
                                <h1 className="text-gray-900 poppins ">
                                    Name : {review.name}
                                </h1>
                                <h2 className="text-gray-900 poppins">
                                    Gmail : {review.email}
                                </h2>
                                <p className="text-gray-700 text-lg poppins">
                                    <span className="text-green-800 font-bold ">
                                        Comment
                                    </span>
                                    : {review.comment.slice(0, 120)}
                                </p>

                                <h2 className="poppins text-2xl text-blue-400 font-bold ">
                                    Rating :
                                    <Rating ratingValue={`${review.rating}`} />
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Reviews;
