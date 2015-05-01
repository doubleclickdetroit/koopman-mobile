import DS from 'ember-data';

export default DS.Model.extend({
  tools   : DS.hasMany( 'tool' ),
  favorite: DS.belongsTo( 'favorite' ),

  date    : DS.attr( 'date' ),
  link    : DS.attr(),
  title   : DS.attr(),
  content : DS.attr(),
  image   : DS.attr(),
  excerpt : DS.attr(),

  day: function() {
    var date = this.get( 'date' );
    return this.moment( date ).format( 'DD' );
  }.property( 'date' ),

  month: function() {
    var date = this.get( 'date' );
    return this.moment( date ).format( 'M' );
  }.property( 'date' )
});
