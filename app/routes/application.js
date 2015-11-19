import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';


export default Ember.Route.extend(ApplicationRouteMixin, {
  model: function() {
    var entries, projects, store = this.store;

    function fetchResource(resourceName) {
      return store.find( resourceName ).catch( handleFailFn );
    }
    function handleFailFn() {
      return [];
    }

    entries  = store.all( 'entry' );
    if ( entries.get('length') < 1 ) {
      entries = fetchResource( 'entry' );
    }

    projects = store.all( 'project' );
    if ( projects.get('length') < 1 ) {
      projects = fetchResource( 'project' );
    }

    return Ember.RSVP.hash({
      membership: fetchResource( 'membership' ),
      products  : fetchResource( 'product' ),
      favorites : fetchResource( 'favorite' ),
      entries   : entries,
      projects  : projects,
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
      this.store.unloadAll( 'favorite' );
      this.store.unloadAll( 'product' );
      this.store.unloadAll( 'profile' );
      this.store.unloadAll( 'membership' );

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
