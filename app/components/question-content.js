import Ember from 'ember';

export default Ember.Component.extend({
  updateActive: false,
  actions: {
    showUpdateForm(){
      this.set("updateActive", true);
    },
    updateQuestion(params, question) {
      this.sendAction("updateQuestion", params, question);
      this.set("updateActive", false);
    }
  }
});
