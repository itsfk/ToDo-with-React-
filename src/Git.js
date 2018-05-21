import React,{Component } from 'react';


class Git extends Component{
    render() { 
        return (  
       <div>{this.props.match.params.id}</div>
        );
    }
}
 
export default Git;