import React from "react"
import { Route,Routes } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Cards from "./cards"


function Frontpage() {
    return (
        <>
           <Navbar/>
           <Cards/>
           <Footer/>
        </>
    )
}
export default Frontpage