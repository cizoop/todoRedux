import { useDispatch, useSelector } from "react-redux"
import AddForm from "./AddForm";
import { deleteTodo,markAsDone } from "../features/todo/todoSlice";
import './Todo.css';
import { useState } from "react";


export default function Todo(){
  const todos=useSelector((state)=>state.todos);
  console.log(todos);
  const dispatch=useDispatch();
  const deletetodo=(todo)=>{
    console.log(todo);
    dispatch(deleteTodo(todo));
  }
  const markIt=(todo)=>{
    console.log(todo);
    dispatch(markAsDone(todo));
  }
  return(
    <>
    <AddForm/> 
  <h3>Todoz</h3>
  <ul>
    {todos.map((todo)=>(<li key={todo.id}  className={todo.isDone ? "done" : "not-done"} >{todo.task}
      &nbsp; <button onClick={()=>deletetodo(todo.id)}>Did it!</button>
        &nbsp; <button onClick={()=>markIt(todo.id)} >Done!</button>
    </li>))}
  </ul>
  </>
  )
}