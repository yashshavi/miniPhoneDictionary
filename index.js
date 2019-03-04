import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class App extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      contact:'',
	  phoneno:''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target=event.target;
	const name=target.name;
	const value = target.value;
	var partialState = {};
partialState[name] = value;
this.setState(partialState);
  }

  handleSubmit(event) {
  var node = document.createElement("TR");
  var tnode1 = document.createElement("TD");
  var textnode1 = document.createTextNode("this.state.contact");

  
  tnode1.appendChild(textnode1);
  node.appendChild(tnode1);
  var tnode2 = document.createElement("TD");
  
  var textnode2 = document.createTextNode("this.state.phoneno");
  tnode2.appendChild(textnode2)
  node.appendChild(tnode2);
  var tnode3 = document.createElement("TD");
   var element = document.createElement("input");
  //Assign different attributes to the element. 
  element.type = type;
  element.value = type; 
  element.name = type; 
  element.onclick = function() { // Note this is a function
    document.getElementById("myList").removeChild((element.parentNode).parentNode);
  };
   tnode3.appendChild(element);
    node.appendChild(tnode3);
  document.getElementById("myList").appendChild(node);
    
	}

  render() {
    return (
	 <div class="App">
	 <div id="header" class="container-fluid" >
						<h1 >Phone Directory</h1> 
     </div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            name="contact"
            type="text"
            value={this.state.contact}
            onChange={this.handleInputChange} />
        </label>
      
        <label>
          Phone no:
          <input
            name="phoneno"
            type="text"
            value={this.state.phoneno}
            onChange={this.handleInputChange} />
        </label>
		<input type="submit" value="Submit" />
      </form>
	  
	  <table id="myList" class="table table-striped table-hover">
	  <tbody>
	  <th><td>Name</td><td>contacts</td></th>
	  <tr><td > </td><td ></td><td></td></tr>
	  <tr><td>ambulance</td><td>100</td><td></td></tr>
	  <tr><td > </td><td></td><td></td></tr>
	  </tbody>
	  </table>
       </div>	  
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
