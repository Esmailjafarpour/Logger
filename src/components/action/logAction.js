import {GET_LOGS,SET_LOADING,LOGS_ERROR,ADD_LOG,DELETE_LOG,SET_CURRENT,CLEAR_CURRENT,UPDATE_LOG,SEARCH_LOGS,DELETE_TECH} from './type';

// Fetch All Logs from server 

export const getLogs = () => async dispatch => {
    try {
        setLoading()

        const res = await fetch('./logs');
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload : data
        });
        
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload : err.response.data
        });
    }
}

// Add log Action

export const addLogs = (log) => async dispatch => {
    try {
        setLoading()

        const res = await fetch('./logs',{
            method:"POST",
            body : JSON.stringify(log),
            headers : {
                'Content-Type' : 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: ADD_LOG,
            payload : data
        });
        
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload : err.response.data
        });
    }
}


// Add Technician

export const addTech = (tech) => async dispatch => {
    try {
        setLoading()
        const res = await fetch('./techs',{
            method:"POST",
            body : JSON.stringify(tech),
            headers : {
                'Content-Type' : 'application/json'
            }
        });
        // const data = await res.json();
        // dispatch({
        //     type: ADD_LOG,
        //     payload : data
        // });
        
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload : err.response.data
        });
    }
}


// Delete Technician

export const deleteTech = (id) => async dispatch => {
    
    try {
        setLoading()
        await fetch(`./techs/${id}`,{
            method : 'DELETE'
        });
        dispatch({
            type: DELETE_TECH,
            payload : id
        });
        
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload : err.response.data
        });
    }
}

// Delete log Action 

export const deleteLog = (id) => async dispatch => {
    try {

        setLoading()

        await fetch(`./logs/${id}`,{
            method : 'DELETE'
        });
       

        dispatch({
            type: DELETE_LOG,
            payload : id
        });
        
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload : err.response.data
        });
    }
}


// update Log

export const updateLog = (log) => async dispatch => {

    try {
        setLoading()
        const res = await fetch(`./logs/${log.id}`,{
            method : 'PUT',
            body : JSON.stringify(log),
            headers : {'Content-Type' : 'application/json'}
        });
        const data = await res.json();
        dispatch({
            type: UPDATE_LOG,
            payload : data
        });
        
    }catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload : err.response.data
        });
    }
}


// Search logs

export const searchLogs = (text) => async dispatch => {
    try {
        setLoading()

        const res = await fetch(`./logs?q=${text}`);
        const data = await res.json();

        dispatch({
            type: SEARCH_LOGS,
            payload : data
        });
        
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload : err.response.data
        });
    }
}



// Set current Log

export const setCurrent = log => {
    
    return{
        type: SET_CURRENT,
        payload : log
    }
    
}

// clear current Log

export const clearCurrent = () => {

    return{
        type: CLEAR_CURRENT
    }
    
}


// set Loading True

export const setLoading = () => {

    return{
        type: SET_LOADING
    }
    
}


// export const logsError = () => async dispatch => {
//     try {
        

//     } catch (error) {
        
//     }
// }