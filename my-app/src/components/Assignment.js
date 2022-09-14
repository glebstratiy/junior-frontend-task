import React from "react";
import background from '../mockups/Background-assignment.png'
export function Assignment(){
    return(
        <div className="Assignment font-nunito ">
            <img src={background} alt='Backround image' className="w-[1980px] h-[1024px] z-0"></img>
            <h1 className="absolute top-[350px] left-[700px] text-center text-6xl text-white z-10 max-w-[500px]" >Test assignment for front-end developer</h1>
            <p className="absolute top-[533px] left-[700px] text-center text-3xl text-white z-10 max-w-[500px] pt-10" >What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
            <button type="button" className="absolute top-[950px] left-[890px] bg-yellow-400 rounded-xl p-2 text-3xl">Sign up</button>
        </div>
    );
}