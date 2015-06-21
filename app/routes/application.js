import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';


export default Ember.Route.extend(ApplicationRouteMixin, {
  model: function() {
    var entries, projects;

    function handleFailFn() {
      return [];
    }

    entries  = this.store.all( 'entry' );
    if ( entries.get('length') < 1 ) {
      entries = this.store.find( 'entry' ).catch( handleFailFn );
    }

    projects = this.store.all( 'project' );
    if ( projects.get('length') < 1 ) {
      projects = this.store.find( 'project' ).catch( handleFailFn );
    }

    return Ember.RSVP.hash({
      products : this.store.find( 'product' ).catch( handleFailFn ),
      favorites: this.store.find( 'favorite' ).catch( handleFailFn ),
      entries  : entries,
      projects : projects
    });
  },

  afterModel: function(model) {
    var moment = this.moment;

    model.posts = Ember.ArrayProxy.create({
      content: Ember.A(_.union(
        model.entries.toArray(),
        model.projects.toArray()
      ))
    });

    model.entries = model.entries.filter(function(entry) {
      var date = moment( entry.get('date') );
      return date.diff( moment(), 'days' ) >= 0;
    }).sortBy( 'date' );

    // schedule modal-network-down modal if "network is down"
    if ( !model.entries.length && !model.projects.length ) {
      Ember.run.schedule('afterRender', this, function() {
        this.send( 'showModal', 'modal-network-down' );
      });
    }

    this._super( model );
  },

  actions: {
    loading: function() {
      var view = this.container.lookup( 'view:loading' ).append();
      this.router.one( 'didTransition', view, 'destroy' );
    },

    sessionAuthenticationSucceeded: function() {
      var previousTransitionData = this.controller.get( 'model.previousRouteBeforeLogin' ),
          hasConfirmedProfile = this.session.get( 'profile.has_confirmed_linked_account' );

      // just signed-in, reload the model
      this.refresh();

      if ( hasConfirmedProfile ) {
        if ( previousTransitionData && previousTransitionData.model ) {
          this.transitionTo( previousTransitionData.route, previousTransitionData.model );
        }
        else if ( previousTransitionData ) {
          this.transitionTo( previousTransitionData.route );
        }
        else {
          // now transition to index
          this.transitionTo( 'index' );
        }

        this.controller.set( 'model.previousRouteBeforeLogin', null );
      }
      else {
        this.transitionTo( 'settings' );
      }
    },

    sessionInvalidationSucceeded: function() {
      // just signed-out, reload the model
      this.refresh();

      // unload all favorites
      // there has to be a better way to do this!!
      this.store.unloadAll( 'favorite' );
      this.store.unloadAll( 'product' );
      this.store.unloadAll( 'profile' );

      // now transition to index
      this.transitionTo( 'index' );
    },

    showModal: function(name) {
      this.render(name, {
        into  : 'application',
        outlet: 'modal'
      });
    },

    removeModal: function() {
      this.disconnectOutlet({
        outlet    : 'modal',
        parentView: 'application'
      });
    }
  }
});
