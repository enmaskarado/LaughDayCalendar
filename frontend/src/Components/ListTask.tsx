import React, { useEffect } from 'react'
interface ListTaskProps {
    tasks: string[]
    setTasks: () => void
}
function ListTask({ tasks, setTasks }: ListTaskProps) {
    const [todos, setTodos] = useState([])
    const [inProgress, setInProgress] = useState([])
    const [closed, setClosed] = useState([])

    useEffect(() => {
        const todosData = tasks.filter((task) => task.status === "todos")
        const progressData = tasks.filter((task) => task.status === "progress")
        const closedData = tasks.filter((task) => task.status === "closed")
        setTodos(todosData)
        setInProgress(progressData)
        setClosed(closedData)
    }, [tasks])
    const statuses = ['todo', 'progress', 'closed']
    return (
        <div>
            {statuses.map((status, index) => (
                <Section key={index} status={status}
                    tasks={tasks}
                    setTasks={setTasks}
                    todos={todos}
                    inProgress={inProgress}
                    closed={closed}
                />
            ))}
        </div>
    )
}

export default ListTask



const Section = ({ status, tasks, setTasks, todos, inProgress, closed }) => {
    let tasksToMap = tasks
    return (
        <div>
            <h2>{status}</h2>List
            <div>
                {tasksToMap.length > 0 && tasksToMap.map((task) => <Task key={task.id} tasks={tasks} setTasks={setTasks}></Task>)}
            </div>
        </div>
    )
}
const Task = ({ task, tasks, setTasks }) => {
    const handleRemove = (id) => {
        console.log(id)
        const ftasks = tasks.filter(t => t.id !== id)
        setTasks(ftasks)
    }
    return (
        <div>
            <p>{task.name}</p>
            <button onClick={() => handleRemove(task.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>

            </button>
        </div>
    )
}