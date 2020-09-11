import React from 'react'
import '../../../assets/style/components/PopUp.scss'


export default () => {
    return(
        <div className="select__pop-up">
            <div className="container-fluid">
                <div className="selected__title">
                    <h2>Daily</h2>
                </div>
            </div>
            <hr/>
            <div className="container-fluid">
                <div>
                    <ul>
                        <li>Water: </li>
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