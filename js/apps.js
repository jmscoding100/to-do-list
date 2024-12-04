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


//testing make task item
let prevItem
let currentItem

//array of task
let taskArry = []

let task ={}

//addTaskBtn
addTaskBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    validateInput()
})

//take input
const validateInput =()=> {
    // testing
    
    if (taskInput.value === '') {
        alert('Please enter a task before submmiting')
    } else {

        for (let i = 0; i < taskArry.length; i++) {
            if (taskInput.value == taskArry[i].task){
                alert('Task has already been added')
                taskInput.value = ''
                return
            }
        }
        makeTask(taskInput.value)
    }

// end test ...Good


    taskInput.value = ''
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
    checkbox.setAttribute('data-id', `${item.id}`)
    checkbox.classList.add('form-check-input','checkbox')

    const label = document.createElement('label')
    label.setAttribute('for', `taskId-${item.id}`)
    label.classList.add('form-check-label', 'text-capitalize', 'mx-2', 'task-label')

    // label.innerText =`${item.task} - Date Created ${item.dateAdded}`
    const taskSpan = document.createElement('span')
    taskSpan.classList.add('task-span')
    taskSpan.innerText = item.task


    const dateAddedSpan = document.createElement('span')
    dateAddedSpan.classList.add('date-added')
    dateAddedSpan.innerText = ` | ${item.dateAdded}`


label.appendChild(taskSpan)
label.appendChild(dateAddedSpan)

    li.appendChild(checkbox)
    li.appendChild(label)

    el.appendChild(li)
}


completedBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    // console.log('click')
    validateCompletedTask()
})

//validate checked task

const validateCompletedTask =()=>{

    let completedArr = []
    const checkboxes = document.querySelectorAll('.checkbox')


    //testing
    for(let i=0; i<checkboxes.length; i++) {
        if(checkboxes[i].checked && (checkboxes[i].getAttribute('data-id') == taskArry[i].id)) {
            taskArry[i] ={
                ...taskArry[i],
                isCompleted: true,
                dateCompleted: new Date().toString()
            }
        }
    }

    console.log(taskArry)



    for(let i = 0; i < taskArry.length; i++){
        if (taskArry[i].isCompleted) {
            completedArr = [...completedArr, taskArry[i]]
        }
    }
    //end testing



    completedTask.innerText = completedArr.length
    makeCompleteItem(completedArr)

}



//make li for completed list
const makeCompleteItem = (arr)=> {
    arr.forEach(item => {
        const task = item.task
        const dateCompleted = item.dateCompleted


        const completedItem = document.createElement('li')
        completedItem.classList.add('list-group-item', 'text-success', 'text-capitalize', 'completed-item')
        completedItem.innerText = `${task} | completed: ${dateCompleted}`

        //testing
        currentItem = task

        if(currentItem !== prevItem) {
            completedList.appendChild(completedItem)
            prevItem = currentItem
            return
        }
    })
}