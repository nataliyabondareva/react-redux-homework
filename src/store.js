import { createStore } from 'redux'

export const addComputer = (computer) => ({
  type: 'ADD_COMPUTER',
  payload: computer
});

const reducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case 'ADD_COMPUTER': {
      return [...state, action.payload];
    }
    default: {
    }
  }
  console.log(action)
  return state;
};

const initialState = []

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, enhancer);

export default store;