import render from "./todo_store.js"
import {todo_store} from "./todo_store.js"

let modify_id=0;


document.querySelector("#todo_submit").addEventListener('click',(e)=>{

     let todo_value=document.querySelector('#todo');

     let  modify=document.querySelector("#todo_submit");

     if(todo_value.value==""){
        alert("please a enter a todo");
     }
     else if(modify.innerText=="modify"){


        let date=new Date();

        let am_pm;
        if(date.getHours()<12){
           am_pm="AM";
        }
        else{
           am_pm="PM"
        }
        todo_store.todos=todo_store.todos.map((todo)=>{

        if(todo.id==modify_id){

            return {

                id:modify_id,
                todo_title:`${todo_value.value}`,
                todo_date:`${date.getFullYear()}:${date.getMonth()+1}:${date.getDate()}--${date.getHours()}:${date.getMinutes()}  ${am_pm}`
            }
        }

        return todo;


       })
       todo_value.value="";
       todo_value.focus();

       modify.innerText="Add todo"

       render();
       console.log("todo submitted")
        

     }
     else{
         let date=new Date();

         let am_pm;
         if(date.getHours()<12){
            am_pm="AM";
         }
         else{
            am_pm="PM"
         }
        todo_store.todos.push({
            id:`${crypto.randomUUID()}`,
            todo_title:`${todo_value.value}`,
            todo_date:`${date.getFullYear()}:${date.getMonth()+1}:${date.getDate()}--${date.getHours()}:${date.getMinutes()}  ${am_pm}`
            
        })
        todo_value.value="";
        render();
        console.log("todo submitted")
     }
    

    
})

let delete_todo=(todo_id)=>{

    todo_store.todos=todo_store.todos.filter((todo)=>{

        return todo.id!=todo_id;
    })

    render();
    modify.innerText="ADD TODO"

    console.log("todod deleted")

}
document.querySelector(".all_todos").addEventListener('click',(e)=>{

    let todo_id=e.target.parentElement.parentElement.dataset.id;

    if(e.target.innerText=="delete"){

       let check= confirm("are you want to delete todo");

       if(check){
        delete_todo(todo_id);

       }
        
   
       
    

    }
    if(e.target.innerText=="modify"){

        modify_todo(todo_id) ;
    }
   

    
    console.log(e.target.innerText)


})
let modify_todo=(todo_id)=>{

    modify_id=todo_id;
    console.log(modify_id);


    let check=confirm("are u want to modify")

    if(check){

        document.querySelector("#todo").focus();

        document.querySelector("#todo_submit").innerHTML="modify"
    }
}