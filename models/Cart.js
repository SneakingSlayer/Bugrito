const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userID:{
        type: String,
        required: true
    },
    itemName:{
        type: String,
        required: true
    },
    itemQty:{
        type: String,
        required: true
    },
    itemPrice:{
        type: String,
        required: true
    },

    itemTprice: {
        type: String,
        required: true
    },

    thumb:{
         type: String,
         required: true
     },
     prodno:{
         type: String
     }

     /**
     
     */
});

module.exports = mongoose.model('Cart', cartSchema);