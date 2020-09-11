import React from 'react'
import '../../../assets/style/pages/Thanks.scss'
import { NavLink } from 'react-router-dom'


export default ({conf}) => {
    return(
        <div className="container-lg">
            <div className="thanks__for">
                <h2>Done</h2>
                <p className="it__is-done">Its Done</p>
                <p className="form__is-completed">Form is completed! <span>Please find your entry soon.</span></p>
                <img src="../../../assets/images/mail1.png" />
                <p>Thank You!</p>
                <NavLink to='/step-four'  onClick={() => conf(1)} className="btn__next-step">
                    Continue
                </NavLink>
            </div>
        </div>
    )
}