AutoForm.hooks({
  submitPostForm: {

    before: {
<<<<<<< HEAD
      submitPost: function(doc) {
=======
      method: function(doc) {
>>>>>>> upstream/master

        this.template.$('button[type=submit]').addClass('loading');

        var post = doc;

        // ------------------------------ Checks ------------------------------ //

        if (!Meteor.user()) {
          Messages.flash(i18n.t('you_must_be_logged_in'), 'error');
          return false;
        }

        // ------------------------------ Callbacks ------------------------------ //

        // run all post submit client callbacks on properties object successively
        post = postSubmitClientCallbacks.reduce(function(result, currentFunction) {
            return currentFunction(result);
        }, post);

        return post;
      }
    },

    onSuccess: function(operation, post) {
      this.template.$('button[type=submit]').removeClass('loading');
      trackEvent("new post", {'postId': post._id});
      Router.go('post_page', {_id: post._id});
      if (post.status === STATUS_PENDING) {
        Messages.flash(i18n.t('thanks_your_post_is_awaiting_approval'), 'success');
      }
    },

    onError: function(operation, error) {
      this.template.$('button[type=submit]').removeClass('loading');
<<<<<<< HEAD
      flashMessage(error.message.split('|')[0], 'error'); // workaround because error.details returns undefined
      clearSeenMessages();
=======
      Messages.flash(error.message.split('|')[0], 'error'); // workaround because error.details returns undefined
      Messages.clearSeen();
>>>>>>> upstream/master
      // $(e.target).removeClass('disabled');
      if (error.error == 603) {
        var dupePostId = error.reason.split('|')[1];
        Router.go('post_page', {_id: dupePostId});
      }
    }

  }
});
