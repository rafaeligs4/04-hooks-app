import * as z from "zod";


interface Todo {
  id: number;
  text: string;
  completed: boolean;
}


interface TaskState {
    todos: Todo[];
    length: number;
    completedTask: number;
    incompletedTask: number;
}

const TodoSchema = z.object({
    id: z.number(),
    text: z.string(),
    completed: z.boolean()
})

const TaskStateValidator = z.object({
     length: z.number(),
    completedTask:  z.number(),
    incompletedTask:  z.number(),
   todos: z.array(TodoSchema) 
}) 

export type TaskAction = {type: 'ADD_TODO', payload: string}
|  {type: 'TOGGLE_TODO', payload: number}
| {type: 'DELETE_TODO', payload: number}
;

export const getTaskInitialState = ():TaskState => {
  const localState: string | null = localStorage.getItem('task-state');


  if(!localState){
 return {
    completedTask: 0,
    incompletedTask: 0,
    length: 0,
    todos: []
  }
  }
  const stateData = JSON.parse(localState); 
  const {data,error} = TaskStateValidator.safeParse(stateData);
  if(error){
    console.error('Data mala. ',error);
     return {
    completedTask: 0,
    incompletedTask: 0,
    length: 0,
    todos: []
  }
  }
  return data;
}

export const taskReducer = (state: TaskState, action: TaskAction ): TaskState=>{

    switch(action.type){
        
        case 'ADD_TODO':{
        if(action.payload.length <=0) return state;

        const newTodo: Todo = {
        id: Date.now(),
        completed: false,
        text: action.payload
        };
        const arrayTodos =  [...state.todos, newTodo];
        
            
        return {...state,
                todos:arrayTodos,
                length: arrayTodos.length,
                incompletedTask: arrayTodos.filter(todo=>!todo.completed).length,
                completedTask: arrayTodos.filter(todo=>todo.completed).length
        };
        }
        
        case 'DELETE_TODO':{

            
        console.log('Eliminar tarea', action.payload);
        const newTodos = state.todos.filter(todo=>todo.id !== action.payload);

        return {
            ...state,
            todos: newTodos,
             incompletedTask: newTodos.filter(todo=>!todo.completed).length,
            completedTask: newTodos.filter(todo=>todo.completed).length,
            length: newTodos.length
        };
        }

        
        case 'TOGGLE_TODO':{

            const updatedTodos = state.todos.map(todo=>{
            if(todo.id === action.payload){
                return {...todo, completed: !todo.completed}
            }
            return todo;
            });

                    
        return {
            ...state,
            todos: updatedTodos,
            incompletedTask: updatedTodos.filter(todo=>!todo.completed).length,
            completedTask: updatedTodos.filter(todo=>todo.completed).length,
            length: updatedTodos.length
        };
        }

        default: 
        return state;
    }
}

//   const toggleTodo = (id: number) => {
//     console.log('Cambiar de true a false', id);
//     const updatedTodos = todos.map(todo=>{
//       if(todo.id === id){
//         return {...todo, completed: !todo.completed}
//       }
//       return todo;
//     });
//     setTodos(updatedTodos);
//   };

//   const deleteTodo = (id: number) => {
//     console.log('Eliminar tarea', id);
//     const newTodos = todos.filter(todo=>todo.id !== id);

//     setTodos(newTodos);

//   };
