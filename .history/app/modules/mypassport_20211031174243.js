
const LocalStrategy = require('passport-local').Strategy;
const passport = require("passport");
passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    db.query("select * from users where id=?", [id], (err, result) => {
      done(err, user);
    });
  });
passport.use(new LocalStrategy(
    function (username, password, done) {
        db.query("select * from users where username=?", [username], (err, result) => {
            if (err) { return done(err, false); }
            if (!result || !result.length > 0) { return done(null, false); }
            bcrypt.compare(password, result[0].password).then((match) => {
                if(match){
                    return done(null, user);
                }else{
                    return done(null, false);    
                }
                
            }, () => {
                return done(null, false);
            });
        })
    }
));