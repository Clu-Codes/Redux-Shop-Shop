// import React, { createContext, useContext } from 'react';
// import { useProductReducer } from './reducers';

// const StoreContext = createContext();
// const { Provider } = StoreContext;

// // StoreProvider will instantiate our global state with useProductReducer in reducers.js. 
// // value prop is ncie to have here since it allows us to pass more data for state if needed. 
// // ...props is in place to handle any other props the user may need.
// const StoreProvider = ({ value = [], ...props }) => {
//     const [state, dispatch] = useProductReducer({
//         products: [],
//         categories: [],
//         currentCategory: '',
//         cart: [],
//         cartOpen: false
//     });
//     // use this function to confirm it works
//     console.log(state);
//     return <Provider value={[state, dispatch]} {...props} />;
// }

// const useStoreContext = () => {
//     return useContext(StoreContext);
// }

// export { StoreProvider, useStoreContext }; 