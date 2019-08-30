import React from 'react'
import ListItem from "./ListItem"

class List extends React.Component {

    render(){
    let listArray = this.props.list.map(listItem => { return <ListItem key={"Task-"+listItem.id} task={listItem} clicked={this.props.clicked}/>})
    return(
        <div id="list">
            <div className="header">
                <h1>List</h1>
            </div>
                {listArray}
        </div>
    )
}


}

export default List;