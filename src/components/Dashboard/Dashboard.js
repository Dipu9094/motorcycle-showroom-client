import React from "react";
import { FiLogOut } from "react-icons/fi";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import AdminRoute from "../../routes/AdminRoute";
import AddNew from "../../screens/AddNew";
import AddReview from "../../screens/AddReview";
import ManageOrder from "../../screens/ManageOrder";
import Orders from "../../screens/Orders";
import Payment from "../../screens/Payment";
import MakeAdmin from "../Admin/Admin Panel/MakeAdmin";
import ManageProducts from "../Admin/ManageProducts";

const Dashboard = () => {
    let { path, url } = useRouteMatch();

    const { signOutUser, admin } = useAuth();

    return (
        <>
            <div
                className="relative min-h-screen md:flex"
                data-dev-hint="container"
            >
<input type="checkbox" id="menu-open" className="hidden" />
                <header
                    className="bg-gray-600 text-gray-100 flex justify-between md:hidden"
                    data-dev-hint="mobile menu bar"
                >
                    <a
                        href="/dashboard"
                        className="block p-4 text-white font-bold whitespace-nowrap truncate"
                    >
                        Dashboard
                    </a>

                    <label
                        for="menu-open"
                        id="mobile-menu-button"
                        className="m-2 p-2 focus:outline-none hover:text-white hover:bg-gray-700 rounded-md"
                    >
                        <svg
                            id="menu-open-icon"
                            className="h-6 w-6 transition duration-200 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                        <svg
                            id="menu-close-icon"
                            className="h-6 w-6 transition duration-200 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </label>
                </header>

                <aside
                    id="sidebar"
                    className="bg-gray-800 text-gray-100 md:w-64 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto"
                    data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"
                >
                    <div
                        className="flex flex-col space-y-6"
                        data-dev-hint="optional div for having an extra footer navigation"
                    >
                        <a
                            href="/dashboard"
                            className="text-white flex items-center space-x-2 px-4"
                            title="Your App is cool"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 flex-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                />
                            </svg>
                            <span className="text-2xl font-extrabold whitespace-nowrap truncate">
                                Dashboard
                            </span>
                        </a>

                        <nav data-dev-hint="main navigation">
                            <p className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                    />
                                </svg>
                                <span>---------------------</span>
                            </p>

                            <p className="flex items-center space-x-2 py-2 px-4  transition duration-200 hover:bg-gray-700 hover:text-white">
                                <Link className="ml-6" to={`/`}>
                                    <button>Home</button>
                                </Link>{" "}
                            </p>

                            {admin ? (
                                <>
                                    <p className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                                        <Link
                                            className="ml-6"
                                            to={`${url}/manageproducts`}
                                        >
                                            <button>Manage Products</button>
                                        </Link>{" "}
                                    </p>
                                    <p className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                                        <Link
                                            className="ml-6"
                                            to={`${url}/manageorders`}
                                        >
                                            <button>Manage All Orders</button>
                                        </Link>{" "}
                                    </p>
                                    <p className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                                        <Link
                                            className="ml-6"
                                            to={`${url}/addNew`}
                                        >
                                            <button>Add A Product</button>
                                        </Link>{" "}
                                    </p>
                                    <p className="flex items-center space-x-2 py-2 px-4  transition duration-200 hover:bg-gray-700 hover:text-white">
                                        <Link
                                            className="ml-6"
                                            to={`${url}/adminpannel`}
                                        >
                                            <button>Make Admin</button>
                                        </Link>{" "}
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                                        <Link
                                            className="ml-6"
                                            to={`${url}/orders`}
                                        >
                                            <button>My orders</button>
                                        </Link>{" "}
                                    </p>
                                    <p className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                                        <Link
                                            className="ml-6"
                                            to={`${url}/payment`}
                                        >
                                            <button>Payment</button>
                                        </Link>{" "}
                                    </p>
                                    <p className="flex items-center space-x-2 py-2 px-4  transition duration-200 hover:bg-gray-700 hover:text-white">
                                        <Link
                                            className="ml-6"
                                            to={`${url}/addreview`}
                                        >
                                            <button>Add Review</button>
                                        </Link>{" "}
                                    </p>
                                </>
                            )}

                            <p className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                                <FiLogOut
                                    className="ml-6 cursor-pointer my-5 space-x-2  md:my-0  w-6 h-6 text-white-700"
                                    onClick={signOutUser}
                                />
                            </p>
                        </nav>
                    </div>

                    <nav data-dev-hint="second-main-navigation or footer navigation"></nav>
                </aside>

                <main id="content" className="flex-1 p-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        {/* <!-- Replace with your content --> */}
                        <h1 className="text-3xl text-center">
                            Welcome to Dashboard.....
                        </h1>
                        <div className="px-4 py-6 sm:px-0">
                            <div className="border-4 border-dashed border-gray-200 rounded-lg h-auto">
                                <Switch>
                                    <AdminRoute path={`${path}/manageorders`}>
                                        <ManageOrder />
                                    </AdminRoute>
                                    <AdminRoute path={`${path}/manageproducts`}>
                                        <ManageProducts />
                                    </AdminRoute>
                                    <AdminRoute path={`${path}/addNew`}>
                                        <AddNew />
                                    </AdminRoute>
                                    <AdminRoute path={`${path}/adminpannel`}>
                                        <MakeAdmin />
                                    </AdminRoute>
                                    <Route path={`${path}/payment`}>
                                        <Payment />
                                    </Route>
                                    <Route path={`${path}/orders`}>
                                        <Orders />
                                    </Route>
                                    <Route path={`${path}/addreview`}>
                                        <AddReview />
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                        {/* <!-- /End replace --> */}
                    </div>
                </main>
            </div>
        </>
    );
};

export default Dashboard;
