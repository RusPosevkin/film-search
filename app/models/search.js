import DS from 'ember-data';

export default DS.Model.extend({
  imagource: DS.attr(),
  search: DS.attr(),
  image: DS.attr('string'),
  title: DS.attr('string'),
  year: DS.attr('string')
});
