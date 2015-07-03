'use strict';

Meteor.subscribe('contactList');

Template.list.helpers({
    contacts: function() {
        return Meteor.Contact.find();
    }
});