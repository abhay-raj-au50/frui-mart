import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import SideDrawer from "./components/Sidedrawer";
import Backdrop from "./components/Backdrop";

// Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";


function App() {
    const [sideToggle, setSideToggle] = useState(false);

    return ( <
        Router >
        <
        Navbar click = {
            () => setSideToggle(true)
        }
        /> <
        SideDrawer show = { sideToggle }
        click = {
            () => setSideToggle(false)
        }
        /> <
        Backdrop show = { sideToggle }
        click = {
            () => setSideToggle(false)
        }
        />  <
        Routes className = "app" >
        <
        Route path = "/"
        element = { < HomeScreen / > }
        / > <
        Route path = "/product/:id"
        element = { < ProductScreen / > }
        / > <
        Route path = "/cart"
        element = { < CartScreen / > }
        / > <
        /
        Routes > < /
        Router >
    );
}

export default App;