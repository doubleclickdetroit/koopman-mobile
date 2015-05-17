import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  host: 'http://localhost:3000',

  buildURL: function(type, id, record) {
    return this.host + '/' + type + '.json';
    return this._super( type, id, record ) + '.json';
  },

  pathForType: function(typeKey) {
    return typeKey;
  },

  /*
  createRecord: function(store, type, record) {
    var json, data = {};
    var serializer = store.serializerFor( type.typeKey );


    json = record.toJSON();
    data.user    = _.pick( json, 'email' );
    data.profile = _.omit( json, 'email' );
    debugger;
    //serializer.serializeIntoHash(data, type, record, { includeId: true });


    //return this.ajax(this.buildURL(type.typeKey), "POST", { data: data });
    return this.ajax( this.buildURL(type.typeKey), "PUT", { data: data } );
  },

  updateRecord: function(store, type, record) {
    var data = {};
    var serializer = store.serializerFor(type.typeKey);

    serializer.serializeIntoHash(data, type, record);

    var id = get(record, 'id');
    // you could do the same here, but it's even more incorrect
    return this.ajax(this.buildURL(type.typeKey, id), "PUT", { data: data });
  }
  */
});
