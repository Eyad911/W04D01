import React, { Component } from "react";
import Todoitem from "../TodoItem";
import "./style.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, name: "play" },
        { id: 2, name: "sleep" },
      ],
    };
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // console.log(event.target.task.value);
    // console.log(this.state.todos);
    const todo = {
      id: this.state.todos.length + 1,
      name: event.target.task.value,
    };
    this.setState({
      todos: [...this.state.todos, todo],
    });
    event.target.task.value = "";
  };

handlDel =(id)=>{
    this.setState({ todos:this.state.todos.filter((todo)=>todo.id != id)});
}

  render() {
    return (
      <div className="todo">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="task" />
          <button>Add Task</button>
        </form>
        <ul>
          {this.state.todos.map((todo, i) => (
            <Todoitem todo={todo} key={i} handlDel={this.handlDel} />
          ))}
        </ul>
      </div>
    );
  }
}
export default Todo;
