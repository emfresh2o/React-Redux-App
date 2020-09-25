import axios from "axios"

export const FETCHING_HOMER_START = "FETCHING_HOMER_START";
export const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS";
export const HOMER_GIF = "HOMER-GIF";

export const fetchHomer = () => {
    return dispatch => {
        dispatch({ type: 'FETCHING_HOMER_START' })
            // axios
            //     .get('https://api.gfycat.com/v1/gfycats/search?search_text=homer')
            //     .then (res => {
            //         dispatch({ type: 'FETCHING_DATA_SUCCESS', payload: res.data })
            //     })
            //     .catch(err => console.log("Error No Gif Available!", err))
            axios
                .get('https://api.gfycat.com/v1/gfycats/search?search_text=homer')
                .then (res => {
                console.log(res.data.gfycats)
                dispatch({ type: 'HOMER_GIF', payload: res.data.gfycats})
                })
                .catch(err => console.log(err))
    };
};
