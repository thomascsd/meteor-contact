'use strict';

Template.search.events({
    'keyup #searchText': function(e) {
        Session.set('searchText', $(e.target).val());
    }
});
