(function(){

  'use strict';

  App.SearchController = Ember.Controller.extend({
    query: '',
    actions: {
      search: function(){
        console.log(this.get('query'));
        this.set('query');
      }
    }
  });

}());
