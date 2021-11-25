import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, spinner } = useAuth();

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
    if (!admin) {
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
        // user.email && admin
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;
