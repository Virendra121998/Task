const initialState={
    counter:0,
    bill:0,
    tasks:[],
    show:[]
}

const Reducer=(state=initialState,action)=>{
   
    if(action.type==='ADD'){
        let show=[...state.show]
        show[action.id]=true;
        console.log(action.id)
        if(state.counter<3)
         return{
           ...state,
           counter:state.counter+1,
           bill:15,
           show:show   
         }
        else
          return{
            ...state,
            counter:state.counter+1,
            bill:state.bill+action.price,
            show:show   
          } 
    }
    if(action.type==='DELETE')
    {  if(state.show[action.id]===true)
       {
        let show=[...state.show]
        show[action.id]=false    
        if(state.counter<=4&&state.counter>1)
        {
            return{
                ...state,
                counter:state.counter-1,
                bill:15,
                show:show
            }
        }
        if(state.counter>4)
        {
            return{
                ...state,
                counter:state.counter-1,
                bill:state.bill-action.price,
                show:show
            }
        }
        return{
            ...state,
            bill:0,
            counter:0,
            show:show
        }
      }
       return{
           ...state,
           counter:state.counter
       } 
    }
    if(action.type==='SHOWDATA')
    {
        let show=[];
        console.log(action.data)
        for(var i=0;i<action.data.length;i++)
         show.push(false)
        return{
            ...state,
            tasks:action.data,
            show:show
        }
    }
    return state;
}

export default Reducer;