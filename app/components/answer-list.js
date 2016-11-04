import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer(params) {
      this.sendAction("saveAnswer", params);
    },
    increaseScore(answer) {
      this.sendAction("increaseScore", answer);
    },
    decreaseScore(answer) {
      this.sendAction("decreaseScore", answer);
    }
  }
});
