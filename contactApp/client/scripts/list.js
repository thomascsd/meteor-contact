'use strict';

Meteor.subscribe('contactList');

function getUpdateMode(currentId) {
    var updateMode = Session.get('updateMode') || false;
    var selectedId = Session.get('selectedId');

    if (currentId === selectedId) {
        return updateMode;
    }

    return false;
}


Template.list.helpers({
    contacts: function() {
        var text = Session.get('searchText');

        if (text) {
            return Contacts.find({
                name: text
            });
        } else {
            return Contacts.find();
        }


    },
    showList: function() {
        var updateMode = getUpdateMode(this._id); //Session.get('updateMode') || false;
        return updateMode ? 'none' : 'block';
    },
    showEditor: function() {
        var updateMode = getUpdateMode(this._id); //Session.get('updateMode') || false;
        return updateMode ? 'block' : 'none';
    }
});

Template.list.events({
    'click .contactModiy': function(e) {
        e.preventDefault();
        Session.set('updateMode', true);
        Session.set('selectedId', this._id);
    },
    'click .contactCancel': function(e) {
        e.preventDefault();
        Session.set('updateMode', false);
        Session.set('selectedId', null);
    },
    'click .update': function(e) {
        var $container = $(e.target).parents('.editor');
        e.preventDefault();

        Meteor.call('updateContact', {
            id: this._id,
            name: $container.find('.contactName').val(),
            email: $container.find('.email').val(),
            age: $container.find('.age').val()
        });

    }

});
