let mongoose = require('mongoose');

const SubCategory = new mongoose.Schema({
    name:{
        type: String,
        unique: true,
        required: true
    },

    products: [{
        type: mongoose.Schema.Types.ObjectId, ref:'Product'
    }],
},{
    timestamps: true
});

module.exports = mongoose.model('SubCategory',SubCategory);