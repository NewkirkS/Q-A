import DS from 'ember-data';

export default DS.Model.extend({
  answerauthor: DS.attr(),
  answerdate: DS.attr(),
  content: DS.attr(),
  score: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
