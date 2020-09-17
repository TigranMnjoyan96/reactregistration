import React, {useState}  from 'react'
import '../../../assets/style/pages/Card.scss'
import {PopUp, Title} from '../../components'
import classNames from 'classnames'
import info from '../../../assets/images/info.png'
import { NavLink } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'




export default ({conf}) => {

    const [nameIsValid, setNameIsValid] = useState(true)
    const [nameTouched, setNameTouched] = useState(false)

    const [cardIsValid, setCardIsValid] = useState(false)
    const [cardTouched, setCardTouched] = useState(false)

    const [dateIsValid, setDateIsValid] = useState(true)
    const [dateTouched, setDateTouched] = useState(false)

    const [cardCvv, setCardCvv] = useState(true)
    const [cvvTouched, setCvvTouched] = useState(false)


    const state = useSelector(state => state.card)
    const dispatch = useDispatch()

    console.log(state)
    const changeName = e => {
        setNameIsValid(true)
        if(e.target.value.length <= 3) {
            setNameIsValid(false)
        } else {
            setNameIsValid(true)
        }
        dispatch({type: 'CHANGE_USER_NAME', payload: e.target.value})
    }

    const changeNumber = e => {
        dispatch({type: 'CHANGE_CARD_NUMBER', payload: e.target.value})
        setCardTouched(true)
        if(!e.target.value.match("4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\\d{3})\\d{11}"))  {
                setCardIsValid(true)
        } else {
            setCardIsValid(false)
        }
    }

    const changeDate = e => {
        setDateTouched(true)
        if(e.target.value.length == 4 && Number(e.target.value)) {
            setDateIsValid(false)
        } else {
            setDateIsValid(true)
        }
        dispatch({type: 'CHANGE_CARD_DATE', payload: e.target.value})
    }

    const changeCVV = e => {
        setCvvTouched(true)
        if(e.target.value.length === 3 && Number(e.target.value)) {
            setCardCvv(false)
        } else {
            setCardCvv(true)
        }
        dispatch({type: 'CHANGE_CVV', payload: e.target.value})
    }

    const {name, cardNumber, cardDate, cvv} = state
    return(
        <div>
            <div className="container-lg">
                <Title title="Method Prefer" />
                <PopUp />
                <div className={classNames('card__number-field')}>
                    <div className={classNames({'blood': !nameIsValid && !nameTouched})}>
                        <label htmlFor="name">Name</label>
                        <input type="text" onChange={changeName} value={name} id="name" placeholder="name" className={classNames('input_field')} />
                        <span className={classNames('error__message', {'none': nameIsValid || nameTouched})}>Please enter correct name</span>
                    </div>

                    <div className={classNames('card__number-area',  {'blood': cardIsValid})}>
                        <label htmlFor="number">Número de tarjeta</label>
                        <input type="text" onChange={changeNumber} value={cardNumber} id="number" placeholder="1234 1234 123A" className={classNames('input_field')} />
                        <span className={classNames('error__message', {'none': !cardIsValid})}>Please enter valid number</span>
                    </div>

                    <div className={classNames('card__details')}>
                        <div className={classNames('card__more-details', {'blood': dateIsValid && dateTouched} )}>
                            <label htmlFor="date">Fecha de expiración</label>
                            <input type="text" onChange={changeDate} value={cardDate} placeholder="09  14" className={classNames('input_field')} />
                            <span className={classNames('error__message', {'none': !dateIsValid || !dateTouched})}>Invalid</span>
                        </div>

                        <div className={classNames('card__more-details', {'blood': cardCvv && cvvTouched})}>
                            <label htmlFor="cvv">CVV <img src={info} alt=""/></label>
                            <input type="text" onChange={changeCVV} value={cvv} id="cvv" placeholder="671" className={classNames('input_field')} />
                            <span className={classNames('error__message', {'none': !cardCvv || !cvvTouched})}>Invalid</span>
                        </div>

                    </div>

                    <div className={classNames('promo__code')}>
                        <label htmlFor="promo">Promo code</label>
                        <input type="text" className={classNames('input_field')} />
                    </div>
                    {/*<p className="have__you-questions">Questions?</p>*/}

                </div>

            </div>
            <div className="continue__btn continue__or-prev">
                <NavLink to="/Registrationform/3" onClick={() => conf(-10)} className="btn__previous-step">
                    <button className="invisible__btn previous">Previous</button>
                </NavLink>

                <NavLink to="/Registrationform/5" onClick={() => conf(20)} className={classNames('btn__next-step', )}>
                    <button className="invisible__btn">Continue</button>
                </NavLink>
            </div>
        </div>

    )
}

// {'isDisabled': cardIsValid || dateIsValid || cardCvv}