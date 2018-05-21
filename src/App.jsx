import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Menu from 'material-ui/Menu';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
class App extends Component {
   constructor(props){
     super(props)
     this.state={
      inputs:'',
      todo:[]  
    } 
   }

   onChangeHandler = (ev) => {
    this.setState({inputs: ev.target.value});    
}
submitHandler = (ev) => {
  ev.preventDefault();
  this.setState({todo: [...this.state.todo,this.state.inputs],inputs:''});

}
updateTask = (data, indx) => {
  let tempVar = this.state.todo;
  let newValue = prompt('Enter updated Value: ', data);
  if (newValue) {
      tempVar[indx] = newValue;
      this.setState({
          todo: tempVar
      });
  }
}
removeTodo=(id)=>{
  let data  = this.state.todo;
  data.splice(id, 1);
    this.setState({todo: data});
}
  
render() {
  // const styles={
  //   button:{
  //     background:"yellow"
  //   }
  // }
  return (
     <div>
        <MuiThemeProvider>
       
  
          <AppBar
    title="To Do Application"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
      <form onSubmit={this.submitHandler}>
        <div>
        <TextField className="text" hintText="Enter Task" type="text" name="task" value={this.state.inputs} onChange={this.onChangeHandler}/>
         
        </div>
        <div>
        <RaisedButton Style={{backgroundColor:"Blue"}} label="Add" type='submit' />
        </div>
      </form>
      <ul>
      {this.state.todo.map((value, i) => {
        return <Todo data={value}  removeTodo={()=>this.removeTodo(i)} updateTask={()=>this.updateTask(value,i)} />})}
        </ul>
        </MuiThemeProvider>
  </div>
  );
}
}

export default App;
