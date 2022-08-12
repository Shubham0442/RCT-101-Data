
import axios from "axios"

export function getTodos(){
    return axios.get("https://still-bastion-75542.herokuapp.com/todos")
}

export function deleteTodo(id){
    return axios({
        url: `https://still-bastion-75542.herokuapp.com/todos/${id}`,
        method:"DELETE"
    })
}

export function postTodo({title, status}){
    return axios({
        url:`https://still-bastion-75542.herokuapp.com/todos`,
        method:"POST",
        data:{
            title,
            status
        }
    });
}

export function toggleTodoStatus({id, newStatus}){
   return axios({
    url:`https://still-bastion-75542.herokuapp.com/todos/${id}`,
    method:"PATCH",
    data: {
        status: newStatus
    }
   })
}