(function(){

  'use strict';

  App.SearchController = Ember.ArrayController.extend({
    query: '',
    happyTweets: function(){

      return this.filter(function(tweet){
        return tweet.isSad === false;
      });

    }.property('model'),
    sadTweets: function(){

      return this.filter(function(tweet){
        return tweet.isSad === true;
      });

    }.property('model'),
    lastTweet: 0,
    actions: {
      search: function(){

        this.set('model', []);

        var socket = io('http://localhost:3000');

        socket.emit('search', this.get('query'));

        var that = this;
        socket.on('tweet', function(tweet){
          that.set('lastTweet', tweet);
          that.insertAt(0, tweet);
        });

      }
    }
  });

}());
