
export  default (state = 'Daily', {type, payload} ) => {
    switch (type) {
        case 'CHANGE_DATE':
            return state = payload
        default: return state
    }
}