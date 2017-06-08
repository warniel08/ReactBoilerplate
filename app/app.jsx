var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
	name: 'Warner',
	location: 'Here'
};

var objTwo = {
	age: 34,
	...objOne
};

console.log(objTwo);

ReactDOM.render(
  <h1>Boilerplate app!</h1>,
  document.getElementById('app')
);