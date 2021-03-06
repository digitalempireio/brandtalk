import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['brand-search'],
  classNameBindings: ['searching'],
  searching: false,
  actions: {
    search: function(){

      if(this.get('searching') === false){
        this.set('searching', true);
      }

      this.sendAction('action', this.get('query'));
    }
  }
});
