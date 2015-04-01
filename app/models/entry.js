import DS from 'ember-data';

export default DS.Model.extend({
  products: DS.hasMany( 'product' ),
  favorite: DS.belongsTo( 'favorite' ),

  date   : DS.attr( 'date' ),
  link   : DS.attr(),
  title  : DS.attr(),
  content: DS.attr(),

  day: function() {
    var date = this.get( 'date' );
    return this.moment( date ).format( 'DD' );
  }.property( 'date' )
});
