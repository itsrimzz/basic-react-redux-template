import { combineReducers } from 'redux';

// import reducers
import links from './links';

const appReducer = combineReducers({
  links
});

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer;
