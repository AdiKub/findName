import { createStore } from 'redux';

const INITIAL_STATE = {
  isShow: false,
  show_me: 'Hello World'
}

const experienseSwither = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DO_SOMETHING': 
      return { ...state, isShow: action.title };
    case 'SHOW_SOMETHING':
        return { ...state, show_me: action.title }
    default: 
      return state; 
  }
}

const store = createStore(experienseSwither);

export default store; 