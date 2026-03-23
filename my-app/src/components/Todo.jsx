import { useDispatch, useSelector } from "react-redux"
import AddForm from "./AddForm";
import { deleteTodo } from "../features/todo/todoSlice";
import { useState } from "react";


export default function Todo(){
  const todos=useSelector((state)=>state.todos);
  console.log(todos);
  const dispatch=useDispatch();
  const deletetodo=(todo)=>{
    console.log(todo);
    dispatch(deleteTodo(todo));
  }
  return(
    <>
    <AddForm/> 
  <h3>Todoz</h3>
  <ul>
    {todos.map((todo)=>(<li key={todo.id}>{todo.task}
      &nbsp; <button onClick={()=>deletetodo(todo.id)}>Did it!</button>
    </li>))}
  </ul>
  </>
  )
}