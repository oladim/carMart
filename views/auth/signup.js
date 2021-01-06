const layout = require('../layout');
const {getError} = require('../helper');





module.exports = ({ req, errors }) => {
    return layout({
      content: `
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-one-quarter">
              <form method="POST" enctype="multipart/form-data">
                <h1 class="title">Sign Up</h1>
                <div class="field">
                  <label class="label">Email</label>
                  <input required class="input" placeholder="Email" name="email" />
                  <p class="help is-danger">${getError(errors, 'email')}</p>
                </div>
                <div class="field">
                  <label class="label">Password</label>
                  <input required class="input" placeholder="Password" name="password" type="password" />
                  <p class="help is-danger">${getError(errors, 'password')}</p>
                </div>
                <div class="field">
                  <label class="label">Password Confirmation</label>
                  <input required class="input" placeholder="Password Confirmation" name="passwordConfirmation" type="password" />
                  <p class="help is-danger">${getError(
                    errors,
                    'passwordConfirmation'
                  )}</p>
                </div>
                <button class="button is-primary">Submit</button>
              </form>
              <a href="/signin">Have an account? Sign In</a>
            </div>
          </div>
        </div>
      `
    });
  };
  


// module.exports = ({ req, errors })=>{
//     return layout({ content: `
//     Your id is: ${req.session.userId}
//     <div>
//        <h1>Welcome to AishaStore Login Page</h1>
//     </div>
//        <div>
//            <form method="POST">
//                <input name="email" placeholder="email"/>
//                ${getError(errors, 'email')}
//                <input name="password" placeholder="password"/>
//                ${getError(errors, 'password')}
//                <input name="passwordConfirmation" placeholder="password confirmation"/>
//                ${getError(errors, 'passwordConfirmation')}
//                <button>Sign Up</button>
//            </form>
//        </div>
//     `})
// }