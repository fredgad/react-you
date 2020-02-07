import React, { useContext } from 'react'
import Context from '../context'

const styles = {
    display: 'flex',
    justifyContent: 'center',
    div: {
        marginRight: '20px'
    }
}

const TodoItem = ({todo, index, complited, id, changeState}) => {
    const {removeState} = useContext(Context)
    const classes = []
    if(complited) {
        classes.push('done')
    }
    
    return <div style={styles}>
        <input type="checkbox" checked={complited} onChange={changeState.bind(null, id)} />
        <div style={styles.div}>{index}</div>
        <span className={classes.join(' ')} >{todo}</span>
        <button onClick={removeState.bind(null, id)}>X</button>
    </div>
}

export default TodoItem