(function(){

  'use strict';

  App.SearchController = Ember.ArrayController.extend({
    query: '',
    socket: io('http://localhost:3000'),
    happyTweets: function(){

      return this.filter(function(tweet){
        return tweet.isSad === false;
      });

    }.property('lastTweet'),
    sadTweets: function(){

      return this.filter(function(tweet){
        return tweet.isSad === true;
      });

    }.property('lastTweet'),
    lastTweet: 0,
    actions: {
      search: function(){

        this.set('model', []);

        this.get('socket').emit('search', this.get('query'));

        var that = this;
        this.get('socket').on('tweet', function(tweet){
          console.log(tweet.text);
          that.set('lastTweet', tweet);
          that.insertAt(0, tweet);
        });

      }
    }
  });

}());
