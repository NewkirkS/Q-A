import Ember from 'ember';

export default Ember.Service.extend({
  sessionAnswers: 0,
  sessionQuestions: 0,
  activityScore: Ember.computed('sessionAnswers', 'sessionQuestions', function(){
    var totalScore = this.get('sessionAnswers') + this.get('sessionQuestions');
    return totalScore;
  }),
  incrementAnswers(){
    this.incrementProperty('sessionAnswers');
  },
  incrementQuestions(){
    this.incrementProperty('sessionQuestions');
  }
});
