
const LocalStrategy = require('passport-local').Strategy;
const passport = require("passport");
const db = require("./db");
const bcrypt = require("bcrypt");

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    console.log("deserializign user",id)
    db.query("select * from users where id=?", [id], (err, result) => {
        done(err, result[0]);
    });
});

passport.use(new LocalStrategy(
    function (username, password, done) {
        db.query("select * from users where username=?", [username], (err, result) => {
            if (err) { return done(err, false); }
            if (!result || !result.length > 0) { return done(null, false); }
            let user = result[0];
            bcrypt.compare(password, user.password).then((match) => {
                if (match) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }

            }, () => {
                return done(null, false);
            });
        })
    }
));

module.exports = passport;