import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';


export default Ember.Route.extend(ApplicationRouteMixin, {
  model() {
    return Ember.RSVP.hash({});
  },

  actions: {
    loadinga: function() {
      var view = this.container.lookup( 'view:loading' ).append();
      this.router.one( 'didTransition', view, 'destroy' );
    },

    sessionAuthenticationSucceeded: function() {
      var previousTransitionData = this.controller.get( 'model.previousRouteBeforeLogin' ),
          hasConfirmedProfile = this.session.get( 'profile.has_confirmed_linked_account' );

      // just signed-in, reload the model
      this.refresh();

      // has the user already confirmed their profile?
      if ( hasConfirmedProfile ) {
        // were they directed to auth from a previous page in the app?
        // if so, take them back there with data, or without
        if ( previousTransitionData && previousTransitionData.model ) {
          this.transitionTo( previousTransitionData.route, previousTransitionData.model );
        }
        else if ( previousTransitionData ) {
          this.transitionTo( previousTransitionData.route );
        }

        // the user hasn't already confirmed their profile
        // land them on the dashboard
        else {
          // now transition to index
          this.transitionTo( 'index' );
        }

        // reset the var that keeps track of previous route data
        // before having to auth
        this.controller.set( 'model.previousRouteBeforeLogin', null );
      }
      else {
        this.transitionTo( 'settings' );
      }
    },

    sessionInvalidationSucceeded: function() {
      // just signed-out, reload the model
      this.refresh();

      // unload all user models
      this.store.unloadAll( 'claim' );
      this.store.unloadAll( 'deal' );
      this.store.unloadAll( 'favorite' );
      this.store.unloadAll( 'product' );
      this.store.unloadAll( 'profile' );
      this.store.unloadAll( 'membership' );

      // clear ghost membership
      this.ghostMembershipService.removeMembership();

      // now transition to index
      this.transitionTo( 'index' );
    },

    showModal(name) {
      this.render(name, {
        into  : 'application',
        outlet: 'modal'
      });
    },

    removeModal() {
      this.disconnectOutlet({
        outlet    : 'modal',
        parentView: 'application'
      });
    },

    showBottomPanel(name) {
      this.render(name, {
        into:   'application',
        outlet: 'bottomPanel'
      });
    },

    removeBottomPanel() {
      this.disconnectOutlet({
        outlet:     'bottomPanel',
        parentView: 'application'
      });
    }
  }
});
