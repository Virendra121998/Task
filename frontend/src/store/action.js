import axios from 'axios'

 export const Add=(price,id)=>{
    return{
        type:'ADD',
        price:price,
        id:id
    }
}

export const Delete=(price,id)=>{
    return{
        type:'DELETE',
        price:price,
        id:id
    }
}

export const ShowData=(data)=>{
  return{
      type:'SHOWDATA',
      data:data
  }
}

export const Get=()=>{
    return dispatch=>{
    axios.get('http://localhost:5000/task').then((res)=>{
        dispatch(ShowData(res.data))
    }).catch((err)=>{
         
    })
  }
}