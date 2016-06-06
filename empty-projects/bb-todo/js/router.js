window.TodoApp = new (Backbone.Router.extend({
  routes: {'': 'index'},

  initialize: function () {
    this.todoItems = new TodoItems();
    this.todosView = new TodosView({collection: this.todoItems});
    this.todosView.render();
  },

  index: function () {
    var fixtures = [
      {val: 'Shake it off', completed: true},
      {val: 'Get out of the woods', completed: false},
      {val: 'Welcome to New York', completed: true},
      {val: 'Clean', completed: false},
      {val: 'Dream wild', completed: false}
    ];

    $('#app').html(this.todosView.el);
    this.todoItems.reset(fixtures);
  },

  start: function () {
    Backbone.history.start();
  }
}));
