import React from 'react'

class ListItem extends React.Component {



    render(){
        return(
            <div className={this.props.task.complete ? "todo" : "completed"} onClick={()=> this.props.clicked(this.props.task)}>   
                <h3>{this.props.task.title}</h3>
                <p>{this.props.task.description}</p>
            </div>
        )
    }
    
    
    }
    
    export default ListItem;