import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List'

class App extends React.Component {
  state={taskArray: [], completedTaskArray: []}

  componentDidMount(){
    fetch("http://localhost:3000/tasks")
    .then(response=> response.json())
    .then(data=> {
       this.completed(data)
       this.todo(data)
    })
  }

  completed = (data) => {
   let tasks = data.filter(data => data.complete === true)
   this.setState({completedTaskArray: tasks})
  }

  todo = (data) => {
   let tasks = data.filter(data => data.complete === false)
   this.setState({taskArray: tasks})
  }

  handleClick= (taskObj)=> {
    // console.log(this.setState({complete: !taskObj.complete}))
    // console.log(taskObj.props.task)

    fetch(`http://localhost:3000/tasks/${taskObj.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          complete: !taskObj.complete
        })
    })
    .then(response=> response.json())
    .then(data=> {
      // console.log([...this.state.completedTaskArray,2,3,4])

      this.completed([...this.state.completedTaskArray,data])
      this.todo(this.state.taskArray)
    })
  }



render(){
  return (
    <div className="App">
        <List list={this.state.taskArray} clicked={this.handleClick}/>
    </div>
  );
}

}

export default App;
