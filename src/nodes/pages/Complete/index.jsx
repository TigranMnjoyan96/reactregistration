import React from 'react'
import classNames from 'classnames'
import { Title } from '../../components'
import {NavLink} from "react-router-dom";


export default ({ conf }) => {
    return(
        <div>
            <div className="container-lg">
                <Title title="Just on the Show" />
                <div className={classNames('registration__form-fields')}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Joe Doe" id="name" className={classNames('input_field')} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder="Example@sample.com" id="email" className={classNames('input_field')} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className={classNames('input_field')} />
                    </div>
                </div>
            </div>
            <div className="continue__btn continue__or-prev">
                <NavLink to="/" onClick={() => conf(-10)} className="btn__previous-step">
                    <button className="invisible__btn previous">Previous</button>
                </NavLink>

                <NavLink to="/thanks" onClick={() => conf(null)} className={classNames('btn__next-step')}>
                    <button className="invisible__btn">Complete it! </button>
                </NavLink>
            </div>
        </div>
    )
}