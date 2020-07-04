import { createStore } from 'redux';
import todosList from './reducer/reducers';
const store = createStore(todosList, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;