import React from 'react';
import '../css/style.css';

export default class fdemo extends React.Component {
  getInialState(){
    return{
      username:'',
      gender:'man',
      checked:true
    }
  }

  handleChange(name,event){
    var newState = {};
    newState[name]=name=="checked"?event.target.checked:event.target.value;
    this.setState(newState);
    console.log(newState);
  }

  // submitHandle(e){
  //   e.preventDefault();
  //   var is = this.state.checked?'是':'不是';
  //   var gender= this.state.gender == "man" ? "帅哥":"美女";
  //   alert(this.state.username+ is + gender +'.' );
  // }
  render() {
    return (
      <form>
        <label htmlFor="username">请输入姓名</label>
        <input type="text" name="username" id="username" onChange={this.handleChange.bind(this,"username")} value={this.state.username} />
        <br/>

        <label htmlFor="checkbox">是或否</label>
        <input type="checkbox" name="checked" id="checkbox" onChange={this.handleChange.bind(this,"checked")} checked={this.state.checked}/>
        <br/>

        <label htmlFor="username">请选择：</label>
        <select name="gender" value={this.state.gender} onChange={this.handleChange.bind(this,"gender")} value={this.state.gender}>
          <option value="man">帅哥</option>
          <option value="woman">美女</option>
        </select>
        <br/>
        <button>提交</button>
      </form>
    );
  }
}