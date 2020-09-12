const initial = {
    name: '',
    cardNumber: '',
    cardDate: '',
    cvv: ''
}


export default (state = initial, {type, payload}) => {
    switch (type) {
        case 'CHANGE_USER_NAME':
            return {...state, name: payload}
        case 'CHANGE_CARD_NUMBER':
            return {...state, cardNumber: payload}
        case 'CHANGE_CARD_DATE':
            return {...state, cardDate: payload}
        case 'CHANGE_CVV':
            return {...state, cvv: payload}
        default:
            return state
    }
}