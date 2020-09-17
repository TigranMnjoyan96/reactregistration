import React from 'react'
import {Route, Redirect, Switch, HashRouter} from 'react-router-dom'
import {StepOne, StepTwo, Thanks, Verification, Duration, AddNewUser, Card, Complete, StepThree, StepFour, StepFive, StepSix, StepSeven, StepEight, Done, Submited} from '../pages'


export default ({conf}) => {
    return(
        <div>
            <Switch>
                    <Route path='/Registrationform/1' render={() => <StepOne conf={conf} />} />
                <Route path='/Registrationform/2' render={() => <StepTwo conf={conf} />} />
                <Route path='/thanks' render={() => <Thanks conf={conf} /> } />
                <Route path='/verify' render={() => <Verification conf={conf} /> } />
                <Route path='/Registrationform/3' render={() => <Duration conf={conf} /> } />
                <Route path='/add-newuser' render={() => <AddNewUser />} />
                <Route path='/Registrationform/4' render={() => <Card conf={conf} /> } />
                <Route path='/Registrationform/5' render={() => <Complete conf={conf} /> } />
                {/*<Route path='/step-three' render={() => <StepThree conf={conf} />}/>*/}
                {/*<Route path='/step-four' render={() => <StepFour conf={conf} />} />*/}
                {/*<Route path='/step-five' render={() => <StepFive conf={conf} />} />*/}
                {/*<Route path='/step-six' render={() => <StepSix conf={conf} />} />*/}
                {/*<Route path='/step-seven' render={() => <StepSeven conf={conf} />} />*/}
                {/*<Route path='/step-eight' render={() => <StepEight conf={conf} />} />*/}
                <Route path='/done' component={Done} />
                {/*<Redirect to="/Registrationform/#1" />*/}
                {/*<Route path='/submited' component={Submited} />*/}
            </Switch>
        </div>
    )
}