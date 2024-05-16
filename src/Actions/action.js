import axios from 'axios'

export const addUser = (addUser)=> async (dispatch)=>{
    try {
        dispatch({type: 'ADD_USER_REQUEST'})
        const res = await axios.post('http://localhost:3006/jobseeker', addUser);
        dispatch({type: 'ADD_USER_SUCCESS', payload: res.data})
        localStorage.setItem("user", JSON.stringify(res.data))
    } 
    catch (error) {
        dispatch({ type: 'ADD_USER_FAIL', payload: error.message })
    }
}


export const getData=()=> async (dispatch)=>{
    try {
        dispatch({type: 'GET_DATA_REQUEST'})
        const res = await axios.get('http://localhost:3006/jobseeker')
        dispatch({type: 'GET_DATA_SUCCESS', payload: res.data})
    } 
        catch (error) {
        dispatch({type: 'GET_DATA_FAIL', payload: error.message})
    }
}

export const getUser=(id)=> async (dispatch)=>{
    try {
        dispatch({type: 'GET_USER_REQUEST'})
        const res = await axios.get(`http://localhost:3006/jobseeker/${id}`)
        dispatch({type: 'GET_USER_SUCCESS', payload: res.data})
    } 
        catch (error) {
        dispatch({type: 'GET_USER_FAIL', payload: error.message})
    }
}

export const addBasicInfo=(obj)=> async (dispatch)=>{
    try {
        dispatch({type:'PUT_BASIC_REQUEST'})
        const res = await axios.put(`http://localhost:3006/jobseeker/${obj.id}`, obj)
        dispatch({type:'PUT_BASIC_SUCCESS', payload: res.data})
        localStorage.setItem("user", JSON.stringify(res.data))
    } 
     catch (error) {
        dispatch({type:'PUT_BASIC_FAIL', payload: error.message})
        console.error(error.message)
    }
}