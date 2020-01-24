import { createStore } from 'redux';

const INITIAL_STATE = {
  ansArr: [],
}

const experienseSwither = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_ANSWERED_COUNT':
      const newArr = [...state.ansArr]
      newArr.push(action.title)
      state.ansArr = newArr
    default: 
      return state;
  }
}

const store = createStore(experienseSwither);

export default store; 