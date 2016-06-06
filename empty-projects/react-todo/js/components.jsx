/** @jsx React.DOM */

var app = app || {};
app.components = app.components || {};

(function () {
  'use strict';

  var TodoApp = app.components.TodoApp = React.createClass({
  	getInitialState: function () {
  	  return {
  		todos: []
  	  };
  	},

  	componentDidMount: function () { // component is on the page
  	  var data = app.retrieveData();
  	  this.setState({todos: data});
  	  console.log(this.state);
  	},

  	render: function () {
  	  return (
  	  	<div className="outer-container">
  	  	  <NewTodo />
  	  	  <TodoList todos={this.state.todos} />
  	  	  <ClearCompleted />
  	  	</div>
  	  );
  	}
  });

  var NewTodo = app.components.NewTodo = React.createClass({
  	render: function () {
  	  return (
  	  	<h1>new todo</h1>
  	  );
  	}
  });

  var TodoList = app.components.TodoList = React.createClass({
	render: function () {
  	  return (
  	  	<div className="todos">
  	  	  {this.props.todos.map(function (el, index) {
  	  	  	return (
  	  	  	  <TodoItem todo={el} index={index} />
  	  	  	);
  	  	  })}
  	  	</div>
  	  );
  	}
  });

  var TodoItem = app.components.TodoItem = React.createClass({
  	render: function () {
  	  var inputClassName = 'form-control';
  	  if (this.props.todo.completed) {
  	  	inputClassName += ' finished';
  	  }

  	  return (
  	  	<div className="input-group input-group-lg">
  	  	  <span className="input-group-addon">
  	  	    <input checked={this.props.todo.completed} type="checkbox" />
  	  	  </span>
  	  	  <input type="text" value={this.props.todo.val} className={inputClassName} />
  	  	  <span className="input-group-btn">
  	  	    <button className="btn btn-danger" type="button">
  	  	      <i className="glyphicon glyphicon-remove"></i>
  	  	    </button>
  	  	  </span>
  	  	</div>
  	  );
  	}
  })

  var ClearCompleted = app.components.ClearCompleted = React.createClass({
	render: function () {
  	  return (
  	  	<h1>clear completed</h1>
  	  );
  	}
  });
})();