import React from "react"
import Card from "./Card"

function DoneImg(props){
    if(props.done){
        return (<img alt="done" src="./assets/done.png"></img>)
    }else{
        return (<img alt="undone" src="./assets/x-square.png"></img>)
    }
}

function ListItem(props){
    
    return(
        <li>
            <Card className={props.item.done?"done item" : "item"}>
            {props.item.text}
            <div>
                <button onClick={() => {props.onDone(props.item)}}><DoneImg done={props.item.done}></DoneImg></button>
                <button onClick={() => {props.onItemDelete(props.item)}}><img alt="delete" src="./assets/bin.png"></img></button>
            </div>
            </Card>
        </li>)}
    


export default ListItem