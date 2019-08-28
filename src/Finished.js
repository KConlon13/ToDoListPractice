import React from 'react'
import ListItem from "./ListItem"

class Finished extends React.Component {

    render(){
    let listArray = this.props.list.map(listItem => { return <ListItem key={"Task-"+listItem.id} task={listItem} clicked={this.props.clicked}/>})
    return(
        <div>
            <h1>Finished List:</h1>
            {listArray}
        </div>
    )
}


}

export default Finished;