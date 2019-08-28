import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List'
import Finished from './Finished'

class App extends React.Component {
  state={taskArray: [], completedTaskArray: []}

  componentDidMount(){
    fetch("http://localhost:3000/tasks")
    .then(response=> response.json())
    .then(data=> {
      data.map(this.taskSeparator)
    })
  }

  taskSeparator = (data) => {
    if (data.complete){
      this.setState({ taskArray: [...this.state.taskArray, data]})
    } else {
      this.setState({ completedTaskArray: [...this.state.completedTaskArray, data]})
    }
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
    .then(data => {
        this.setState({taskArray: this.state.taskArray.filter(x => x.title !== data.title)})
        this.setState({completedTaskArray: this.state.completedTaskArray.filter(x => x.title !== data.title)})
        this.taskSeparator(data)
    })

  }



render(){
  return (
    <div className="App">
        <List list={this.state.taskArray} clicked={this.handleClick}/>
        <Finished list={this.state.completedTaskArray} clicked={this.handleClick}/>
    </div>
  );
}

}

export default App;
