const initialState ={
    todos:[]
}

export const displayReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'display_todo':
            console.log('displaying todos',action.todos)
            return{
                todos:action.todos
            }
            //this.setState({todos:todos})
            
    }
    return state

}