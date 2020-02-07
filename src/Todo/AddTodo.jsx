import React, { useState } from 'react'
import Context from '../context'
import propTypes from 'prop-types'
import { useContext } from 'react'

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue = '')
    const { addTodoItem } = useContext(Context) 
    
    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value),
            onKeyPress: event => {
                if(event.key === 'Enter') {
                    addTodoItem(event.target.value)
                }
            }
        },
        clear: () => setValue(''),
        value: () => value
    }
}

const AddTodo = ({onCreate}) => {
    const input = useInputValue('')

    function submitHandler(event) {
        event.preventDefault()

        if(input.value().trim()) {
            onCreate(input.value())
            input.clear()
        }
    }

    return <form style={{ marginBottom: '1rem' }} onSubmit={submitHandler}>
        <input {...input.bind}/>
        <button type='submit'>Add Todo</button>
    </form>
}

AddTodo.propTypes = {
    onCreate: propTypes.func.isRequired
}

export default AddTodo