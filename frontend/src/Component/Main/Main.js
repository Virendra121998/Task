import React from 'react';
import {Card,Button} from 'react-bootstrap';
import Tasks from '../Tasks/Tasks'; 
import {connect} from 'react-redux';
import './Main.css';
import axios from 'axios';
import * as actiontypes from '../../store/action';

class Main extends React.Component{
    

    componentDidMount(){
      this.props.getData();   
    }    
      
    render(){
        let Options=this.props.Data.map((index,element)=>{
          return <Tasks name={index.name} price={index.price} id={element}/>
        })
        return(
           <div className="bg"> 
            <div className="header"> 
              <label className="l1">WhiteWular</label>
              <label className="l2">Tasks Selection</label>
            </div>
            <div className="main">
               <div className="left">
                 {Options}
               </div>
               <div className="right">
               <Card style={{width:'250%',fontSize:'30px',height:'50%'}}>
                  <Card.Header>Bill</Card.Header>
                    <Card.Body style={{marginBottom:'10%'}}>
                      <Card.Title><p>Payment: {this.props.Bill}</p>
                                  <p>Number of Tasks: {this.props.Counter}</p>
                      </Card.Title>
                        
                      <Button variant="primary" style={{position:'relative',marginTop:'100px',marginBottom:'0'}}>Checkout</Button>
                    </Card.Body>
               </Card> 
               </div>
            </div>
           </div> 
        )
    }
}
const MapStateToProps=state=>{
    return{
        Bill:state.bill,
        Counter:state.counter,
        Data:state.tasks
    }
}

const MapDispatchToProps =dispatch=>{
  return{
    getData:()=>dispatch(actiontypes.Get())
  }
}

export default connect(MapStateToProps,MapDispatchToProps)(Main);