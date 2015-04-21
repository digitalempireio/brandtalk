import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['tweet-item'],
  classNameBindings: ['new'],
  new: true,
  unNew: function(){

    // Delay removing the 'new' class in order to allow a CSS transition.
    var that = this;
    setTimeout(function(){
      that.set('new', false);
    }, 1);

  }.on('didInsertElement')
});
