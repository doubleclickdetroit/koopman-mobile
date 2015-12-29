import Ember from 'ember';
import ContentMixin from '../mixins/content';

export default Ember.View.extend(ContentMixin, {

  claim: Ember.computed.alias( 'controller.model.claim' ),

  didInsertElement() {
    $(window).resize( () => this.align_cover_elements() );
  },

  modelIsPendingDidChange: Ember.observer('claim.isPending', function() {
    return false;
    let isPending = this.get( 'claim.isPending' );
    if ( !isPending ) {
      Ember.run.scheduleOnce( 'afterRender', this, 'align_cover_elements' );
    }
  })

});
