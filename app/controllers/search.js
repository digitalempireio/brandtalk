(function(){

  'use strict';

  App.SearchController = Ember.ArrayController.extend({
    query: '',
    tweets: [],
    happyTweets: function(){

      return this.filter(function(tweet){
        return tweet.isSad === false;
      });

    }.property('tweets'),
    sadTweets: function(){

      return this.filter(function(tweet){
        return tweet.isSad === true;
      });

    }.property('tweets'),
    lastTweet: 0,
    actions: {
      search: function(){

        this.set('model', []);
        this.set('tweets', []);
        this.set('lastQuery', this.get('query'));

        var that = this;
        $.ajax({
          url: 'http://brandtalk.herokuapp.com/search/' + encodeURIComponent(this.get('query')),
          jsonp: 'callback',
          success: function(tweets){
            that.set('model', tweets);
            that.set('tweets', tweets);
          }
        });

      }
    }
  });

}());
