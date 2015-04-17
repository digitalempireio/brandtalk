(function(){

  'use strict';

  App.SearchController = Ember.Controller.extend({
    query: '',
    happy: [],
    sad: [],
    actions: {
      search: function(){
        
        var that = this;

        $.ajax({
          url: 'http://localhost:3000/search/' + encodeURIComponent(this.get('query')) + '/positive',
          success: function(res){
            that.set('happy', res);
          }
        });

        $.ajax({
          url: 'http://localhost:3000/search/' + encodeURIComponent(this.get('query')) + '/negative',
          success: function(res){
            that.set('sad', res);
          }
        });

      }
    }
  });

}());
