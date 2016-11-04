import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
      var params = {
        answerauthor: this.get('answerauthor'),
        answerdate: this.get('answerdate'),
        content: this.get('content'),
        question: this.get('question')
      };
      if(params.answerauthor === undefined || params.answerdate === undefined || params.content === undefined) {
        alert("Please fill out all fields. (Hi Perry)");
      } else {
        this.sendAction('saveAnswer', params);
        this.set('answerauthor', undefined);
        this.set('answerdate', undefined);
        this.set('content', undefined);
      }
    }
  }
});
