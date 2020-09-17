import React, { useState } from 'react'
import '../../../assets/style/pages/Verification.scss'
import classNames from 'classnames'
import {NavLink} from "react-router-dom"


const isValidEmail = email =>
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );

export default ({conf}) => {

    const [isTouched, setIsTouched] = useState(false)
    const [verify, setVerify] = useState(false)

    const changeVerifyHandler = e => {
        setIsTouched(true)
        if(isValidEmail(e.target.value) && isTouched) {
            setVerify(false)
        } else {
            setVerify(true)
        }
    }
    return(
        <div className="container">
                <div className="verification">
                    <h2 className="enter__email-verification">Enter Email Verification</h2>
                    <p className="please__enter-verification">Please enter verification</p>
                    <div className="step__one-form">
                        <div className={classNames({'blood': verify})}>
                            <input type="text" onChange={changeVerifyHandler} className={classNames('input_field')} />
                        </div>
                        <div className={classNames('continue__btn continue__or-previous verify__email')}>
                            <NavLink to="/Registrationform/3" onClick={() => conf([20, 'card'])} className={classNames('btn__next-step')}>
                                <button className="invisible__btn">Verify</button>
                            </NavLink>
                        </div>
                    </div>


                    {/*<button className={classNames('button-step')}>Verify</button>*/}
                </div>

        </div>
        
    )
}