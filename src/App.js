import React, { useState, useEffect, useReducer } from 'react'
import './App.css'
import TodoList from './Todo/TodoList'
import Context from './context' 
// import AddTodo from './Todo/AddTodo'
import Colors from './Todo/Colors'
import Loader from './Todo/Loader'
import reducer from './reducer'

const AddTodo = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(()=> {
      resolve(import('./Todo/AddTodo'))
    }, 0)
  }) 
}) 

function App() {
  // const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('andrik')))

  const [state, setState] = useState([
    {id: 0, complited: false, todo: 'Make a deal'},
    {id: 1, complited: true, todo: 'Grow the three'},
    {id: 2, complited: false, todo: 'Feel the pain'}
  ])
  const [colors, setColors] = useState([
    
  ]),
  [loading, setLoading] = useState(true)


  useEffect(() => {
    fetch('https://reqres.in/api/products?_limit=4')
      .then(response => response.json())
      .then(colorArr => {
        let newArr = [...colorArr.data, ...colors].reverse()
        setTimeout(() => {
          setColors(colorArr.data)
          setLoading(false)
        }, 2000)
      })
  }, [])

  const  handleClick = () => console.log('click')

  useEffect(() => {
    let raw = localStorage.getItem('andrik') || '[]'
    console.log(raw)
    setState(JSON.parse(raw))  
  }, [])

  useEffect(() => {
    document.addEventListener('click', handleClick)
    localStorage.setItem('andrik', JSON.stringify(state))
    return () => document.removeEventListener('click', handleClick)
  }, [state])

  function changeState(id) {
    setState(
      state.map(el => {
        if(el.id === id) {
          el.complited = !el.complited
        }
        return el
      })
    )
  }
 
  function removeState(id) {
    setState(state.filter(el => el.id !== id))
  } 

  function addTodoItem(title) { 
    setState(([
      ...state, 
      {
        id: Date.now(),
        complited: false,
        todo: title
      }
    ]))
  } 

  function removeColor(id) {
    setColors(colors.filter(el => el.id !== id))
  }

  return (
    <Context.Provider value={{ removeState, removeColor, addTodoItem, }}>
      <div className="App">
        <React.Suspense fallback={<Loader />}>
          <AddTodo onCreate={addTodoItem}/>
        </React.Suspense>
        
        <TodoList state={state} changeState={changeState} />
        <Colors colors={colors} loading={loading} />
        { loading && <Loader /> }
      </div>
    </Context.Provider>
  );
} 

export default App;
