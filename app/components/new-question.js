import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        date: this.get('date'),
        detail: this.get('detail')
      };
      if(params.title === undefined || params.author === undefined || params.date === undefined || params.detail === undefined) {
        alert("Please fill out all fields. (Hi Perry)");
      } else {
        this.sendAction('saveQuestion', params);
        this.set('title', undefined);
        this.set('author', undefined);
        this.set('date', undefined);
        this.set('detail', undefined);
      }
    }
  }
});
