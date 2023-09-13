import React from "react"; 
import "../style/wear.css"



/*
@author Sejal Patel
Shows the weat page
*/



/*
Checks the where its toggled pass right style accoring do that

@param toggled, onClick
@ return toggle page with image
*/

export default function Toggle({toggled, onClick}){
    return(

        
        <div onClick={onClick} className={`toggle${toggled ? " cold " : ""} ` }>
            <div className="notch" />
                <div>
                    <div className="arrow tri" />
                    <div className="arrow sq" />
                </div>
                <div className="wear ">

                    <img className="clothes" />
                    
                </div>
           
            
            
        </div>
    );
}