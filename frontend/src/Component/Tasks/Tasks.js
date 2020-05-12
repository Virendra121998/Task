import React from 'react';
import './Tasks.css';
import * as actionTypes from '../../store/action';
import {connect} from 'react-redux';
const Tasks=(props)=>{
  return (
      <div className="task">
         <label>{props.name}</label>
         <label>Price: {props.price}</label>
         <div>
         <button className="b1" onClick={()=>props.Add(props.price,props.id)}>Add</button>
         <button className="b2" onClick={()=>props.Delete(props.price,props.id)}>Delete</button>
         </div>
      </div>
  )
}



const MapDispatchToProps=dispatch=>{
    return{
        Add:(price,id)=>dispatch(actionTypes.Add(price,id)),
        Delete:(price,id)=>dispatch(actionTypes.Delete(price,id))
    }
}
export default connect(null,MapDispatchToProps)(Tasks);