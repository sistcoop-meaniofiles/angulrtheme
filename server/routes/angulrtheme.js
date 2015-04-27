'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Angulrtheme, app, auth, database) {

  app.get('/angulrtheme.js/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/angulrtheme.js/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/angulrtheme.js/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/angulrtheme.js/example/render', function(req, res, next) {
    Angulrtheme.render('index', {
      package: 'angulrtheme.js'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
