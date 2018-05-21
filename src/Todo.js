import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
class Todo extends Component {
    constructor(props){
      super(props)
    }


render() {
    return (
      <div>
       <li>{this.props.data}  <RaisedButton label="Update" name="update" value="Update" onClick={this.props.updateTask} primary={true} type='submit' /> <RaisedButton label="Delete" type="submit" onClick={this.props.removeTodo} secondary={true}/></li> 
      </div>
    );
}
}
export default Todo