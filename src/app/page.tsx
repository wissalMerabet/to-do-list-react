"use client";
import "./page.css";
import { useState , useRef} from "react";

export default function page() {
  const [todos, setTodos] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);


  const handleAddTodo = () => {
    if (inputRef.current) {
      const text = inputRef.current.value;
      setTodos([...todos,text])
      inputRef.current.value = '';
    }
  };

  function deleteItem(index: number){

    const updatedItem = todos.filter((_,i) => i !== index);
    setTodos(updatedItem);
  }

  return (
    <div className="App">
      <h2 className="title">To Do List</h2>
      <ul className="Tlist">
        {
          todos.map((item , index) => 
            <li key={index}>
              <span className="text">{item}</span>
              <button
                className="Delete-btn"
                onClick={() => deleteItem(index)}>
                Delete
              </button>
            </li>
          )
        }
      </ul>
      <input className="Tinput" ref={inputRef} type="text" placeholder="Enter a task..." />
      <button className = "TButton"onClick={handleAddTodo}>Add</button>
    </div>

  );
}






















