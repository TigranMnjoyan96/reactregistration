import React from 'react'
import {NavLink} from "react-router-dom"


export default ({conf}) => {
   
    return(
        <div>
            <h2>Step Four</h2>
            <div className="continue__btn">
                <NavLink to='/Registrationform/3' onClick={() => conf(-10)} className="btn__previous-step">
                    <button className="invisible__btn previous">Previous</button>
                </NavLink>
                <NavLink to='/Registrationform/5' onClick={() => conf(10)} className="btn__next-step">
                    <button  className="invisible__btn">Continue</button>
                </NavLink>
            </div>
        </div>
    )
}