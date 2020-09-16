const initial = {
    userName: '',
    userPhone: ''
}


export default (state = initial, {type, payload}) => {
    switch (type) {
        case 'CHOOSE_USER_NAME':
            return {...state, userName: payload}
        case  'CHOOSE_USER_PHONE':
            return {...state, userPhone: payload}
        default:
            return state
    }
}
