import { generalConstants } from '@/constants';

const AsyncState = {
  idle: 'idle',
  loading: 'loading',
  loaded: 'loaded',
  error: 'error'
}

const initialState = {
  sideNav: false
}

const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case generalConstants.SHOW_SIDENAV:
      state = {
        ...state,
        sideNav: action.isOpen
      }
      break;
  }
  return state;
};

export default generalReducer;