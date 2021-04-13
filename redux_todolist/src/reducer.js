const initialState = {
    todos : [],
};

const reducer = (state = initialState, action)=>{
    switch(action.type){
        
        case 'ADD_TODO':
            console.log("ADD_TODO", state.todos);
            return{
                ...state,
                todos:[...state.todos, action.payload],
            };
        case 'DELETE_TODO':
            console.log("DELETE_TODO", state.todos);
            return{
                ...state, 
                todos: state.todos.filter(todo=>todo.id !== action.payload),
            };
        default: return state;
    }
}

export default reducer;