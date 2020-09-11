import React from 'react'
import '../../../assets/style/pages/Done.scss'
import done from '../../../assets/images/done1.png'


export default () => {
    return(
        <div className="done__yeah">
            <h2>Done Yeah</h2>
            <p>You're done here! </p>
            <img src={done} alt="done"/>
        </div>
    )
}