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

export default ({conf}) => {

    // Using React hooks and redux

    const state = useSelector(state => state.user)

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


    const [resolve, setResolve] = useState(false)
    const [showName, setShowName] = useState(false)


    // ! Did Mount?
    useEffect(() => {
        axios.get('http://restcountries.eu/rest/v2/region/europe')
            .then(res => {
                setCountries(res.data)
            })
        console.log(state, 'state')
    }, [])


    // ! Functionality
    const changeEmailHandler = (e) => {
        setIsTouched(true)
        let value = e.target.value.replace(/[^0-9.]/gi, "");
            
            let value_array = splitByThree(value);

            e.target.value = value_array.join('-');
            if(e.target.value.length >= 11 && e.target.value == '111-111-111') {
                console.log(e.target.value, 'value')
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

    const continueBtnHandler = () => {
        if(errMsg) {
            setResolve(true)
        } else if(!errMsg && isTouched) {
            setShowName(true)
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

                    <div className={classNames('phone__number', 'aligned__input-bottom', {'blood': errMsg})}>
                        <label htmlFor="phone">Number</label>
                        <input type="text"
                               id="phone"
                               className={classNames('phone__number-field')}
                               placeholder="0-0000-0000"
                               value={email}
                               onChange={changeEmailHandler}
                        />
                        {
                            errMsg ?   <span className={classNames('span__error-message')}>Incorrect input message</span> : null
                        }
                    </div>

                    <div className={classNames('show__name-field', 'aligned__input-bottom', {'hide__name-field': showName})}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" className={classNames('input_field')} />
                    </div>

                </div>

            <div className={classNames('continue__btn start', {'previous__btn-after': showName})}>
                {
                    showName ? <button className="btn__previous-step" onClick={() => setShowName(false)}>Previous</button> : null
                }
                <button className={classNames('btn__next-step')} onClick={continueBtnHandler}>Continue</button>
            </div>

            {
                resolve && errMsg ? <span className={classNames('incorrect__inp-message')}>PLease Resolve the error</span> : null
            }

        </div>





    );
};


// , {'isDisabled': isDisabled }

// {
//     first ? <button className="btn__next-step" onClick={firstStep}>Continue</button> :
//         <NavLink to='/Registrationform/2' onClick={() => conf(1)}  className={classNames('btn__next-step')}>
//             <button  className="invisible__btn" onClick={continueButton}>Continue</button>
//         </NavLink>
//
// }
// {
//     errMsg && buttonIsClicked? <p>incorrect input message</p> : null
// }