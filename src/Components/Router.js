import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Frontpage from './Home';
import Login from './Login/login';
import Sigin from './Login/signup';
function Home() {
    return(
        <>
            <Routes>
                <Route  path='/' element={<Frontpage/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<Sigin/>}/>
            </Routes>
        </>
    )
}
export default Home;