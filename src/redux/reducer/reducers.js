const todos = {
    data: [
        { id: 1, title: "Delectus aut autem", completed: false },
        { id: 2, title: "Wuis ut nam fac officia", completed: false },
        { id: 3, title: "Fugiat veniam minus", completed: false },
        { id: 4, title: "Et porro tempora", completed: true },
        { id: 5, title: "Luasi adipisci qident", completed: false },
        { id: 6, title: "Quibusdam volupta omnis", completed: false },
        { id: 7, title: "Epedita consequa in", completed: false },
        { id: 8, title: "Adipisci enim quam ut ab", completed: true },
        { id: 9, title: "Molestiae perspi ipsa", completed: false },
        { id: 10, title: "Eoloremque quias aut", completed: true }
    ]
}

const todosList = (state = todos, action) => {
    let completed = state.data.map(item => item.id === parseInt(action.id) && (item.completed = action.checked))
    switch (action.type) {
        case 'CHECK_CHANGE':
            return {
                ...state,
                completed: completed,
            }
        default:
            return {
                ...state
            }
    }
}
export default todosList;