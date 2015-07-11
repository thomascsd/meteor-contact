'use strict';

Meteor.publish('contactList', function() {
  return Meteor.Contact.find({});
});

Meteor.methods({
  'insertContact': function(contact) {
    Meteor.Contact.insert({
      name: contact.name,
      email: contact.email,
      age: contact.age
    });
  }
});
