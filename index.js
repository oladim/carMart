const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const usersRepo = require('./repository/users');
const authRouter = require('./routes/admin/auth');
const adminProductRouter = require('./routes/admin/products');
const allProductsRouter = require('./routes/allproducts');
const cartRouter = require('./routes/carts');
const allPages = require('./routes/pages');


const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieSession({
    keys: ['jksdahjksdhajklghsdjlkgjkahgjklhdsalgjhl'], httpOnly: true
}));

app.use(authRouter);
app.use(adminProductRouter);
app.use(allProductsRouter);
app.use(cartRouter);
app.use(allPages);



app.listen(3000, ()=>{
 console.log('Listening');
});
