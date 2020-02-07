import React from 'react'
import propTypes from 'prop-types'
import TodoItem from './TodoItem'

const TodoList = ({state, changeState}) => {
    const list = state.map((el, i) => <TodoItem todo={el.todo} 
        changeState={changeState} 
        id={el.id} 
        index={i} 
        key={el.id}
        complited={el.complited}/>
    )

    return <div>
        <h1>TodoList:</h1>

        {state.length ? list : <p>No todos</p>} 
    </div>
}

TodoList.propTypes = {
    todos: propTypes.arrayOf(propTypes.object)
}

export default TodoList