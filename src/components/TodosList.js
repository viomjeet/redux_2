import React, { Fragment } from 'react'
export default function TodosList({ todos, dispatch, checkChange }) {
    return (
        <Fragment>
            <h5>Todos List</h5>
            <hr ></hr>
            <ul className="ullist">
                {todos.map(items => {
                    return (
                        <li key={items.id} className={items.completed ? 'bg-gray' : 'bg-light'}>
                            <label>
                                <input type="checkbox" value={items.id}
                                    onChange={(e) => dispatch(checkChange(e.target.value, e.target.checked))}
                                    checked={items.completed} />
                                    &nbsp;{items.id}.&nbsp;{items.title}
                            </label>
                        </li>
                    )
                })}
            </ul>
        </Fragment>
    )
}
