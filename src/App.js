import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from'./firstComponent'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      
      items:[],
      input:'',
      isOn: false
    }
  }

  toggle = () =>{
    this.setState({isOn: !this.state.isOn})
    console.log(this.state.isOn)
  }
  inputUpdate = (event)=>{
    this.setState({input: event.target.value})
  }
  
  formSubmit = (event) =>{
    event.preventDefault()
    
    this.setState({
      items: [...this.state.items, this.state.input],
      input:''
    })
  }
  deleteItem = (i) =>{
    let todoList = this.state.items;
    todoList.splice(i, 1)
    this.setState({
      items: todoList
    })
  }
  render(){
  
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={this.formSubmit}>
          <input value={this.state.input} onChange={this.inputUpdate}/>
        <button onClick={this.toggle}>{`${this.state.isOn}`}</button>
        </form>
          <h1>To Do:</h1>
        <FirstComponent deleteItem={this.deleteItem} items={this.state.items}/>
      </header>
    </div>
  );
}
}
export default App;
