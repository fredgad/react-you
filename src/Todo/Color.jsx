import React, { useContext } from 'react'
import Context from '../context'

const Color = ({id, name, color}) => {
    const {removeColor} = useContext(Context)
    const styles = {
        display: 'flex',
        justifyContent: 'center',
        div: {
            background: color,
            padding: '30px' 
        }
    }

    return <div style={styles}>
        <div data-id={id} style={styles.div}>{name}</div>
        <div onClick={removeColor.bind(null, id)}>x</div>
        <p>{id}</p>
    </div>
}

export default Color