const router = require('express').Router();
//const producsRepo = require('../repository/productsrepo');
//const productIndexTemplate = require('../views/productss/index');
const cartsRepo = require('../repository/cart');
const cartViewTemplate = require('../views/carts/index');
const productsRepo = require('../repository/productsrepo');
//const productDetail = require('../views/productss/detail');

router.get('/product/:id/details', async (req, res)=>{
    console.log(req.params.id);
    const product = await productsRepo.getOne(req.params.id)   
   // return console.log(req.params.id);
   if(!product){
       return res.redirect('/');
   }
    res.send(productDetail({product}));
})

router.post('/cart/products', async (req, res)=>{
    
    console.log(req.body);
let cart;
    //Figure out the cart if user has one
    if(!req.session.cartId){
        //we dont have a cart, we need to create one
        //and store the cartId in the req.session.cartId property
         cart = await cartsRepo.create({items: []});
        req.session.cartId = cart.id;
    } else{
        //we have a cart and lets get it from the repository
         cart = await cartsRepo.getOne(req.session.cartId)
    }

    //console.log(cart);
    //Either uncrement quantity for existing product
    //oR add new produt to items array

    const existingItem = cart.items.find(item => item.id === req.body.productId);
    if(existingItem){
        //increment quantity and save cart
        existingItem.quantity++;
    }else{
        cart.items.push({id: req.body.productId, quantity: 1})
    }
    await cartsRepo.updateRecord(cart.id, {
        items: cart.items
    })
    
    //console.log(cart);
   res.redirect('/cart');
})

router.get('/cart', async (req, res)=>{
    if(!req.session.cartId){
     
    return res.redirect('/');
    }
   else{
    const cart = await cartsRepo.getOne(req.session.cartId);
    for(let item of cart.items){
        const product = await productsRepo.getOne(item.id);
        item.product = product;
       // console.log(cart.items);
    }

  
    res.send(cartViewTemplate({items: cart.items}));
   }

});

router.post('/cart/products/delete', async (req, res)=>{
    const cart = await cartsRepo.getOne(req.session.cartId);
   const { itemId } = req.body;
   const items = cart.items.filter(item => item.id !== itemId);
   await cartsRepo.updateRecord(req.session.cartId, {items});
   res.redirect('/cart');
    //console.log(cart, itemToDelete)

})

module.exports = router;