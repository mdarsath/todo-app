import './Todolist.css'
import React from 'react'

import EditIcon from '@material-ui/icons/Edit'
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'


import axios from 'axios'
function Todolist(props) {

    const todolist = props.todolist.map((task,index) => {
   

        //update
        const taskComplete = task => {
            axios.put(`http://localhost:4000/update/${task._id}` , {
                _id : task._id,
                todo: task.todo,
                isCompleted : !task.isCompleted
            }).then(res => props.taskComplete(res.data)).catch(err => console.log(err))
        }
   
   //delete
        const removeTask = id => {
            axios.delete(`http://localhost:4000/delete/${id}`).then(res => props.removeTask(res.data)).catch(err => console.log(err))
        } 
   
   
   return <li key = {index}>
   
            <div style = {{display : 'flex'}}>
               <CheckIcon className = {task.isCompleted ? 'isCompleted' : 'checkicon'}/>
               <p className = {task.isCompleted ? 'taskcomplete' : ''} onClick = {() => {
                   taskComplete(task)
               }}>{task.todo}</p>
            </div>
   
            <div>
                <EditIcon className = 'edit' onClick = {() => {
                    props.tasktoUpdate(task)
                    props.showPopup()
                }}/>
                <CloseIcon className = 'close' onClick = {() => {
                    removeTask(task._id)
                }}/>
            </div>
   
   
        </li>
    })
    return (
        <div className = 'tasklist'>
            <ul>
                {todolist}
            </ul>
        </div>
    )
}

export default Todolist