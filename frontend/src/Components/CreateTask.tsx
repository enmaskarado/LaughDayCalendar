import React, { useState } from 'react'

function CreateTask() {
    const [tasks, setTasks] = useState({
        id: '',
        name: '',
        status: 'pending'
    })
    const onSubmit = (e)=>{
        // 
        setTasks((prev)=>{
            const list = [...prev, task]
            localStorage.setItem('tasks',JSON.stringify(list))
            return list
        })
    }
    return (
        <>
            <div>CreateTask</div>
            <form onSubmit={onSubmit}>
                <input
                 value={task.name}
                 onChange={(e)=>setTasks({...tasks, id: (new Date()).toString() , name: e.target.value})}
                 type='text' className='border-2' />
                <button>
                    Create
                </button>
            </form>
        </>
    )
}

export default CreateTask