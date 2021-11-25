import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const AddNew = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        axios
            .post("https://frozen-peak-94262.herokuapp.com/products", data)
            .then((res) => {
                if (res.data.insertedId) {
                    swal("added successfully!");
                    reset();
                }
            });
        // reset({data:''});
    };
    return (
        <>
            <div className="table add-service mt-8 p-3  ">
                <h2 className="my-4 text-center text-5xl text-gray-500 ">
                    Please add new item :-
                </h2>
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        placeholder="Bike name"
                        {...register("name", {
                            required: true,
                            maxLength: 40,
                        })}
                    />
                    <input
                        placeholder="Company name"
                        {...register("company", {
                            required: true,
                            maxLength: 40,
                        })}
                    />
                    <textarea
                        placeholder="description"
                        {...register("description")}
                    />
                    <input
                        placeholder="price"
                        type="number"
                        {...register("price")}
                    />
                    <input placeholder="img-url" {...register("img")} />
                    <input className="cursor-pointer" type="submit" />
                </form>
            </div>
        </>
    );
};

export default AddNew;
