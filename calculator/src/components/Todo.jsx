import React, { useEffect, useState } from 'react'

const Todo = () => {
    const [userValue,setUserValue]=useState('')
    const [task,setTask]=useState([])

  // Load TODOs from local storage on app startup
    useEffect(()=>{
        const storeData=JSON.parse(localStorage.getItem('Task'));
        if(storeData){
            setTask(storeData);
        }
    },[]);

      // Update local storage whenever TODOs change
     useEffect(()=>{
localStorage.setItem('task',JSON.stringify(task))
    },[task])



const handleSubmit=(e)=>{
e.preventDefault()
// if(userValue.trim() !== ""){

// }
const newData=userValue
setTask([...task,newData])
setUserValue('')
    }

  return (
    <div>
<form onSubmit={handleSubmit} >
        <input type="text" placeholder='enter task'
        value={userValue}
        onChange={(e)=>setUserValue(e.target.value)}
        />
        <button>add tasks</button>
        </form>
        <div>
            <ul>
               {task.map((curElem,index)=>{
                return(
                    <li key={index}>
                        <span>
                            {curElem}
                            <button>Delete</button>
                        </span>
                        
                    </li>
                )
               })} 
            </ul>
        </div>
    </div>
  )
}

export default Todo