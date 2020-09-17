import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
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


function validFullName(value) {
    return value.match("^([a-zA-Z]{2,}\\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\\s?([a-zA-Z]{1,})?)")
}

export default ({conf}) => {

    // Using React hooks and redux

    const state = useSelector(state => state.user)

    // ! State 
    const [countries, setCountries] = useState([])
    const [email, setEmail] = useState('')
    const [isTouched, setIsTouched] = useState(false)
    const [errMsg, setErrMsg] = useState(false)
    const [nextStep, setNextStep] = useState(false)
    const [first, setFirst] = useState(true)
    const [validName, setValidName] = useState(false)
    const [nameTouched, setNameTouched] = useState(false)
    const [nameIsValid, setNameIsValid] = useState(false)

    // step two validation when clicking continue button
    const [stepTwo, setStepTwo] = useState(false)

    // static user name value
    const [admin, setAdmin] = useState('Joe Doe')
    // for admin validation
    const [adminIsValid, setAdminIsValid] = useState(true)
    //start typing admin name


    // if phone number is invalid on second step
    const [newErr, setNewErr] = useState(false)

    // empty phone number input
    const [empty, setEmpty] = useState(false)


    const [resolve, setResolve] = useState(true)
    const [showName, setShowName] = useState(false)

    // show errors when clicking button
    const [start, setStart] = useState(false)


    // ! Did Mount?
    useEffect(() => {
        axios.get('http://restcountries.eu/rest/v2/region/europe')
            .then(res => {
                setCountries(res.data)
            })
    }, [])


    useEffect(() => {

        if(showName && adminIsValid) {
            setStepTwo(true)
        }
    })
    // ! Functionality
    const changeEmailHandler = (e) => {
        setIsTouched(true)
        let value = e.target.value.replace(/[^0-9.]/gi, "");
            
            let value_array = splitByThree(value);

            e.target.value = value_array.join('-');
            if(e.target.value.length >= 11 && e.target.value == '111-111-111') {
                setErrMsg(false)
                setStart(false)
            }else{
                setErrMsg(true)
               setNewErr(true)
            }
            // if no any error hide 'please resolve the error'
            if(!errMsg) {
                setEmpty(true)
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

    const changeAdminHandler  = e => {
        setAdmin(e.target.value)
        if(e.target.value == "Joe Doe") {
            setAdminIsValid(true)
        } else {
            // need to show error
            setAdminIsValid(false)
        }
        console.log(stepTwo, 'steptwo')
    }

    const continueBtnHandler = () => {
        console.log(111111111)
        setStart(true)

        if(errMsg) {
            setResolve(true)
        } else if(!errMsg && isTouched) {
            setShowName(true)
        }

        if(errMsg || empty) {
            setStart(false)
        }
        if(stepTwo) {
            setStepTwo(false)
        }
    }

    return (
        <div>
                <div className="step__one-form">
                    <Title title="Title of the Form" />
                    <div className="country aligned__input-bottom">
                        <label htmlFor="countries">Country</label>
                        <select name="" id="countries">
                            {countries.map(({name}) => {
                                return(
                                    <option key={name} value={name}>{name}</option>
                                    )
                            })}
                        </select>
                    </div>

                    <div className={classNames('phone__number', 'aligned__input-bottom', {'blood': !stepTwo && (errMsg || start)})}>
                        <label htmlFor="phone">Number</label>
                        <input type="text"
                               id="phone"
                               className={classNames('phone__number-field')}
                               placeholder="0-0000-0000"
                               value={email}
                               onChange={changeEmailHandler}
                        />
                        {
                            !stepTwo && (errMsg || start) ?   <span className={classNames('span__error-message')}>Incorrect input message</span> : null
                        }
                    </div>

                    <div className={classNames('show__name-field', 'aligned__input-bottom', {'blood': !adminIsValid && !stepTwo}, {'hide__name-field': showName})}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" onChange={changeAdminHandler} value={admin} className={classNames('input_field')} />
                    </div>
                </div>

            <div className={classNames('continue__btn start', {'previous__btn-after': showName})}>
                {
                    showName ? <button className="btn__previous-step" onClick={() => setShowName(false)}>Previous</button> : null
                }
                {
                    showName && adminIsValid && stepTwo ? <NavLink to='/Registrationform/2' onClick={() => conf(1)}  className={classNames('btn__next-step')}>
                                    <button  className="invisible__btn">Continue</button>
                             </NavLink> : <button className={classNames('btn__next-step')} onClick={continueBtnHandler}>Continue</button>
                }
            </div>
            {
                empty && errMsg || start || !adminIsValid && showName? <span className={classNames('incorrect__inp-message')}>PLease Resolve the error</span> : null
            }

        </div>
    );
};


// , {'isDisabled': isDisabled }

// {
//     first ? <button className="btn__next-step" onClick={firstStep}>Continue</button> :
//
//
// }
// {
//     errMsg && buttonIsClicked? <p>incorrect input message</p> : null
// }