'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Angulrtheme, app, auth, database) {

  app.get('/angulrtheme/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/angulrtheme/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/angulrtheme/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/angulrtheme/example/render', function(req, res, next) {
    Angulrtheme.render('index', {
      package: 'angulrtheme'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
