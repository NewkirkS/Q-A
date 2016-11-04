import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateQuestion(question) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        date: this.get('date'),
        detail: this.get('detail')
      };
      this.sendAction('updateQuestion', params, question);
      this.set('title', '');
      this.set('author', '');
      this.set('date', '');
      this.set('detail', '');
    }
  }
});
