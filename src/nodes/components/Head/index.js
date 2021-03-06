import React, { useState, useEffect } from 'react'
import '../../../assets/style/components/Head.scss'
import classNames from 'classnames'

export default ({type}) => {

    const [steps] = useState([
        { id: 1, step: 1, title: 'TITULAR' },
        { id: 2, step: 2, title: 'Contact' },
        { id: 3, step: 3, title: 'DURATION' },
        { id: 4, step: 4, title: 'PREFER' },
        { id: 5, step: 5, title: 'title' },
        { id: 6, step: 6, title: 'title' }
    ])
    const [activeStep, setActiveStep] = useState(-2.5)
    const [currentStep, setCurrentStep] = useState(0)

    useEffect(() => {
        if(type >= 0) {
            setActiveStep(activeStep + 16.6)
            setCurrentStep(currentStep + 1)

        } else if(type[1]) {
            setActiveStep(activeStep + 49.8)
            setCurrentStep(3)
        } else {
            setActiveStep(activeStep - 16.6)
            setCurrentStep(currentStep - 1)
        }
            
    }, [type])


    return (
        <div className="container registration__form-control">
            <h2 className="registration__form-title">Registration Form</h2>
            <p className="for__example">This is some registration form</p>

            <div className="progress__bar">

                <div className="in__progress" style={{ width: activeStep + '%'}}>

                </div>

                <div className="step__by-step">
                    {steps.map(({id, step, title}) => {
                        return(
                            <div key={id} className='step__controll'>
                            
                                <p
                                   className={
                                       classNames('progress__steps',
                                           { 'hide__inactive-step': currentStep !== id
                                                   && currentStep !== id
                                                   && currentStep < id, 'current__step': id === currentStep })}
                                >
                                    {step}
                                    <span className={ classNames('active__step-title',
                                        { 'hide__inactive-step': currentStep - 1 !== id })}
                                    >
                                        {title}
                                        
                                        
                               </span>
                                </p>
                            </div>

                        )
                    })}
                </div>
            </div>
        </div>
    )
}