import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className='flex justify-between px-5 py-2'>
                <h1 className='font-bold text-2xl cursor-pointer'>RTK Store</h1>
                <ul className='flex gap-2'>
                    <NavLink to={"/"} className='text-xl cursor-pointer font-semibold text-gray-600'>Home</NavLink>
                    <NavLink to={"/cart"} className='text-xl cursor-pointer font-semibold text-gray-600'>Cart</NavLink>

                </ul>
            </div>
        </>
    )
}

export default Navbar