import React from 'react'
import "../../../assets/style/pages/AddNewUser.scss"
import {Title} from "../../components"
import classNames from 'classnames'
import profil from '../../../assets/images/perfil.png'
import {NavLink} from "react-router-dom";


export default () => {
    return(
        <div className="container">
            <div className="step__one-form">
                <Title title="Confirmation the Details" />
                <div className="add__new-user">
                    <div className={classNames('new__user-field user-container1')}>
                        <img src={profil} className="profil__img" alt="profil"/>
                        <p>Joe Doe</p>
                    </div>
                    <div className={classNames('new__user-field user-container2')}>
                        <div className="new__user-plus">+</div>
                        <p>Add more</p>
                    </div>
                </div>

            </div>
            <div className={classNames('go__back-form')}>
                <NavLink to="/"  className="btn__previous-step">
                    <button className="invisible__btn previous">Previous</button>
                </NavLink>

                <NavLink to='/smth/2'  className={classNames('btn__next-step')}>
                    <button  className="invisible__btn">Continue</button>
                </NavLink>
            </div>
        </div>
    )
}