import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from "../Pages/HomePage";
import CheckoutPage from "../Pages/CheckoutPage";
import ConfirmationPage from "../Pages/ConfirmationPage";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>

                <Route exact path="/checkout">
                    <CheckoutPage/>
                </Route>

                <Route exact path="/confirmation">
                    <ConfirmationPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
