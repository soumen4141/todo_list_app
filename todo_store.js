let todo_store={


    todos:[
        // {
        //     id:"1",
        //     todo_title:"Coding prctise"

        // },
        // {
        //     id:"2",
        //     todo_title:"Coding prctise"
            
        // },
        // {
        //     id:"3",
        //     todo_title:"Coding prctise"
            
        // },
        // {
        //     id:"4",
        //     todo_title:"Coding prctise"
            
        // }
    ]
}

let render=()=>{

    let todo_html=todo_store.todos.map((todo)=>{

      return ` <li class="todos" data-id=${todo.id}>

      ${todo.todo_title.toUpperCase()}

      <div class="logos">
      <button class="modifty_todo" >
    modify
  </button>
      <div class="todo_date">
            ${todo.todo_date}
          </div>
     
      <span class="material-symbols-outlined">
          delete
          </span>

     </div>


      </li>`
    }).join()

    document.querySelector(".all_todos").innerHTML=todo_html;
}
let a=10;
export {todo_store}
export default render;