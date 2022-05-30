let input = document.querySelector('#input')
let btn = document.querySelector('#btn')
let table = document.querySelector('table')
let tbody = document.querySelector("tbody")
let theme = document.querySelector('#theme')
let taskList = new Array()

input.addEventListener('keydown',(e)=>{
    if(e.keyCode === 13 ) {
        e.preventDefault()
        btn.click()
    }
})

// theme Event's
theme.addEventListener('click' , () => {
    // change icon 
    theme.firstElementChild.classList.toggle('bi-sun')
    theme.firstElementChild.classList.toggle('text-light')
    theme.firstElementChild.classList.toggle('text-warning')
    // change body color
    document.querySelector('body').classList.toggle('bg-dark')
    document.querySelector('body').classList.toggle('bg-light')
    // change header color
    document.querySelector('header').classList.toggle('bg-danger')
    document.querySelector('header').classList.toggle('bg-primary')
    // change table color
    table.classList.toggle('table-dark')
    table.classList.toggle('table-secondary')
})

// add button Event's
btn.addEventListener("click",() => {

    // dont work when input-value is repetitive
    let check = taskList.findIndex(e => e == input.value)
    if (check >= 0) {
        alert(`${input.value} is Already defined`)
    }else
    // dont work when input-value is empty
    if(input.value != ''){
    
    // push new item in task list
    taskList.push(input.value)

    // set Date 
    let newDate = new Date()
    let now = `${newDate.getFullYear()}/${newDate.getMonth()+1}/${newDate.getDate()} ${newDate.getHours()}:${newDate.getMinutes()}`

    //set count
    // let count = (tbody?.lastElementChild?.firstElementChild?.innerHTML) ?? 0  //error
    // count = Number(count)+1

    let count = tbody.childElementCount + 1


    let newItem = document.createElement('tr')
    newItem.innerHTML = `<td>${count}</td><td>${input.value}</td><td>${now}</td><td><button class="btn btn-danger btn-sm">remove</button></td>`
    input.value = ''  //clear input
    tbody.append(newItem)

    
    // clear Event 
    newItem.querySelector('.btn-danger').addEventListener('click' , (element) => {
        // filter item from taskList
        let removedTaskName = element.target.parentElement.parentElement.children[1].innerHTML
        let removedTaskIndex = taskList.findIndex(e => e == removedTaskName)
        // taskList.splice(removedTaskIndex,1)

         taskList = taskList.filter(e => e != removedTaskName)  //notwork

        // remove <tr>
        element.target.parentElement.parentElement.remove()
        
        // set new count
        Array.from(tbody.children).forEach((element,index) => {
            element.firstElementChild.innerHTML = index+1
        } )
    })
    }else {
        alert('Please write something')
    }

})
