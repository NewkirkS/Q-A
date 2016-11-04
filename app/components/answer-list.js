import Ember from 'ember';

export default Ember.Component.extend({
  answerLogger: Ember.inject.service(),
  sortBy: ['score:desc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),
  actions: {
    saveAnswer(params) {
      this.sendAction("saveAnswer", params);
      this.get('answerLogger').incrementAnswers();
    },
    increaseScore(answer) {
      this.sendAction("increaseScore", answer);
    },
    decreaseScore(answer) {
      this.sendAction("decreaseScore", answer);
    }
  }
});
