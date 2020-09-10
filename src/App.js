import React, { useState } from 'react'
import { Head } from './nodes/components'
import Routes from './nodes/routes'

import './App.css'



const  App = ()  => {

  const [state, setState] = useState('')
  const confirmation = (e) => {
      setState(e)
  }

  
  
  return (
    <div>
      {state == null ? null :  <Head type={state}  />}
       
        <div className="container">
            <Routes conf={confirmation} />
        </div>
    </div>
  );
  }


export default App;
