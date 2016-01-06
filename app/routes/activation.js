import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    let user = Ember.Object.create({
      firstName: "",
      lastName:  "",
      email:     "",
      street:    "",
      tel:       "",
      city:      "",
      state:     "",
      zipcode:   ""
    });

    return user;
  },

  afterModel(model, transition) {
    let profile = this.store.all( 'profile' ).get( 'firstObject' );

    if ( profile ) {
      model.setProperties( profile.toJSON() );
    }

    return this.store.find( 'profile' ).then(profiles => {
      let profile = profiles.get( 'firstObject' );
      model.setProperties( profile.toJSON() );
    });
  }

});
