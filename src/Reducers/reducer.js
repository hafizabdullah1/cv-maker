export const getDataReducer=(state={users:[]}, action)=>{
    switch (action.type) {
        case 'GET_DATA_REQUEST':
            return {loading: true, ...state }

                case 'GET_DATA_SUCCESS' :
                    return {loading: false, data : action.payload }

                case 'GET_DATA_FAIL' :    
                    return {loading: false, failed: action.payload }
        default:
            return state;
    }
}

export const getUserReducer=(state='', action)=>{
    switch (action.type) {
        case 'GET_USER_REQUEST':
            return({loading: true, ...state})
        case 'GET_USER_SUCCESS':
            return({loading: false,  data: action.payload})
        case 'GET_USER_FAIL':
            return({loading: false, failed: action.payload})
        default:
            return state;
    }
}