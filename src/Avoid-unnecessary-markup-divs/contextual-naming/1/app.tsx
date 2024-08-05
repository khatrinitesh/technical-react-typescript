import React, { ChangeEvent, FormEvent, useState } from "react";

const CustomApp:React.FC = () => {
    
    const [todos, setTodos] = useState<string[]>(['Learn React', 'Learn TypeScript']);

   const handleCompleteTodo= (index:number) => () => {
    setTodos((todos.filter((_,i) => i !== index)))
   }
    return(
        <>
       {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} onComplete={handleCompleteTodo(index)} />
      ))}
        </>
    )
}

export default CustomApp

interface ToDoItemsProps{
    todo:string;
    onComplete:() => void; // Contextual name for marking a todo item as complete
}

const TodoItem:React.FC<ToDoItemsProps> = ({todo,onComplete}) => {
    return(
        <>
         <span>{todo}</span>
         <button onClick={onComplete}>Complete</button>
        </>
    )
}