/*

https://react-redux.js.org/tutorials/quick-start

*/
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Change,Plus,Minus,Hide,Show,Toggle } from '../Basic_slice'
import Img_redux from './Img_redux'



function Basic_task() {
   
    const dispatch = useDispatch();

    // by useSelecture you can access globaly state from slice

    const {name,number,isImage} = useSelector((state)=>state.basic);


  return (
    <div>
        <button onClick={()=>dispatch(Change())}>Change</button>
        <h1>My Name is : {name}</h1>

        <hr /> 

        <button onClick={()=>dispatch(Plus())}>+</button>
        <h1>{number}</h1>
        <button onClick={()=>dispatch(Minus())}>-</button>

        <hr /> 

        <button onClick={()=>dispatch(Hide())}>Hide</button>
        <button onClick={()=>dispatch(Show())}>Show</button>
        <button onClick={()=>dispatch(Toggle())}>Toggle</button>
        
        {isImage?<Img_redux/> : null}

        
    </div>
  )
}

export default Basic_task