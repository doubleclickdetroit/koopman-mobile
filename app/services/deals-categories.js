import Ember from 'ember';

export default Ember.Object.extend({
  categories: [
    Ember.Object.create({
      id: 'all',
      label: 'All Deals',
      isSelected: true
    }),

    Ember.Object.create({
      id: 'advantage',
      label: 'Advantage Deals',
      isSelected: false
    })
  ]
});
