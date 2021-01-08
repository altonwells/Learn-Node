const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const slug = require('slugs');

const storeSchema = new mongoose.Schema({
    name: {
        type: String, 
        trim: true,
        required: 'You need a store name to continue!'
    },
    slug: String,
    description: {
        type: String, 
        trim: true
    },
    tags:[String]
});

storeSchema.pre('save', function(next) {
    if(!this.isModified('name')){
        next(); // skip
        return; // escapes the function
    }
    this.slug = slug(this.name);
    next();
    // Fix this later to check if the slug exists
});

module.exports = mongoose.model('Store', storeSchema)
