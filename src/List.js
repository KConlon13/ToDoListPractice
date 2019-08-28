import React from 'react'
import ListItem from "./ListItem"

class List extends React.Component {

    render(){
    let listArray = this.props.list.map(listItem => { return <ListItem key={"Task-"+listItem.id} task={listItem} clicked={this.props.clicked}/>})
    return(
        <div>
            <h1>List</h1>
            {listArray}
        </div>
    )
}


}

export default List;