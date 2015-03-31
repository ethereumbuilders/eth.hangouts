Template[getTemplate('coCreators')].helpers({
  settings: function() {
    return {
      collection: 'coCreators',
      rowsPerPage: 25,
      showFilter: true,
      fields: [
        { key: 'avatar', label: '', tmpl: Template.users_list_avatar, sortable: false },
        { key: 'username', label: 'Name', tmpl: Template.users_list_username },
        { key: 'karma', label: 'Proto Reputation Index', fn: function(val){return Math.round(100*val)/100}, sort: 'descending' },
        { key: 'postCount', label: '# Sessions Created' },
        { key: 'votes.upvotedPosts.length', label: 'Sessions Joined' },
        { key: 'commentCount', label: 'Comments' },
        { key: 'createdAt', label: 'Member Since', tmpl: Template.users_list_created_at, }
      ]
    };
  }
});