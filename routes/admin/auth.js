const router = require('express').Router();
const { validationResult } = require('express-validator');

const usersRepo = require('../../repository/users');
const { requireEmail, 
    requirePassword, 
    requirePasswordConfirmation,
    requireEmailExists,
    requireValidPassword
    } = require('./validator');
const signUpTemplate = require('../../views/auth/signup');
const signInTemplate = require('../../views/auth/signin');
const {handleErrors} = require('./middlewares');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

//const router = express.Router();


router.get('/signup', (req, res)=>{
    const errors = {};
    res.send(signUpTemplate({ req, errors }));
   });
   

   router.get('/signin',  (req, res)=>{
       res.send(signInTemplate({}));
    
      });

   
   router.post('/signup', upload.single(), [requireEmail, requirePassword, requirePasswordConfirmation], handleErrors(signUpTemplate),
   async (req, res)=>{
  
        const { email, password } = req.body;
       const user = await usersRepo.createUser({email, password})
       req.session.userId = user.id;
       
       res.redirect('/admin/products');
      
   });
   
       router.post('/signin', upload.single(), [requireEmailExists, requireValidPassword], handleErrors(signInTemplate), async (req, res)=>{
   
        const { email } = req.body;
           const existingUser = await usersRepo.getOneBy({ email });
           req.session.userId = existingUser.id;
           res.redirect('/admin/products');
     
       
     
   });
   
   router.get('/signout', (req, res)=>{
    req.session = null;
    res.send('You are signed out');
   });


   module.exports = router;