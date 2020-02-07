import React from 'react'
import propTypes from 'prop-types'
import Color from './Color'


const Colors = ({colors, loading}) => { 
    const list = colors.map((el, i) => <Color 
    key={i}
    id={el.id} 
    name={el.name}
    color={el.color}
    />)
    
    return <div>
        <h1>Colors:</h1>

        {colors.length ? list : loading || <p>No colors</p>}
        <div></div>
    </div>
}

// Colors.propTypes = {
//     colors: propTypes.arrayOf(propTypes.object)
// }

export default Colors