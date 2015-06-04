Template.list.helps({
    contacts: function() {
        return Meteor.Contact.find({});
    }
});