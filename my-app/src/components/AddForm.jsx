import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm(){
  let [task,setTask]=useState("");
  const dispatch=useDispatch();
  let handleSubmit=(evt)=>{
  evt.preventDefault();
  console.log(task);
  setTask("");
  dispatch(addTodo(task));
  }
  return(
  <>
  <form onSubmit={handleSubmit}>
   <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}/>&nbsp;
   <button>Submit</button>
  </form>
  </>
)
}