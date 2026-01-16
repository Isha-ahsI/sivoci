import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home1 from '../pages/Home1'
import Home2 from '../pages/Home2'
import Home3 from '../pages/Home3'
import Home4 from '../pages/Home4'

const RoutesPaths = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home1 />} />
                <Route path='/home1' element={<Home1 />} />
                <Route path='/home2' element={<Home2 />} />
                <Route path='/home3' element={<Home3 />} />
                <Route path='/home4' element={<Home4 />} />
            </Routes>
        </>

    )
}

export default RoutesPaths
