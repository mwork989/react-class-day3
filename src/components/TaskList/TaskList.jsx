import { Component } from "react"
import TaskComponent from "../Task/Task";


class TaskListComponent extends Component{
    constructor(){
        super();
        this.state = {
            title: "Task List App",
            tasks:[],
            newTask:"",
            error:""
        }

        this.processTask = this.processTask.bind(this);
        this.addTask = this.addTask.bind(this);
        this.markAsComplete = this.markAsComplete.bind(this);
        this.removeTask = this.removeTask.bind(this)
    }

    processTask(event){
        const task = event.target.value;
       
        this.setState({
            newTask :task,
            error:''
        })
       
    }

    addTask(){
        if(this.state.newTask.length>0 && isNaN(this.state.newTask)){
            const newTaskRecord ={
                text:this.state.newTask,
                index:this.state.tasks.length,
                isComplete:false,
            }
            // ES5 Js way
            // const updateTaskList = []
            // for (let index = 0; index < this.state.tasks.length; index++) {
            //     updateTaskList.push(this.state.task[index])
                
            // }
            // updateTaskList.push(newTaskRecord)
            
            //ES6 way spread operator
            const updateTaskList = [...this.state.tasks,newTaskRecord]
            this.setState({
                tasks:updateTaskList,
                newTask : ''
            })
            
        }else{
            this.setState({
                error:"Enter valid task name"
            })
        }
    }

    removeTask(index){
        const removedTasks = this.state.tasks.filter((task)=>{
            if(task.index !== index){
                return task
            }
        })
        this.setState({
            tasks: removedTasks
        })
    }

    markAsComplete(index){
        const  updatedTasks = this.state.tasks.map((task)=>{
            if(task.index === index){
                return {
                    ...task,
                    isComplete: !task.isComplete
                }
            }
            return task;
        })

        this.setState({
            tasks:updatedTasks
        })
    }

    renderTaskList(){
        if(this.state.tasks.length>0){
            return this.state.tasks.map((task,index)=>{
                return ( 
                    <TaskComponent
                        key={index}
                        index={task.index}
                        text= {task.text}
                        checked = {task.isComplete}
                        handleCheckboxChange = {this.markAsComplete}    
                        handDelete = {this.removeTask}>
                    </TaskComponent>
                )
            })
        }
    }


    render(){
        return(
            <div>
                <h2>{this.state.title}</h2>
                <input type="text" name="taskname" value={this.state.newTask} onChange={this.processTask}/>
                <span style={{color:"red"}}>{this.state.error}</span>
                <button onClick={this.addTask}>Add New Task</button>
                <ul>{this.renderTaskList()}</ul>
            </div>
        )
    }
}

export default TaskListComponent;