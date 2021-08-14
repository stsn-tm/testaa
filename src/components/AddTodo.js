import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

export const AddTodo = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue('');
  }

  const handleInput = e => {
    setValue(e.target.value);
  }

  return (

    <form onSubmit={handleSubmit}>
      <div className="Container">
        <input className="Todo__input"
          type="text"
          value={value}
          onChange={handleInput}
          borderTopRightRadius={0}
          borderBottomRightRadius={0}>
        </input>
        <button
          className="Button"
          type="submit"
          // disabled={!value}
          borderTopLeftRadius={0}
          borderBottomLeftRadius={0}
        > Add Todo</button>

      </div>
    </form>
  )
}
