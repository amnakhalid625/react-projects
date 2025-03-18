import { useEffect, useState } from 'react'
import { MdDeleteForever } from "react-icons/md";


const Todo = () => {
const[inputValue,setInputValue]=useState('')
const[task,setTask]=useState([])

useEffect(()=>{
    const storeTasks=JSON.parse(localStorage.getItem('tasks'));
    if(storeTasks){
    setTask(storeTasks);
    }
},[])

  // Update localStorage when tasks change
useEffect(()=>{
    if(task.length>0){
        localStorage.setItem('tasks',JSON.stringify(task))
    }
},[task])


const handleSubmit=(e)=>{
    e.preventDefault();
    const newData=inputValue;
    setTask([...task,newData])
    setInputValue('')
     if (!inputValue.trim()) return;
}

const onChangeHandler=(e)=>{
setInputValue(e.target.value)
}

  // Handle task deletion
  const deleteHandler = (index) => {
    // Remove the task at the given index
    const updatedTasks = task.filter((_, i) => i !== index);
    setTask(updatedTasks); // Update state
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Update localStorage
  };




  return (
    <div className='h-screen w-full bg-slate-900 text-white'>

           <header>
                <h1 className='text-center font-bold text-3xl'>
                      Todo List
                </h1>
            </header>

<form onSubmit={handleSubmit}>
    <section className='flex justify-center items-center mt-7  '>
        <input type="text"  className='py-2 px-6 rounded-lg text-black outline-none border border-slate-900 font-bold'
        required
        value={inputValue}
        onChange={onChangeHandler}
        />
        <button 
        className='py-2 px-4 bg-blue-300 rounded-lg font-bold '>
            Add Task
        </button>
    </section>

</form>

<div className='w-full mt-5 '>

<ul className="space-y-3  py-5" >

    {
        task.map((curElem,index)=>{
            return (
        <li key={index}
        className='flex items-center justify-between bg-slate-800 p-3 rounded-lg '
        >
            
         <span className='text-white'>{curElem}</span>
         <div className="flex space-x-2">
            <button className="text-red-400 hover:text-red-500 transition-colors duration-300" 
             onClick={() => deleteHandler(index)}
            >
              <MdDeleteForever size={20} />
            </button>
          </div>
         
          </li>
          )

        })
    }
</ul>

</div>


    </div>
  )
}

export default Todo