const router = require('express').Router();
// const producsRepo = require('../repository/productsrepo');
const servicesTemplate = require('../views/products/services');
const aboutTemplate = require('../views/products/about');
const contactTemplate = require('../views/products/contact');


router.get('/about', (req, res)=>{
    //const products = await producsRepo.getAll();
    res.send(aboutTemplate());
});

router.get('/services', (req, res)=>{
    //const products = await producsRepo.getAll();
    res.send(servicesTemplate());
});

router.get('/contact', (req, res)=>{
    //const products = await producsRepo.getAll();
    res.send(contactTemplate());
});

module.exports = router;