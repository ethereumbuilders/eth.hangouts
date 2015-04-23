Package.describe({
  summary: "CodeBuddies theme pages package",
  version: '0.1.0',
  name: "cb-theme-pages"
});

Package.onUse(function (api) {

  api.use([
    'telescope-lib', 
    'telescope-base',
    'iron:router'
  ], ['client', 'server']);

  api.use([
    'templating'
  ], ['client']);

  api.add_files([
    'lib/client/templates/about_page.html',
    'lib/client/templates/about_link.html',
    'lib/client/templates/co-creators.html',
    'lib/client/templates/plexus.html',
    'lib/client/templates/plexus.js',
    'lib/client/templates/plexus_link.html',
    'lib/client/templates/our_values.html',
    'lib/client/templates/values_link.html',
    'lib/client/templates/hero_page.html',
    'lib/client/templates/new_hero_page.js',
    'lib/client/templates/new_post_domain.html',
    'lib/client/templates/new_post_domain.js',
    'lib/client/templates/new_post_upvote.html',
    'lib/client/templates/new_post_upvote.js',
    'lib/client/templates/new_post_page.html',
    'lib/client/templates/new_post_page.js',
    'lib/client/templates/new_post_title.html',
    'lib/client/templates/new_post_title.js',
    'lib/client/templates/new_post_info.html',
    'lib/client/templates/new_post_info.js',
    'lib/client/templates/new_post_author.html',
    'lib/client/templates/new_submit_button.html',
    'lib/client/about.js',
    'lib/client/plexus.js',
    'lib/client/cocreators.js',
    'lib/client/templates/co-creators.js',
    'lib/client/templates/co-creators_link.html'
  ], ['client']);

  api.add_files([
    'lib/server/usercount.js'
    ], ['server']);

});