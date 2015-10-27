import Backbone from 'Backbone';

let TodoModel = Backbone.Model.extend({

  urlRoot: 'https://api.parse.com/1/classes/Todo',

  idAttribute: 'objectId'

});

export default TodoModel;
