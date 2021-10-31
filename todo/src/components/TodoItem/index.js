
import React, { Component } from 'react'
import './style.css'

class Todoitem extends Component {
constructor(props){
super(props);

}


    render() {
        return (
            <div className='todolistDiv'>
                <li className='todoList'>
                    <h3 className='todoName'>{this.props.todo.name}</h3>
                    <h3 className='todoClose' onClick={()=> this.props.handlDel(this.props.todo.id)}>X</h3>
                    </li>
            </div>
        )
    }
}
export default Todoitem;