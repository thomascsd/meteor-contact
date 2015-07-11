'use strict';

Template.addContact.events({
  'submit #formAdd': function(e) {
    e.preventDefault();

    var name = $('#contactName').val();
    var email = $('#email').val();
    var age = $('#age').val();

    Meteor.call('insertContact', {
      name: name,
      email: email,
      age: age
    });
  }
});
