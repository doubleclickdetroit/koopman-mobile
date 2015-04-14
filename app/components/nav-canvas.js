import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nav',

  didInsertElement: function() {
    this.$().mmenu({
       extensions: [
          "theme-dark"
       ],
       footer: {
          add  : true,
          title: "Copyright 2015"
       },
       header: {
          title : "Menu",
          add   : true,
          update: true
       }
    });
  }
});
