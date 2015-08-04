'use strict';

Meteor.publish('contactList', function() {
  return Contacts.find({});
});

Meteor.methods({
  'insertContact': function(contact) {
    Contacts.insert({
      name: contact.name,
      email: contact.email,
      age: contact.age
    });
  },
  'updateContact': function(contact) {
    Contacts.update(contact.id, {
        $set: {
          name: contact.name,
          email: contact.email,
          age: contact.age
        }
      });
    }
});
