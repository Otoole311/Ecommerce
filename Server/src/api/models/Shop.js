let mongoose = require('mongoose');

/**
 * Shop model schema
 */
const Shop = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    /* owner:{
        type: mongoose.Schema.Types.ObjectId, ref: 'Owner',
        required: true
    } */
},{
    timestamps: true
});

/**
 * Defining foreign key references
 */
Shop.virtual('Categories',{
    ref: 'Category',
    localField: '_id',
    foreignField: 'shop_id'
});

//set Object and json property to true. default is set to false
Shop.set('toObject',{virtuals: true});
Shop.set('toJSON',{virtuals: true});

module.exports = mongoose.model('Shop',Shop);