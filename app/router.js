import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('search');
  this.route('search', { path: '/' });
  this.route('movie', { path: '/movie/:movie_id' });
  this.route('page-not-found', { path: '/*wildcard' });
});

export default Router;
