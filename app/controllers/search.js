(function(){

  'use strict';

  App.SearchController = Ember.Controller.extend({
    query: '',
    results: [],
    actions: {
      search: function(){
        console.log(this.get('query'));

        this.set('results', [
          { content: 'meow '}
        ]);

        this.set('query');
      }
    }
  });

}());
