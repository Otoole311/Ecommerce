let mongoose = require('mongoose');

const Category = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    SubCategories:[{
        type: mongoose.Schema.Types.ObjectId, ref:'SubCategories'
    }],
},{
    timestamps: true
});

module.exports = mongoose.model('Category',Category);