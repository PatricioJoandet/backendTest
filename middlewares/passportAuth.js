import { congif } from "../config/index.js";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { UserDao } from "../dao/index.js";
import { BCRYPT_VALIDATION } from "../utils/bcrypt.js";

const init = () => {

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    const user = await UserDao.getById(id);
    done(null, user);
  });

  passport.use('login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  }, async (req, email, password, done) => {
    try{
      UserDao.getOne({ email }, (error, user) => {
        if(error) return done(null, false)
        if(!user || !BCRYPT_VALIDATION.isValidPassword(user, password)) {
          console.log(`Invalid Login or password 🤨`);
          return done(null, false);
        }
        return done(null, user);
      })
      
      const newUser = {
        email: req.body.email,
        password: BCRYPT_VALIDATION.hashPassword(password),
      }

      UserDao.save(newUser, (error, newUser) => {
        if (error) {
          console.log(`Error: ${error} 😒`);
          return done(null, false);
        }
        console.log(`You've been signed up successfully, ${newUser} 🤠`);
        return done(null, true);
      })

    }catch(error){
      console.log(`Error in passportAuth`)
      done(error);
    }
  }
  ))
};


export const PassportAuth = {
  init,
}