import {applyMiddleware, combineReducers,createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {thunk} from "redux-thunk";
import authReducer from './reducers/authReducer';
import filefolderReducer from './reducers/filefolderReducer';
const rootReducer = combineReducers({
    authReducer,
    filefolderReducer
});
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)
export default store;