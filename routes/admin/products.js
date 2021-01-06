const router = require('express').Router();
const productsRepo = require('../../repository/productsrepo');
const newProductTemplate = require('../../views/auth/products/new');
const { requireTitle, requirePrice } = require('./validator');
const { validationResult } = require('express-validator');
const multer  = require('multer');
const upload = multer({ storage: multer.memoryStorage() });
const {handleErrors, requireAuth} = require('./middlewares');
const productsList = require('../../views/auth/products/index');
const productEditTemplate = require('../../views/auth/products/edit');





router.get('/admin/products', requireAuth, async (req, res)=>{
   
    const products = await productsRepo.getAll();
    res.send(productsList({products}));

   });

router.get('/admin/products/new', requireAuth, (req, res)=>{
    
    res.send(newProductTemplate({}));
   });

   router.post('/admin/products/new', requireAuth, upload.array('image', 4), 
   [requireTitle, requirePrice], handleErrors(newProductTemplate), async (req, res)=>{
       //const errors = validationResult(req);
    //    req.on('data', data=>{
    //        console.log(data.toString());
    //    })
    //const mainImage = req.files[0];
  //console.log(req.files);
   const allImages = req.files.map((image)=>{
      return image.buffer.toString('base64');
   })

   console.log(allImages);
  
    const image = req.files[0].buffer.toString('base64');
       // console.log(req.body);
        // if(!errors.isEmpty()){
        //     return res.send(newProductTemplate({errors}));
        // }

        const { title, price } = req.body;
       const product = await productsRepo.create({title, price, image, allImages});
      // req.session.userId = user.id;
       
        

       res.redirect('/admin/products');
   
   });

   router.get('/admin/products/:id/edit', requireAuth, async (req, res)=>{
    const product = await productsRepo.getOne(req.params.id)   
   // return console.log(req.params.id);
   if(!product){
       return res.send('Product not found');
   }

   res.send(productEditTemplate({product}));
   });

   router.post('/admin/products/:id/edit', requireAuth, 
   upload.single('image'), [requireTitle, requirePrice], 
   handleErrors(productEditTemplate, async req =>{
       const product =  await productsRepo.getOne(req.params.id);
     
           return  { product };
     
   }), async (req, res)=>{
    const changes = req.body;
       if(req.file){
       changes.image = req.file.buffer.toString('base64');
       
       }
    //const errors = validationResult(req);
 //    req.on('data', data=>{
 //        console.log(data.toString());
 //    })
 
    // console.log(req.body);
     // if(!errors.isEmpty()){
     //     return res.send(newProductTemplate({errors}));
     // }

    try{
    await productsRepo.updateRecord(req.params.id, changes);
    }catch(err){
        return res.send('Item not found')
    }
   // req.session.userId = user.id;
    
     

    res.redirect('/admin/products');

});

router.post('/admin/products/:id/delete', requireAuth, async (req, res)=>{

    await productsRepo.deleteRecord(req.params.id);
    res.redirect('/admin/products');
})



module.exports = router;