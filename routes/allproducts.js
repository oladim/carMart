const router = require('express').Router();
const producsRepo = require('../repository/productsrepo');
const productIndexTemplate = require('../views/products/index');


router.get('/', async (req, res)=>{
    const products = await producsRepo.getAll();
    res.send(productIndexTemplate({products}));
})

module.exports = router;