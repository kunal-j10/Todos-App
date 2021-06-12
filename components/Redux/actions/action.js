import firebase from 'firebase';

export function createTodo(todo){
    return((dispatch,getState)=>{
        //make async calls
        firebase.firestore()
        .collection('todos')
        .add({
            Header:todo.header,
            Discription:todo.discription,
            Date:new Date()
        })
        .then(()=>{
            dispatch({type:'create_todo',todo:todo})
        })

        firebase.firestore()
        .collection('todos')
        .orderBy('Date', 'desc')
        .get()
        .then((snapshot)=>{

            const todos=[]

            snapshot.forEach((doc)=>{
                const data = doc.data()
                todos.push(data)
            })

            dispatch({type:'display_todo',todos:todos})
        })
        .catch((error)=>{
            console.log(error)
        })
    })
};

export function displayAll(){
    return((dispatch,getState)=>{
        //make async calls
        firebase.firestore()
        .collection('todos')
        .orderBy('Date', 'desc')
        .get()
        .then((snapshot)=>{

            const todos=[]

            snapshot.forEach((doc)=>{
                const data = doc.data()
                todos.push(data)

            })

            dispatch({type:'display_todo',todos:todos})
        })
        .catch((error)=>{
            console.log(error)
        })
        

    })
};