'use strict';

Meteor.subscribe('contactList');

Template.list.helpers({
    contacts: function() {
        return Contacts.find();
    },
    showList: function() {
        var updateMode = Session.get('updateMode') || false;
        return updateMode ? 'itemDisable' : 'itemVisible';
    },
    showEditor: function() {
        var updateMode = Session.get('updateMode') || false;
        return updateMode ? 'itemVisible' : 'itemDisable';
    }
});

Template.list.events({
    'click .contactModiy': function(e) {
        e.preventDefault();

        Session.set('updateMode', true);
    },
    'click .update': function(e) {
        var $container = $(this).parents('.editor');

        e.preventDefault();

        Meteor.call('updateContact', {
            id: $container.data('oid'),
            name: $container.find('.contactName').val(),
            email: $container.find('.email').val(),
            age: $container.find('.age').val()
        });

    }
});