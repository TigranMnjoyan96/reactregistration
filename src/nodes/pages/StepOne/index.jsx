import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import classNames from 'classnames'
import axios from 'axios'
import '../../../assets/style/pages/StepOne.scss'

import { Title } from '../../components'


// ! Phone number format
function splitByThree(string){
    let new_array = [];

    for(let i = 0; i < string.length; i+=3){
        new_array.push(string.slice(i, i + 3));
    }

    return new_array;
}

export default ({conf}) => {

    // ! State 
    const [countries, setCountries] = useState([])
    const [isDisabled, setIsDiabled] = useState(true)
    const [email, setEmail] = useState('')
    const [isTouched, setIsTouched] = useState(false)
    const [errMsg, setErrMsg] = useState(false)
    const [nextStep, setNextStep] = useState(false)
    const [first, setFirst] = useState(true)
    const [validName, setValidName] = useState(false)
    const [nameTouched, setNameTouched] = useState(false)
    const [nameIsValid, setNameIsValid] = useState(false)

    // ! Did Mount?
    useEffect(() => {
        axios.get('http://restcountries.eu/rest/v2/region/europe')
            .then(res => {
                setCountries(res.data)
            })
    }, [])


    // ! Functionality
    const changeEmailHandler = (e) => {
        setIsTouched(true)
        let value = e.target.value.replace(/[^0-9.]/gi, "");
            
            let value_array = splitByThree(value);

            e.target.value = value_array.join('-');
            if(e.target.value.length >= 11) {
                setErrMsg(false)
                setIsDiabled(false)
            }else{
                setIsDiabled(true)
                setErrMsg(true)
            }
            setEmail(e.target.value)

    }

    const firstStep = () => {
        setNextStep(true)
        setNameTouched(true)

        setFirst(false)
    }

    const changeUserNameHandler = (e) => {
        if(nameTouched && e.target.value.length < 3) {
            setNameIsValid(true)
        } else {
            setNameIsValid(false)
        }
    }

    return (
        <div>

                <div className="step__one-form">
                    <Title title="Title of the Form" />
                    <div className="country">
                        <label htmlFor="countries">Country</label>
                        <select name="" id="countries">
                            {countries.map(({name}) => {
                                return(
                                    <option key={name} value={name}>{name}</option>
                                    )
                            })}
                        </select>
                    </div>

                    <div className={classNames('phone__number', {'blood': errMsg})}>
                        <label htmlFor="phone">Number</label>
                        <input type="text"
                               id="phone"
                               className={classNames('phone__number-field', {'user__name-field': !nextStep})}
                               placeholder="0-0000-0000"
                               value={email}
                                onChange={changeEmailHandler}
                        />
                            {/*<button className={classNames('next__step-btn', {'none': nextStep, 'isDisabled': isDisabled})}  onClick={() => setNextStep(true)}>Next</button>*/}
                    </div>

                    { nextStep ?  <div className={classNames({'blood': nameIsValid})}>
                        <label htmlFor="userName" className="user__name-label">Name</label>
                        <input id="userName" onChange={changeUserNameHandler} type="text" placeholder="Joe Doe" className="input_field user__name-field" />
                    </div> : null}
                </div>

            <div className={classNames('continue__btn start')}>
                {
                    first ? <button className="btn__next-step" onClick={firstStep}>Continue</button> :
                    <NavLink to='/step-two' onClick={() => conf(1)}  className={classNames('btn__next-step', {'isDisabled': isDisabled })}>
                    <button  className="invisible__btn">Continue</button>
                    </NavLink>
                }

            </div>

        </div>





    );
};

