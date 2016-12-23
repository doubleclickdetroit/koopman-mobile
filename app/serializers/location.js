import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  extractArray: function(store, type, payload) {
    payload = {
      locations: payload
    };

    return this._super( store, type, payload );
  },

  normalizeHash: {
    locations: function(hash) {
      hash.isNewLocation = hash.acf_is_new_location;
      delete hash.acf_is_new_location;

      hash.address = hash.acf_address;
      delete hash.acf_address;

      hash.phone = hash.acf_phone;
      delete hash.acf_phone;

      hash.fax = hash.acf_fax;
      delete hash.acf_fax;

      hash.generalManager = hash.acf_general_manager;
      delete hash.acf_general_manager;

      hash.scheduleCollection = hash.acf_schedule_collection;
      delete hash.acf_schedule_collection;
    }
  }
});
