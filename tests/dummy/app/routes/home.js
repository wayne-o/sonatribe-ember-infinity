import Ember from 'ember';
import InfinityRoute from 'sonatribe-ember-infinity/mixins/route';

export default Ember.Route.extend(InfinityRoute, {
  model: function() {
    return this.infinityModel('post');
  }
});