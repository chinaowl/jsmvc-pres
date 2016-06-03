Todos.TodoController = Ember.ObjectController.extend({
  actions: {
    removeTodo: function () {
      var todo = this.get('model');
      todo.deleteRecord();
      todo.save();
    }
  }
});

Todos.TodosController = Ember.ArrayController.extend({
  actions: {
    createNewTodo: function () {
      var newVal = this.get('newTodo');
      var todo = this.store.createRecord('todo', {
        val: newVal,
        completed: false
      });
      this.set('newTodo', '');
      todo.save();
    },

    clearCompleted: function () {
      var completed = this.filterBy('completed', true); // cannot use native JS functions, use Ember built-in functions instead
      completed.invoke('deleteRecord'); // invoke calls a function on each element
      completed.invoke('save');
    }
  }
});