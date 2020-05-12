import axios from 'axios'

 export const Add=(price)=>{
    return{
        type:'ADD',
        price:price
    }
}

export const Delete=(price)=>{
    return{
        type:'DELETE',
        price:price
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