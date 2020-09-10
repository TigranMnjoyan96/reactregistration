import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import classNames from 'classnames'
import axios from 'axios'
import '../../../assets/style/pages/StepOne.scss'

function splitByThree(string){
    let new_array = [];

    for(let i = 0; i < string.length; i+=3){
        new_array.push(string.slice(i, i + 3));
    }

    return new_array;
}

export default ({conf}) => {

    const [countries, setCountries] = useState([])
    const [isDisabled, setIsDiabled] = useState(true)
    const [email, setEmail] = useState('')
    const [isTouched, setIsTouched] = useState(false)
    const [errMsg, setErrMsg] = useState(false)

    useEffect(() => {
        axios.get('http://restcountries.eu/rest/v2/region/europe')
            .then(res => {
                setCountries(res.data)
            })
    }, [])


    const changeEmailHandler = (e) => {
        setIsTouched(true)
        let value = e.target.value.replace(/[^0-9.]/gi, "");
            
            let value_array = splitByThree(value);

            e.target.value = value_array.join('-');
            if(e.target.value.length >= 11) {
                setErrMsg(false)
                setIsDiabled(false)
            }else{
                setIsDiabled(true)
                setErrMsg(true)
            }
            setEmail(e.target.value)

    }

    return (
        <div>

                <div className="step__one-form">
                    <div className="step__description">
                        <h2>Title</h2>
                        <div className="step__score"></div>
                    </div>
                    <div className="country">
                        <label htmlFor="countries">Country</label>
                        <select name="" id="countries">
                            {countries.map(({name}) => {
                                return(
                                    <option key={name} value={name}>{name}</option>
                                    )
                            })}
                        </select>
                    </div>

                    <div className={classNames('phone__number', {'blood': errMsg})}>
                        <label htmlFor="phone">Number</label>
                        <input type="text"
                               id="phone"
                               className="phone__number-field"
                               placeholder="0-0000-0000"
                               value={email}
                                onChange={changeEmailHandler}
                        />
                    </div>
                </div>

            <div className="continue__btn start">
                <NavLink to='/step-two' onClick={() => conf(1)}  className={classNames('btn__next-step', {'isDisabled': isDisabled})}>
                    <button  className="invisible__btn">Continue</button>
                </NavLink>
            </div>

        </div>





    );
};

