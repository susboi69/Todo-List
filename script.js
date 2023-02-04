const taskInput = document.querySelectorAll(".user-task")
const addBtn = document.querySelector(".task-btn")
const taskContainer = document.querySelector (".task-container")
const taskCreator = document.querySelector(".task-creator")
const taskTemplate = document.querySelector("#task")

addBtn.addEventListener ("click",newTask)




function newTask(){
    const task = taskTemplate.content.cloneNode(true).firstElementChild
    const btn = task.firstElementChild
    const input = task.firstElementChild.nextElementSibling
    const deleteBtn = input.nextElementSibling
    input.value = taskCreator.value
    btn.addEventListener("click", e => {
    input.disabled = !input.disabled;
    const currentState = input.disabled === true ? "Edit" : "Save"
    btn.innerText = currentState
    input.focus();
    if(input.disabled === false){
      document.addEventListener("click", e => {
        if (e.target === btn || e.target === input ){
          return
        }
        else {
          input.disabled = true 
          btn.innerText = "Edit"
        }
      })
    }
});
     deleteBtn.addEventListener ("click", e => {
      task.remove()
     })
    taskContainer.appendChild(task)

}
