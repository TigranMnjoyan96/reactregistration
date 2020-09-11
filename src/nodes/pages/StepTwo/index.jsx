import React, { useState } from 'react'
import classNames from 'classnames'
import '../../../assets/style/pages/StepTwo.scss'
import {NavLink} from "react-router-dom";

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


const isValidEmail = email =>
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );


export default ({conf}) => {


    // ! State
    const [isDisabled, setIsDisabled] = useState(true)
    const [email, setEmail] = useState('')
    const [isInvalid, setIsInvalid] = useState(false)
    const [isTouched, setIsTouched] = useState(false)
    const [phoneIsValid, setPhoneIsValid] = useState(true)
    const [touched, setTouched] = useState(false)






    //  * * Functions

    const changeEmailHandler = (e)  => {
            setIsTouched(true)
            setIsInvalid(true)
            setEmail(e.target.value)
        console.log(phoneIsValid, 222)


        if(isValidEmail(e.target.value) && isTouched) {

                setIsDisabled(false)
                setIsInvalid(false)
            } 
    }


    const changePhoneHandler = (value) => {
        setTouched(true)
        if(value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im) && touched) {
            setPhoneIsValid(false)
        } else {
            setPhoneIsValid(true)  
        }
    }



    return (
        <div>

            <div className="step__one-form">
                <div className="step__description">
                    <h2>Title of The Form</h2>
                    <div className="step__score two"></div>
                </div>
                <p className="information__featured">Information Feautred</p>

                <div className={classNames('country', {'blood': phoneIsValid && touched})}>

                        <label htmlFor="phone">Phone</label>
                    <PhoneInput
                    inputProps={{
                        name: 'phone',
                        required: true  
                    }}
                    country={'us'}
                   onChange={changePhoneHandler}

                />
                { 
                    phoneIsValid && touched ? <span className={classNames('error__message')}>Enter Valid Contact number</span> : null
                }
                </div>

                <div className={classNames('phone__number', {'blood': !!isInvalid})}>
                    <label htmlFor="email">Email</label>
                    <input type="email"
                           id="email"
                           className="phone__number-field"
                           placeholder="email"
                           value={email}
                           onChange={changeEmailHandler}

                    />
                    {
                    isInvalid ? <span className={classNames('error__message')}>Please enter a valid email address</span>
                        : null
                      
                    }
                </div>
            </div>

            <div className="continue__btn">
                <NavLink to="/" onClick={() => conf(-10)} className="btn__previous-step">
                    <button className="invisible__btn previous">Previous</button>
                </NavLink>

                <NavLink to="/thanks" onClick={() => conf(null)} className={classNames('btn__next-step', {'isDisabled': isDisabled || phoneIsValid})}>
                    <button className="invisible__btn">Continue</button>
                </NavLink>
            </div>

        </div>


    );
};

