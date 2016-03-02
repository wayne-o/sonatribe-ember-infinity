import Ember from 'ember';
import InfinityRoute from 'sonatribe-ember-infinity/mixins/route';

export default Ember.Route.extend(InfinityRoute, {
  model(params) {
    return this.infinityModel('post', { category: params.category,
                                        perPage: 2 });
  }
});
