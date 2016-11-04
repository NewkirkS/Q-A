import Ember from 'ember';

export function pluralization(params) {
  var question = params[0];
  if (question.get('answers').get('length') === 1) {
    return "Answer";
  } else {
    return "Answers";
  }
}

export default Ember.Helper.helper(pluralization);
