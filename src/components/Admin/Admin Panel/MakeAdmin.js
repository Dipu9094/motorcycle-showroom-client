import React, { useState } from "react";
import { useHistory } from "react-router";
import swal from "sweetalert";

const MakeAdmin = () => {
    const [email, setEmail] = useState("");

    const history = useHistory();

    const handleOnBlur = (e) => {
        setEmail(e.target.value);
    };
    const handleAdminSubmit = (e) => {
        const user = { email };
        fetch("https://frozen-peak-94262.herokuapp.com/users/admin", {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                swal("Added new Admin Successfull...");
                if (data.modifiedCount) {
                    history.push("/dashboard");
                    e.target.value = "";
                }
            });

        e.preventDefault();
    };

    return (
        <div>
            <form className="m-3" onSubmit={handleAdminSubmit}>
                <input
                    type="email"
                    onBlur={handleOnBlur}
                    placeholder="Please input Admin's email "
                    required
                    className="border-2 rounded-lg my-2  w-3/4 md:w-1/2 p-2"
                />
                <br />
                <button
                    className="px-5 py-2  mt-4 bg-green-300 font-bold mx rounded-lg"
                    type="submit"
                    style={{ cursor: "pointer" }}
                >
                    Submit{" "}
                </button>
            </form>
        </div>
    );
};

export default MakeAdmin;

