import React from 'react'
import '../../../assets/style/components/Title.scss'


export default ({title}) => {
    return(
        <div className="step__description">
            <h2>{title}</h2>
            <div className="short step__score"></div>
        </div>
    )
}