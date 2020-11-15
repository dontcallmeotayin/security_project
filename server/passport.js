const passportJWT = require("passport-jwt"),
      JWTStrategy = passportJWT.Strategy,
      ExtractJWT  = passportJWT.ExtractJwt
      UserModel = require('./db/table/user')


const passport = require('passport')
        , LocalStrategy = require('passport-local').Strategy
passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    }, 
    (username, password, cb) => {        
     //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT  

     return UserModel.findOne({username})
           .then(user => {
               if (user) {
                    const isCorrect = bcrypt.compareSync(password, user.password)
                    if(isCorrect){
                        return cb(null, user, {message: 'Logged In Successfully'})
                    }
                    else{
                        return cb(null, false, {message: 'Incorrect username or password.'})
                    }
               }
               else{
                   return cb(null, false, {message: 'Incorrect username or password.'})
               }               
          })
          .catch(err => cb(err))
    }
));

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey   : 'your_jwt_secret'
},
(jwtPayload, cb) => {
 //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
    
return UserModel.findOne(jwtPayload.id)
     .then(user => {
         return cb(null, user);
     })
     .catch(err => {
         return cb(err);
     });
}
));