import Backbone from 'backbone';

import TodosCollection from './todos_collection';

import homeTemplate from './views/home';
import todosTemplate from './views/todos';

let Router = Backbone.Router.extend({

  routes: {
    ""      : "home",
    "todos" : "showTodos",
    "todos/:id" : "showIndivualTodo",
    "about" : "showAbout"
  },

  initialize: function(appElement) {
    this.$el = appElement;

    this.todos = new TodosCollection();
  },

  home: function() {
    console.log('show home page');
    this.$el.html( homeTemplate() );
  },

  showSpinner: function() {
    this.$el.html(
      '<i class="fa fa-spinner fa-spin"></i>'
    );
  },

  showIndivualTodo: function(todoId) {
    console.log('should show', todoId);
  },

  showTodos: function() {
    console.log('show todos page');
    
    this.showSpinner();

    var router = this;

    this.todos.fetch().then(function(){

      router.$el.html( todosTemplate(router.todos.toJSON()) );

    });

  },

  showAbout: function() {
    console.log('show about page');
  },

  start: function() {
    Backbone.history.start();
  }

});

export default Router;
