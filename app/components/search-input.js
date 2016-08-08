import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    // update text in search input by url query parameter
    var query = this._targetObject.model['query'];
    this.$('.search-input__input').attr('value', query);
  },
  actions: {
    handleSearch() {
      // ok, it's hack
      this.$('a').click();
      // this.sendAction('handleSearch', this.get('query'));
    }
  }
});
