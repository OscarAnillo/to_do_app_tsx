import React from 'react';
import { useState } from 'react';
import { Data } from '../Interfaces'

export const TodoComponent = () => {
    const [userInput, setUserInput] = useState<string>("");
    const [data, setData] = useState<Data[]>([]);

    const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setUserInput(e.currentTarget.value)
    }

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!userInput) {
          alert("Please add a task!");
          return;
        }
        const taskId = data.length ? data[data.length - 1].id + 1 : 0;
        setData([...data, { id: taskId, newTask: userInput }]);
        setUserInput("");
      };
    
    const taskDeleteHandler = (id: number) =>{
        const filteredTask = data.filter((task) => task.id !== id)
        setData(filteredTask)
    }

    return (
        <form onSubmit={submitHandler}>
            <label>
                <input 
                type="text"  
                placeholder='Write a task' 
                value={userInput} 
                onChange={changeHandler} />
            </label>
            <>
            <button>{data.length > 0 ? "Add more tasks": "Add a task"}</button>
            </>
            {data.map(task => (
                <div className='map-div'>
                    <li key={task.id} className="list-item">{task.newTask}</li>
                    <span onClick={() => taskDeleteHandler(task.id)} className="close">x</span>
                </div>
            ))}
        </form>
    )
} 