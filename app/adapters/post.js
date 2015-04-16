(function(){

  'use strict';

  App.PostAdapter = DS.RESTAdapter.extend({
    namespace: '1.1/search/tweets.json',
    hostName: 'https://api.twitter.com'
  });

}());
