import Ember from 'ember';

export default Ember.Controller.extend({

  fullName: function() {
    var firstName = this.get( 'session.profile.first_name' ),
        lastName  = this.get( 'session.profile.last_name' );

    if ( !!firstName && !!lastName ) {
      return firstName +' '+ lastName;
    }

    return false;
  }.property( 'session.profile.first_name', 'session.profile.last_name' )

});
