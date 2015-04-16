(function(){

  'use strict';

  App.SearchController = Ember.Controller.extend({
    query: '',
    results: [],
    actions: {
      search: function(){
        console.log(this.get('query'));

        var that = this;

        $.ajax({
          url: 'http://localhost:3000/search/' + this.get('query'),
          success: function(res){
            that.set('results', res.statuses);
          }
        });

        this.set('query');
      }
    }
  });

}());
