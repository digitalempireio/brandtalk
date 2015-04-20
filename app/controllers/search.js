(function(){

  'use strict';

  App.SearchController = Ember.ArrayController.extend({
    query: '',
    happyTweets: [],
    sadTweets: [],
    actions: {
      search: function(){

        this.set('happyTweets', []);
        this.set('sadTweets', []);
        this.set('lastQuery', this.get('query'));

        var that = this;

        // Request happy tweets
        $.ajax({
          url: 'http://brandtalk.herokuapp.com/search/' + encodeURIComponent(this.get('query')) + '/positive',
          jsonp: 'callback',
          success: function(tweets){
            that.set('happyTweets', tweets);
          }
        });

        // .. and sad tweets.
        $.ajax({
          url: 'http://brandtalk.herokuapp.com/search/' + encodeURIComponent(this.get('query')) + '/negative',
          jsonp: 'callback',
          success: function(tweets){
            that.set('sadTweets', tweets);
          }
        });

      }
    }
  });

}());
