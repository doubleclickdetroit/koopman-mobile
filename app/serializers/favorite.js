import DS from 'ember-data';

export default DS.ActiveModelSerializer.extend({
  typeForRoot: function(root) {
    return this._super( 'favorite' );
  },
  serializeIntoHash: function(hash, type, record, options) {
    hash[ 'post' ] = this.serialize( record, options );
  }
});
