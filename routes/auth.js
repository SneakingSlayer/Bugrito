const router = require("express").Router();
const User = require('../models/User')
const Cart = require('../models/Cart')
const Product = require('../models/Products')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { isValidObjectId } = require("mongoose");


///Register User
router.post('/register', async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req.body.password, salt)
    const checkEmail = await User.findOne({email: req.body.email});
    if(checkEmail) return res.status(400).send("Email already exists");
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthdate: req.body.birthdate, 
        email: req.body.email,
        password: hashPass
    });
    try{
        const savedUser = await user.save();
        res.send(savedUser);
    }catch(err){
        res.status(400).send(err);
    }
});


//Login user
router.post('/login', async (req, res) => {

    const checkEmail = await User.findOne({email: req.body.email});

    if(!checkEmail) return res.status(400).send("Incorrect Email or Password");

    const checkPass = await bcrypt.compare(req.body.password, checkEmail.password);

    if(!checkPass) return res.status(400).send("Incorrect Email or Password");

   
   const token = jwt.sign({_id: checkEmail._id}, process.env.TOKEN_SECRET)
   res.header('auth-token', token).send({
       token: token,
       id: checkEmail._id
   });
   
});

//Add To Cart
router.post('/cart', verifyToken, async (req, res) => {
    
    const cart = new Cart({
        userID: req.body.userID,
        itemName: req.body.itemName,
        itemQty: req.body.itemQty,
        itemPrice: req.body.itemPrice,
        itemTprice: req.body.itemTprice,
        thumb: req.body.thumb,
        prodno: req.body.prodno
    });

    const filter = {
        userID: req.body.userID,
        prodno: req.body.prodno
    }

    const checkProd = await Cart.findOne(filter)

    

    if(checkProd){
        const newQty = {$set: { itemQty: (parseInt(checkProd.itemQty) + parseInt(req.body.itemQty)).toString()}} 
        const updateProd = await Cart.updateOne(filter, newQty, function(err, res){
            if(err){
                console.log(err)
            }
            else{
                console.log(res)
            }
        }  )
    
    }

    else{
        try{
            const savedCart = await cart.save();
            res.send(savedCart);
        }
        catch(err){
            res.status(400).send(err);
        }
    }
    
    /**try{
        const savedCart = await cart.save();
        res.send(savedCart);
    }catch(err){
        res.status(400).send(err);
    }*/
});


//Delete from cart
router.post('/removeItem', verifyToken, async (req, res, next) =>{
    
    const token = req.headers['auth-token'];
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
    const userId = decoded._id
    const item = {
        _id: req.body._id, 
        userID: userId
    }
    const deleteItem = await Cart.deleteOne(item);
    if(deleteItem.deletedCount === 1 ){
       // res.status(200).send('Deleted Successfully!')
      res.status(200).send("Ok")

    }
    else{
      //  res.status(400).send('No matching records')
      res.status(404).send("Not OK")
    }

});


//Get cart items
router.get('/cartItems', verifyToken, async (req, res, next) =>{
    
    const bearerHeader = req.headers['auth-token'];

    const decoded = jwt.verify(bearerHeader, process.env.TOKEN_SECRET);
    const userId = decoded._id
    const checkUserItem = await Cart.find({userID: userId})
    res.status(200).send(checkUserItem)
   // console.log(userId)

    //console.log(checkUserItem)
})


//Get all products 

router.get('/allProducts', async (req, res, next) => {


    const getProduct = await Product.find()
    res.status(200).send(getProduct)
})


router.post('/logout', (req, res, next) => {
    
});







//Middleware

function verifyToken(req, res, next){
   const bearerHeader = req.headers['auth-token'];
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader;
        jwt.verify(bearer, process.env.TOKEN_SECRET, (err, ver) => {
            if(err){
                console.log(err.message)
                res.status(403).send(err.message)
                next()
            }
            else{
                next()
            }
        })
    }
    else{
        res.sendStatus(403)
    }
}


module.exports = router;