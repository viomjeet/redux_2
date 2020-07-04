import { createStore } from 'redux';
import todosList from './reducer/reducers';
const store = createStore(todosList)
export default store;