import React from 'react'
import '../../../assets/style/components/PopUp.scss'
import { useSelector } from 'react-redux'


export default () => {

    const state = useSelector(state => state.date)
    return(
        <div className="select__pop-up">
            <div className="container-fluid">
                <div className="pop__up-indicator">
                </div>
                <div className="selected__title">
                    <h2> { state } </h2>
                </div>
            </div>
            <div className="under__date"></div>
            <div className="container-fluid">
                <div className="pop__up-content">
                    <ul>
                        <li>Water: <i className="fa fa-face"></i> </li>
                        <li>Honey: </li>
                        <li> <b>Total: </b> </li>
                    </ul>
                    <ul>
                        <li>1L</li>
                        <li>200ml</li>
                        <li>1.2L</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}