import React from "react";
import logo from '../mockups/logo.png'
export function Header(){
    return(
        <div className="Header flex text-3xl mx-auto pb-[30px]">
            <a href="#"><img src={logo} alt="Logo" className="w-full pl-12 pt-4"></img></a>
        <h1 className="text-black-700 flex justify-start pt-4">TESTTASK</h1>
        <ul className="absolute right-[150px] pt-4">
            <button className="bg-yellow-400 rounded-2xl p-2" type="button">Users</button>
            <button className="bg-yellow-400 rounded-2xl p-2 ml-20" type="button">Sign up</button>
        </ul>
        </div>
    );
}