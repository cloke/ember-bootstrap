Ember.PillItem = Ember.View.extend({
  classNameBindings: 'isActive:active',
  template: Ember.Handlebars.compile('<a href="#">{{content}}</a>'),

  isActive: Ember.computed(function() {
    var selection = this.getPath('parentView.selection'),
        content = this.get('content');
    return selection === content;
  }).property('parentView.selection', 'content').cacheable(),

  click: function(event) {
    var content = this.get('content'),
        parentView = this.get('parentView');
    parentView.set('selection', content);
    return false;
  }
});