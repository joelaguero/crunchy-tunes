var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var googleConfig = require(__dirname + '/config/googleplus.js');
var User = require(__dirname + '/user/userModel.js');

passport.serializeUser(function(user, done) {
  done(null, user);
});

// Determines what user data should be retrieved from the session
passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: googleConfig['CLIENT_ID'],
    clientSecret: googleConfig['CLIENT_SECRET'],
    callbackURL: "http://localhost:8080/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate(
      {
        where: { 
          googleUserId: profile.id
        },
        defaults: {
          firstName: profile.name.givenName,
          lastName: profile.name.familyName
        }
      }
    )
    .spread(function(user, created) {
      return cb(null, profile);
    });
  }
));

module.exports = passport;