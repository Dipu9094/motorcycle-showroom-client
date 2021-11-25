import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import useAuth from "../hooks/useAuth";

const AddReview = () => {
    const {user} = useAuth()
    const {
        register,
        handleSubmit,
        reset,
        // onChange,
        // onBlur,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        data.name=user.displayName
        data.email=user.email
        console.log(data);
        fetch("https://frozen-peak-94262.herokuapp.com/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    swal("Successfully added");
                    reset(data);
                }
            });
    };

    return (
        <>
            <h1 className="text-center text-2xl text-gray-400">
                Please put your review here.
            </h1>
            <form className="ml-6 my-2 " onSubmit={handleSubmit(onSubmit)}>
                {/* <input
                    className="border-2 rounded my-2  w-3/4 md:w-1/2 p-2 "
                    placeholder="name"
                    {...register("name", { required: true })}
                />
                <br />
                <input
                    className="border-2 rounded my-2 w-3/4 md:w-1/2 p-2 "
                    placeholder="email"
                    type="email"
                    {...register("email", { required: true })}
                />
                <br /> */}
                <textarea
                    placeholder="comment"
                    {...register("comment", { required: true })}
                    cols="10"
                    rows="5"
                    className="w-3/4 md:w-1/2 p-2 mb-3"
                ></textarea>
                <br />
            
                <label
                    for="rating"
                    className="border-2 rounded my-2 w-3/4 md:w-1/2 p-2"
                >
                    Choose a rating value:
                </label>
                <select {...register("rating")}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br />

                {errors.exampleRequired && <span>This field is required</span>}
                <input
                    className="px-5 py-2  mt-4 bg-green-300 font-bold mx rounded-lg"
                    type="submit"
                    style={{ cursor: "pointer" }}
                />
            </form>
        </>
    );
};

export default AddReview;
