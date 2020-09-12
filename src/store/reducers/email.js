const initial = {
    email: '',
    phone: ''
}



export default (state = initial, {type, payload}) => {
    switch (type) {
        case 'GET_EMAIL':
            return {...state, email: payload}
        case 'GET_PHONE':
            return {...state, phone: payload}
        default: return state
    }
}