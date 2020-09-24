import axios from "axios"

export const fetchHomer = () => {
    return dispatch => {
        dispatch({ type: 'FETCHING_HOMER_START' })
        axios.get('https://api.homer.rest/')
        .then (res => {
            //res.data => activity
            dispatch({ type: 'FETCHING_DATA_SUCCESS', payload: res.data })
        })
        .catch(err => console.log(err))
        axios.get('https://api.gfycat.com/v1/gfycats/search?search_text=homer')
        .then (res => {
        console.log(res.data.gfycats)
        dispatch({ type: 'HOMER_GIF', payload: res.data.gfycats})
    })
    .catch(err => console.log(err))
    };
};
