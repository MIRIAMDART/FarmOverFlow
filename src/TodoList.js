import React, { Component } from 'react'
import TodoListItem from './TodoListItem'


export default class TodoList extends Component {
  state={
    entryItem: "", 
    itemList: []
  }


  onFormSubmit = (event) => {
    event.preventDefault()
     
    let itemList = this.state.itemList
    itemList.push(this.state.entryItem)
    this.setState({itemList, entryItem: ''})
  }

  onInputChange = (event) => {
    this.setState({entryItem: event.target.value})
  }

  

  render() {
    return (
      <div className= "Top-Wrapper">
        <form className= "todoform" onSubmit= {this.onFormSubmit}>
        <input
            type="text"
            className="form-control"
            placeholder="Enter a task"
            value= {this.state.entryItem}
            onChange = {this.onInputChange}/>
        </form>
          <h3 className="todotitle">Farm Tasks </h3> 
        {this.state.itemList.map((item, index)=>(
          <TodoListItem key={index} id={index} todoListItem={item} />
        ))}
      </div>
    )
  }
}
