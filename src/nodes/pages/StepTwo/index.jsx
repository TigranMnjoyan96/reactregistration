import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import '../../../assets/style/pages/StepTwo.scss'
import {NavLink} from "react-router-dom";


const isValidEmail = email =>
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );


export default ({conf}) => {



    let ageArray = []
    function ageGenerator() {
        for(let i = 18; i <= 60; i++) {
            ageArray.push(i)
        }
        return ageArray
    }


    const [age, setAge] = useState([])
    const [isDisabled, setIsDisabled] = useState(true)
    const [email, setEmail] = useState('')
    const [isInvalid, setIsInvalid] = useState(false)
    const [isTouched, setIsTouched] = useState(false)

    useEffect(() => {
        setAge(ageGenerator())
    }, [])


    const changeEmailHandler = (e)  => {
            setIsTouched(true)
            setIsInvalid(true)
            setEmail(e.target.value)

            if(isValidEmail(e.target.value) && isTouched) {

                setIsDisabled(false)
                setIsInvalid(false)
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

                <div className="country">
                    <label htmlFor="countries">Age</label>
                    <select name="" id="countries">
                        {age.map(e => {
                            return(
                                <option key={e} value={e}>{e}</option>
                            )
                        })}
                        
                    </select>
                </div>

                <div className={classNames('phone__number', {'blood': !!isInvalid})}>
                    <label htmlFor="email">Number</label>
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

                <NavLink to="/thanks" onClick={() => conf(null)} className={classNames('btn__next-step', {'isDisabled': isDisabled})}>
                    <button className="invisible__btn">Continue</button>
                </NavLink>
            </div>

        </div>


    );
};

