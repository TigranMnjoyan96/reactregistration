import React from 'react'
import classNames from 'classnames'
import '../../../assets/style/pages/Duration.scss'  
import { NavLink } from 'react-router-dom'
import { Title, PopUp } from '../../components'

import { useDispatch, useSelector } from 'react-redux'


export default ({conf})  => {   

    const state = useSelector(state => state.date)
    const dispatch = useDispatch()

    const changeDate = e => {
        dispatch({type: 'CHANGE_DATE', payload: e.target.value})
    }

    return(
        <div>
            <div className="container-lg">
                <Title title="Select the Duration" />
                <div className="select_the-duration">
                    <select name="" id="" onChange={changeDate}>
                    <option value="Daily" selected>Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    </select>
                    <p className="please__select-one">Please select one one from these to check your cyccle of the recurecnce. </p>
                    <NavLink className="have__you-questions" to="/add-newuser">¿Questions?</NavLink>
                </div>
            
            </div>

            <PopUp />
            
            <div className="continue__btn continue__or-previous duration__btn-continue">
                <NavLink to="/verify" onClick={() => conf(null)} className="btn__previous-step">
                    <button className="invisible__btn previous">Previous</button>
                </NavLink>

                <NavLink to="/Registrationform/4" onClick={() => conf(10)} className={classNames('btn__next-step')}>
                    <button className="invisible__btn">Continue</button>
                </NavLink>
            </div>
        </div>
    )
}