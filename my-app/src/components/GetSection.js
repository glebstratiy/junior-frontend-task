import React from "react";

import { Users } from "./Users";




export function GetSection(){
    
    
    return(
        <div className="getSection">
            <h1 className="text-center text-6xl mt-[140px] pb-[50px]">Working with GET request</h1>
            <div className="cards flex justify-center pb-[50px]">
            <Users/>
            </div>
            <div className="flex justify-center">
            <button type="button" className="bg-yellow-400 rounded-2xl p-2 text-2xl mb-[150px]">Show more</button>
            </div>
        </div>
    );
}