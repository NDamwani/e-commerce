import React, { Suspense, lazy } from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from "./core/Home"

const Rautes = () =>{
    return(
        <Router>
            {/* <Suspense> */}
                <Routes>
                    <Route  path ="/" element={<Home/>}/>
                    <Route exact path ="/Home" element={<Home/>}/>
                </Routes>

            {/* </Suspense> */}
        </Router>
    );
}

export default Rautes;