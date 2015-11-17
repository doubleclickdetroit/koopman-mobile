import Ember from 'ember';
import SidebarMixin from '../mixins/sidebar';
import MobileMixin from '../mixins/mobile';
import ContentMixin from '../mixins/content';

export default Ember.View.extend(SidebarMixin, MobileMixin, ContentMixin, {

  didInsertElement() {
    this.initSideBar();
    this.initMobile();
    this.initContent();
  }

});
