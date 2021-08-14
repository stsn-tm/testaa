import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../redux/actions';

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [cheked, setCheked] = useState(false);

  const handleCheked = () => dispatch(toggleTodo(todo.id));

  useEffect(() => {
    setCheked(todo.completed);
  }, [todo]);

  return (

    //   <div class="d-flex  bd-highlight mb-3">

    //     {/* <label as={todo.completed && "del"}>{todo.content}</label> */}

    //   <div class="card text-white bg-white mb-3 d-flex flex-col">
    //   <div class="card-header"> <input type="checkbox" className="Checkbox" onChange={handleCheked} isChecked={cheked} />

    //     <p class="card-text"><span style={todo.completed ? { textDecoration: "line-through" ,textDecorationColor:"red" } : null}><h7>{todo.content}</h7></span></p>
    //     </div>
    // </div>
    <div class="card text-white bg-white mb-3 ">
      <div class="card-header text-primary"><input type="checkbox" className="Checkbox" onChange={handleCheked} isChecked={cheked} /></div>
      <div class="card-body text-primary">
        <span style={todo.completed ? { textDecoration: "line-through", textDecorationColor: "red" } : null}><h7>{todo.content}</h7></span></div>
    </div>

  )
}
