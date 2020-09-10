import React  from 'react'
import {NavLink} from "react-router-dom";

export default ({conf}) => {
    
    return(
        <div>
            <h2>Step Five</h2>
            <div className="continue__btn">
                <NavLink to='/step-four' onClick={() => conf(-20)} className="btn__previous-step">
                    <button  className="invisible__btn previous">Previous</button>
                </NavLink>
                <NavLink to='/step-six' onClick={() => conf(20)} className="btn__next-step">
                    <button className="invisible__btn">Continue</button>
                </NavLink>
            </div>
        </div>
    )
}