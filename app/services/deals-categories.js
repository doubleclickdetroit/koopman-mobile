import Ember from 'ember';

export default Ember.Object.extend({
  categories: [
    Ember.Object.create({
      id: 'all',
      label: 'All Koopons',
      isSelected: true
    }),

    Ember.Object.create({
      id: 'advantage',
      label: 'Advantage Koopons',
      isSelected: false
    })
  ]
});
