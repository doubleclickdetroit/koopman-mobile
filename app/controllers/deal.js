import Ember from 'ember';

export default Ember.Controller.extend({
  needs: 'application',

  queryParams: [ 'title', 'redirect' ],
  title   : '',
  redirect: '',

  redirectDidChange: Ember.observer('redirect', function() {
    let title      = this.get( 'title' );
    let routeName  = this.get( 'redirect' );
    let controller = this.get( 'controllers.application' );

    controller.setProperties({
      'model.title'    : title,
      'model.routeName': routeName
    });
  }),

  isElligible: Ember.computed('model.isMembersOnly', 'model.membership.isAdvantageMember', function() {
    let isMembersOnly     = this.get( 'model.isMembersOnly' );
    let isAdvantageMember = this.get( 'model.membership.isAdvantageMember' );
    return !isMembersOnly || isMembersOnly && isAdvantageMember;
  }),

  actions: {
    handleExpired() {
      this.set( 'hasExpired', true );
    }
  }
});
