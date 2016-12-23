import Ember from 'ember';
import PostContentMixin from '../mixins/post-content-mixin';

export default Ember.View.extend(PostContentMixin, {
  didInsertElement() {
    Ember.$('#content').animate({
      scrollTop: 0
    }, 500, 'easeInOutQuad');

    this._super();
  }
});
