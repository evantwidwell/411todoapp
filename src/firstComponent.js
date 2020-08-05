import React from 'react';

function FirstComponent(props){
  // console.log("This is first component props", props.items)
  // deleteButton = (i) =>{
  //   props.items.splice(i)
  // }
  return (
    <div>
     {/* <h1>This is Our Listing Component</h1> */}
    <ul>{props.items.map((item, index)=>{
      console.log(index)
      return <div><li key={index}>{props.items[index]} <button key={index} onClick= {props.deleteItem}>Delete</button></li>
       
        </div>
    })}

    </ul>
    </div>
  )
};
export default FirstComponent;