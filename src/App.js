import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import AuthProvider from "./contexts/AuthProvider";
import DeliveryProvider from "./contexts/DeliveryProvider";
import OrderProvider from "./contexts/OrderProvider";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import BikeDetailScreen from "./screens/BikeDetailScreen";
import ErrorScreen from "./screens/ErrorScreen";
import Explore from "./screens/Explore";
import HomeScreen from "./screens/HomeScreen";
import OrderSuccessfulScreen from "./screens/OrderSuccessfulScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";

const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <OrderProvider>
                    <DeliveryProvider>
                        <Switch>
                            <Route exact path="/">
                                <HomeScreen />
                            </Route>
                            <PrivateRoute path="/dashboard">
                                <Dashboard />
                            </PrivateRoute>
                            <PublicRoute path="/signin">
                                <SignInScreen />
                            </PublicRoute>

                            <Route path="/cart">
                                <PlaceOrderScreen />
                            </Route>

                            <PublicRoute exact path="/signup">
                                <SignUpScreen />
                            </PublicRoute>
                            <PrivateRoute exact path="/bikes/:name">
                                <BikeDetailScreen />
                            </PrivateRoute>
                            <Route exact path="/explore">
                                <Explore />
                            </Route>
                            <PrivateRoute exact path="/order-successful">
                                <OrderSuccessfulScreen />
                            </PrivateRoute>
                            <Route path="*">
                                <ErrorScreen />
                            </Route>
                        </Switch>
                    </DeliveryProvider>
                </OrderProvider>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default App;
