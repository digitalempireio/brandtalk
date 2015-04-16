(function(){

  'use strict';

  App.Router.reopen({
    //location: 'history'
  });

  App.Router.map(function(){
    this.route('intro', { path: '/'} );
    this.route('search');
  });

}());
