import React from 'react';
import '../css/style.css';
export default class todolist extends React.Component {
  constructor(props){
    super(props);
    
  }
  render() {
    return (
      <div className="cen">
        <ul>{this.props.items.map(item => ( 
            <li key={item.id}>{item.text}</li> 
        ))}</ul>
      </div>
    );
  }
}