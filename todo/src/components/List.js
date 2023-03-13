import React from "react"
import Card from "./Card"

function DoneImg(props){
    if(props.done){
        return (<img alt="done" src="./assets/done.png"></img>)
    }else{
        return (<img alt="undone" src="./assets/x-square.png"></img>)
    }
}

function List(props){
    
    return(
    <ul>
        {props.items.map(item=>
        <li key={item.id}>
            <Card className={item.done?"done item" : "item"}>
            {item.text}
            <div>
                <button onClick={() => {props.onDone(item)}}><DoneImg done={item.done}></DoneImg></button>
                <button onClick={() => {props.onItemDelete(item)}}><img alt="delete" src="./assets/bin.png"></img></button>
            </div>
            </Card>
        </li>)}
    </ul>)
}

export default List