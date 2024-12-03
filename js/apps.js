/*
WHAT DO WE WANT IT TO DO
    input task ++
    mark as completed
    list the task
    count and award task
*/


// grab the elements
const taskInput = document.getElementById('taskInput')
const addTaskBtn = document.getElementById('addTaskBtn')
const taskList = document.getElementById('taskList')
const completedBtn = document.getElementById('completedBtn')
const completedList = document.getElementById('completedList')
const completedTask = document.getElementById('completedTask')

//array of task
let taskArry = []

let task ={

}

//addTaskBtn
addTaskBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    validateInput()
})

//take input
const validateInput =()=> {

    if (taskInput.value === '') {
        alert('Please enter a task before submmiting')
    } else {
        makeTask(taskInput.value)
    }
}

//make task
const makeTask = (chore)=> {
    const timeStape = new Date()


    task = {
        id: taskArry.length + 1,
        task: chore,
        isCompleted: false,
        dateAdded: timeStape.toTimeString(),
        dateCompleted: ''
    }

    addTask(task)
}

const addTask =(obj)=>{

    taskArry = [...taskArry,obj]

    // console.log(taskArry)
    makeTaskItem(taskList, obj)
}

//make li for task
const makeTaskItem =(el, item)=>{

    const li = document.createElement('li')
    li.classList.add('list-group-item')

    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('id',`taskId-${item.id}`)
    checkbox.classList.add('form-check-input','checkbox')

    const label = document.createElement('label')
    label.setAttribute('for', `taskId-${item.id}`)
    label.classList.add('form-check-label', 'text-capitalize', 'mx-2', 'task-label')
    label.innerText =`${item.id} - Date Created ${item.dateAdded}`


    li.appendChild(checkbox)
    li.appendChild(label)

    el.appendChild(li)
}


completedBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log('click')
})

//validate checked task

const validateCompletedTask =()=>{
    let completedArr = []
    const checkboxes = document.querySelectorAll('.checkbox')
    const allTasks = document.querySelectorAll('.task-label')
}