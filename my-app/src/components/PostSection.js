import axios from "axios";
import React from "react";
import { Positions } from "./Positions";




export function PostSection(){

    

    let formData = new FormData();
    
    const submitHandler = (event) => {
        event.preventDefault()

        axios.post('https://frontend-test-assignment-api.abz.agency/api/v1/users')

    }
    
    return(
        <div className="postSection">
            <h1 className="text-center text-6xl mt-[140px] mb-[50px]">Working with POST request</h1>
            <form action="#" method="POST" onSubmit={submitHandler}>
                <div className="flex justify-center">
                <input id="name" type="text" placeholder="Your name" className="border-gray-300 w-[380px] h-[54px] mb-[50px]"/>
                </div>
                <div className="flex justify-center">
                <input id="email" type="email" placeholder="Email" className="border-gray-300 w-[380px] h-[54px] mb-[50px]"/>
                </div>
                <div className="flex justify-center">
                <input id="phone" type="tel" placeholder="Phone" className="border-gray-300 w-[380px] h-[54px]"/>
                </div>
                <p className="text-center mr-[140px] text-gray-400 mb-[25px]">+38 (XXX) XXX - XX - XX</p>
                <div className="flex justify-center">
                <div className="flex flex-col">
                    <p className="text-base">Select your position</p>
                    <Positions />
                </div>
                </div>
                <div className="file_inp flex justify-center">
                {/* <label for="img" className="">Select your image</label> */}
                <input type="file" id="img" name="img" accept="image/*" className="w-[380px] mb-[50px]"/>
                </div>
                <div className="submit flex justify-center">
                <button type="submit" className="bg-gray-300 rounded-xl p-2 text-3xl mb-[100px]">Sign up</button>
                </div>
            </form>
        </div>
    );
}