import {combineReducers} from 'redux';
import {addReducer} from './addReducer';
import { displayReducer } from './displayReducer';
const rootReducer =combineReducers({
          addReducer: addReducer,
          displayReducer: displayReducer
})
export default rootReducer;