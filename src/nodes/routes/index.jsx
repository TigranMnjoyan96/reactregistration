import React from 'react'
import {Route} from 'react-router-dom'
import {StepOne, StepTwo, Thanks, Verification, Duration, Card, Complete, StepThree, StepFour, StepFive, StepSix, StepSeven, StepEight, Done, Submited} from '../pages'


export default ({conf}) => {
    return(
        <div>
            <Route exact path='/'  render={() => <StepOne conf={conf} />}/>
            <Route path='/step-two' render={() => <StepTwo conf={conf} />}  />
            <Route path='/thanks' render={() => <Thanks conf={conf} /> } />
            <Route path='/verify' render={() => <Verification conf={conf} /> } />
            <Route path='/duration' render={() => <Duration conf={conf} /> } />
            <Route path='/card' render={() => <Card conf={conf} /> } />
            <Route path='/complete' render={() => <Complete conf={conf} /> }  />
            <Route path='/step-three' render={() => <StepThree conf={conf} />}/>
            <Route path='/step-four' render={() => <StepFour conf={conf} />} />
            <Route path='/step-five' render={() => <StepFive conf={conf} />} />
            <Route path='/step-six' render={() => <StepSix conf={conf} />} />
            <Route path='/step-seven' render={() => <StepSeven conf={conf} />} />
            <Route path='/step-eight' render={() => <StepEight conf={conf} />} />
            <Route path='/done' component={Done} />
            <Route path='/submited' component={Submited} />
        </div>
    )
}