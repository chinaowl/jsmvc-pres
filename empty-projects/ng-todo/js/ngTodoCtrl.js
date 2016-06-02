ngTodo.controller('NgTodoCtrl', function NgTodoCtrl($scope) {
  $scope.todos = [
    {
      val: "Laundry",
      completed: false
    }, {
      val: "Dishes",
      completed: true
    }, {
      val: "Sleep",
      completed: false
    }, {
      val: "Walk the dog",
      completed: true
    }, {
      val: "Read a book",
      completed: false
    }
  ];

  $scope.addNewTask = function() {
    $scope.todos.unshift({
      val: $scope.newTask,
      completed: false
    });

    $scope.newTask = '';
  };
  
  $scope.removeTask = function(index) {
    $scope.todos.splice(index, 1);
  };

  $scope.clearCompleted = function() {
    $scope.todos = $scope.todos.filter(function(todo) {
      return !todo.completed;
    });
  };
});