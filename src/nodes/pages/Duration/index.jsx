import React from 'react'
import classNames from 'classnames'
import '../../../assets/style/pages/Duration.scss'
import { NavLink } from 'react-router-dom'
import { Title, Duration, PopUp } from '../../components'




export default ({conf})  => {
    return(
        <div>
            <div className="container-lg">
                <Title title="Select the Duration" />
                <div className="select_the-duration">
                    <select name="" id="">
                    <option value="" selected>Daily</option>
                    <option value="">Weekly</option>
                    <option value="">Monthly</option>
                    </select>
                    <p className="please__select-one">Please select one one from these to check your cyccle of the recurecnce. </p>
                    <p className="have__you-questions">¿Questions?</p>
                </div>
            
            </div>

            <PopUp />
            
            <div className="continue__btn continue__or-previous">
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