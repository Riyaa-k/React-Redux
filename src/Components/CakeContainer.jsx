import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../Redux'

const CakeContainer = (props) => {
  return (
    <div>
      <h1>No Of Cakes-{props.numofCakes}</h1>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps=state=>{
    return{
        numofCakes:state.numofCakes
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        buyCake:()=>dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
