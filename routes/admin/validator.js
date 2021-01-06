const { check } = require('express-validator');
const usersRepo = require('../../repository/users');

module.exports = {
    requireTitle: check('title')
    .trim()
    .isLength({min: 4, max: 20 })
    .withMessage('Must be between 4 and 20 characters'),

    requirePrice: check('price')
    .trim()
    .toFloat()
    .isFloat({ min: 1 })
    .withMessage('Value must be minimum of N1'),

    requireEmail:  check('email')
    .isEmail()
    .withMessage("Must be a valid Email")
    .normalizeEmail()
    .trim()
    .custom(async (email) =>{
        const existingUser = await usersRepo.getOneBy({ email });
        if(existingUser){
           throw new Error('Email in use');
        }
   
    
    }),

    requirePassword:  check('password')
    .trim()
    .isLength({min: 4, max: 10})
    .withMessage('Password is invalid'),

    // requirePasswordConfirmation: check('passwordConfirmation')
    // .trim()
    // .isLength({min: 4, max: 10})
    // .withMessage('Invalid Password')
    // .custom((passwordConfirmation, { req })=>{
    //     if(passwordConfirmation !== req.body.password){
    //         throw new Error('Password must Match');
    // }})
    requirePasswordConfirmation:  check('passwordConfirmation')
    .trim()
    .isLength({min: 4, max: 10})
    .withMessage('Password Confirmation is invalid'),

    requireEmailExists:  check('email')
    .isEmail()
    .withMessage("Must be a valid Email")
    .normalizeEmail()
    .trim()
    .custom(async (email) =>{
        const user = await usersRepo.getOneBy({ email });
        if(!user){
           throw new Error('Email not found');
        }
   
    
    }),

    requireValidPassword:  check('password')
    .trim()
    .custom(async (password, { req }) =>{
        
        const user = await usersRepo.getOneBy({ email: req.body.email });
        if(!user){
           throw new Error('Invalid Password');
        }

        const validPassword = await usersRepo.comparePassword(user.password, password);
        if(!validPassword){
            throw new Error('Invalid Password');
        }
   
    
    })

}