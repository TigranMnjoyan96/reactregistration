import React, {useState} from 'react'
import classNames from 'classnames'
import { Title } from '../../components'
import {NavLink} from "react-router-dom"

import {useSelector, useDispatch} from 'react-redux'




const validateEmail = email => {
    return email.match("/^(([^<>()[]\\.,;:s@\"]+(.[^<>()[]\\.,;:s@\"]+)*)|(\n" +
        "\".+\"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA\n" +
        "-Z-0-9]+.)+[a-zA-Z]{2,}))$/igm")
}


export default ({ conf }) => {

    const [nameIsValid, setNameIsValid] = useState(true)
    const [nameTouched, setNameTouched] = useState(false)

    const [emailIsValid, setEmailIsValid] = useState(true)
    const [emailTouched, setEmailTouched] = useState(false)

    const [password, setPassword] = useState(true)
    const [passwordTouched, setPasswordTouched] = useState(false)



const state = useSelector(state => state)
    const dispatch = useDispatch()


    const changePasswordHandler = (e) => {
setPasswordTouched(true)
        if(e.target.value.length >= 6 ) {
            setPassword(false)
        } else {
            setPassword(true)
        }
    }


    const changeEmailHandler = e => {
        setEmailTouched(true)
        if(validateEmail(e.target.value)) {
            setEmailIsValid(true)
        } else {
            setEmailIsValid(false)
        }
        dispatch({type: 'GET_EMAIL', payload: e.target.value})
    }

    const changeNameHandler = (e) =>  {
        setNameTouched(true)
        if(e.target.value.length > 3 ) {
            setNameIsValid(false)
        } else {
            setNameIsValid(true)
        }
        dispatch({type: 'CHANGE_USER_NAME', payload: e.target.value})
    }

    return(
        <div>
            <div className="container-lg">
                <Title title="Just on the Show" />
                <div className={classNames('registration__form-fields')}>
                    <div className={classNames({'blood': nameIsValid && nameTouched})}>
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Joe Doe" onChange={changeNameHandler} value={state.card.name} id="name" className={classNames('input_field')} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" value={state.email.email} onChange={changeEmailHandler} placeholder="Example@sample.com" id="email" className={classNames('input_field')} />
                    </div>
                    <div className={classNames({'blood': password && passwordTouched})}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={changePasswordHandler} className={classNames('input_field')} />
                    </div>
                </div>
            </div>
            <div className="continue__btn continue__or-prev">
                <NavLink to="/card" onClick={() => conf(-10)} className="btn__previous-step">
                    <button className="invisible__btn previous">Previous</button>
                </NavLink>

                <NavLink to="/done" onClick={() => conf(null)} className={classNames('btn__next-step')}>
                    <button className="invisible__btn">Complete it! </button>
                </NavLink>

            </div>
        </div>
    )
}


// {'isDisabled': nameIsValid || emailIsValid || password}