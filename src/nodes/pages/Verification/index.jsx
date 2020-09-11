import React from 'react'
import '../../../assets/style/pages/Verification.scss'
import classNames from 'classnames'


export default () => {
    return(
        <div className="container-lg">
            <div className="verification">
                <h2 className="enter__email-verification">Enter Email Verification</h2>
                <p>Please enter verification</p>
                <input type="text" className={classNames('input_field')} />
                <button className={classNames('button-step')}>Verify</button>
            </div>
        </div>
        
    )
}