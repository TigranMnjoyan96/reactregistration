import React from 'react'
import {NavLink} from "react-router-dom";
import { Title } from '../../components';

export default ({conf, title}) => {
    
    return(
        <div>
            <Title title="title 3" />
            <div className="continue__btn">
                <NavLink to='/Registrationform/2' onClick={() => conf(-1)} className="btn__previous-step">
                    <button  className="invisible__btn previous">Previous</button>
                </NavLink>
                <NavLink to='/Registrationform/4'  onClick={() => conf(1)} className="btn__next-step">
                    <button  className="invisible__btn">Continue</button>
                </NavLink>
            </div>

        </div>
    )
}