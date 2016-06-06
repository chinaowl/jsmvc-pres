window.TodoView = Backbone.View.extend({
  template: _.template('<span class="input-group-addon"><input <%= completed ? "checked=checked" : "" %> type="checkbox"></span><input value="<%= val %>" class="form-control<%= completed ? " finished" : "" %>" type="text"><span class="input-group-btn"><button class="btn btn-danger" type="button"><i class="glyphicon glyphicon-remove"></i></button></span>'),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  className: 'input-group input-group-lg'
});

window.TodosView = Backbone.View.extend({
  initialize: function () {
    this.collection.on('add', this.addOne, this);
    this.collection.on('reset', this.addAll, this);
    this.collection.on('destroy', this.render, this);
  },

  addOne: function (todoItem) {
    var todoView = new TodoView({model: todoItem});
    this.$el.append(todoView.render().el);
  },

  addAll: function () {
    this.$el.empty();
    this.collecton.forEach(this.addOne, this);
  },

  render: function () {
    this.addAll();
    return this;
  }
});