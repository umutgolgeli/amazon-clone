import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51LuFiWARb0t1Hj3V278DXESFNs1Uu1CjCuTUBDQz2mYoE4DirdEbKd63CtgqLMBnS2dBxnZaUPoGCjmnwfq1rtnO00pWZNGbfA"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once whent the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    //BEM
    <Router>
      <div className="App">
        <Routes>
        <Route
            exact
            path="/orders"
            element={
              <>
                 <Header /> 
                <Orders />
              </>
            }
          ></Route>
          <Route
            exact
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          ></Route>
          <Route
            exact
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          ></Route>
          <Route
            exact
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                <Payment />
                </Elements>
               
              </>
            }
          ></Route>
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
