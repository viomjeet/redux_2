import React, { Fragment } from 'react';
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import checkChange from './redux/action/action';
import TodosList from './components/TodosList';
import SelectedTodos from './components/SelectedTodos';

function App() {
  const state = useSelector(state => state)
  const todos = state.data;
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div className="bg-light mb-3 border-bottom">
        <div className="container">
          <h4 className="m-0 pt-3 pb-3">React Redux </h4>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 order-2 order-md-12 mb-4">
            <TodosList todos={todos} dispatch={dispatch} checkChange={checkChange} />
          </div>
          <div className="col-md-6 order-1 order-md-12 mb-4">
            <SelectedTodos todos={todos} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
