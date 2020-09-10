import React from 'react'
import {NavLink} from "react-router-dom";

export default ({conf}) => {
    
    return(
        <div>
            <h2>Step Three</h2>
            <div className="continue__btn">
                <NavLink to='/step-two' onClick={() => conf(-1)} className="btn__previous-step">
                    <button  className="invisible__btn previous">Previous</button>
                </NavLink>
                <NavLink to='/step-four'  onClick={() => conf(1)} className="btn__next-step">
                    <button  className="invisible__btn">Continue</button>
                </NavLink>
            </div>

        </div>
    )
}