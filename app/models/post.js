(function(){

  App.PostModel = Ember.Object.extend({
    text: DS.attr('string'),
    date: DS.attr('string')
  });

}());
