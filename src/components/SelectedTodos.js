import React, { Fragment } from 'react'

export default function SelectedTodos({ todos }) {
    const x = todos.filter(items => items.completed)
    return (
        <Fragment>
            <h5>Selected Todos</h5>
            <hr ></hr>
            <div className="selected_list">
                {x.length > 0 ?
                    <Fragment>
                        {todos.map((items, index) => {
                            return (
                                <Fragment key={index}>
                                    {items.completed ? <span key={index}>{items.id}.&nbsp;{items.title}</span> : ""}
                                </Fragment>
                            )
                        })}
                    </Fragment>
                    : <em className="small">No Items to view</em>
                }
            </div>
        </Fragment>
    )
}
