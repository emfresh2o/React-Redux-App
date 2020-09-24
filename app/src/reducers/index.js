export const initialState = {
   isLoading: null,
   error: '',
   gif: []
};

export const reducer = (state = initialState, action) => {
   switch(action.type) {
       case 'FETCHING_HOMER_START':
           return {
               ...state,
               isLoading: true
           }
       case 'FETCHING_DATA_SUCCESS':
           return {
               ...state,
               isLoading: false,
           };
       case 'HOMER_GIF':
           return {
               ...state,
               isLoading: false,
               gif: action.payload
           }
       default:
       return state;
   }
}

