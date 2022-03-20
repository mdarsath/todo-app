import React , {useState , useEffect} from 'react'
import axios from 'axios'
import './App.css'
import Addtask from './Components/Addtask'
import Todolist from './Components/Todolist'
import Updatetask from './Components/Updatetask'



function App() {

  const [todolist,setTodolist] = useState([])
  const [tasktoUpdate , setTasktoUpdate] = useState({})  //change atfer click edit icon 
  const [showPopup,setShowPopup] = useState(false)       //change atfer click edit icon 


  useEffect(() => {
    axios.get('http://localhost:4000/find').then(res => {
      setTodolist(res.data)
    }).catch(err => console.log(err))
  },[])


  const addTask = newTask => {
    setTodolist([...todolist,newTask])
  }

//for update
  const taskComplete = task => {

    const newList = [...todolist]
    newList.forEach(item => {
      if(item._id === task._id){
        item.isCompleted = task.isCompleted
      }
    })
    setTodolist(newList)
  }

//for delete
  const removeTask = task => {
    const newList = todolist.filter(item => !(item._id === task._id))
    setTodolist(newList)
  }
 
 
  const updatetask = task => {
    const newList = [...todolist]
    newList.forEach(item => {
      if(item._id === task._id){
        item.todo = task.todo
      }
    })
    setTodolist(newList)
  }


  return (
    <div>
      <Addtask addTask = {addTask}/>
      <Todolist todolist = {todolist} taskComplete = {taskComplete} removeTask = {removeTask} tasktoUpdate = {task => setTasktoUpdate(task)} showPopup = {() => setShowPopup(!showPopup)}/>
      {showPopup && <Updatetask task = {tasktoUpdate} updatetask = {updatetask} removePopup = {() => setShowPopup(!showPopup)}/>}
    </div>
  )
}

export default App