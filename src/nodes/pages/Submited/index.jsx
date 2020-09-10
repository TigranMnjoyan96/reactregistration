import React from 'react'
import '../../../assets/style/pages/Submited.scss'
import submited from '../../../assets/images/submited.png'


export default () => {
    return(
        <div className="submited__form">
            <img className="submited__img" src={submited} alt=""/>
            <div className="container-lg">
                <div className="submited__form-btn">
                    <button>Done</button>

                </div>
            </div>
        </div>
    )
}