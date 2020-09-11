import React  from 'react'
import '../../../assets/style/pages/Card.scss'
import {PopUp, Title} from '../../components'
import classNames from 'classnames'
import info from '../../../assets/images/info.png'
import {NavLink} from 'react-router-dom'


export default ({conf}) => {


    return(
        <div>
            <div className="container-lg">
                <Title title="Method Prefer" />
                <PopUp />
                <div className={classNames('card__number-field')}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="name" className={classNames('input_field')} />
                    <div className={classNames('card__number-area')}>
                        <label htmlFor="number">Número de tarjeta</label>
                        <input type="text" id="number" placeholder="1234 1234 123A" className={classNames('input_field')} />
                        <span>Please enter valid number</span>
                    </div>
                    <div className={classNames('card__details')}>
                        <div className={classNames('card__more-details')}>
                            <label htmlFor="date">Fecha de expiración</label>
                            <input type="text" placeholder="09 / 14" className={classNames('input_field')} />
                            <span>Invalid</span>
                        </div>
                        <div className={classNames('card__more-details')}>
                            <label htmlFor="cvv">CVV <img src={info} alt=""/></label>
                            <input type="text" id="cvv" placeholder="671" className={classNames('input_field')} />
                            <span>Invalid</span>
                        </div>
                    </div>
                    <p className="have__you-questions">Questions?</p>
                </div>

            </div>
            <div className="continue__btn continue__or-prev">
                <NavLink to="/" onClick={() => conf(-10)} className="btn__previous-step">
                    <button className="invisible__btn previous">Previous</button>
                </NavLink>

                <NavLink to="/thanks" onClick={() => conf(null)} className={classNames('btn__next-step')}>
                    <button className="invisible__btn">Continue</button>
                </NavLink>
            </div>
        </div>

    )
}