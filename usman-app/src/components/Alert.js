import React from 'react'

export default function Alert(props) {
    // const capitalize = (word)=>{
    //     return word.charAt(0).toUpperCase() + word.slice(1)
    // };
    // const capitalize = (word)=>{
    //     let lower = word.toLowerCase();
    //     return lower.CharAt(0).toUpperCase() + lower.slice(1); 
    // };
  return (
    props.alert && <div>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.type}</strong>: {props.alert.msg}
        </div>
    </div>
  )
}
