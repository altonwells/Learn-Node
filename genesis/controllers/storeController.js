const mongoose = require('mongoose');
const Store = mongoose.model('Store');


exports.homePage = (req, res) => {
    console.log(req.name);
    req.flash('error', 'Jee willikers Batman');
    req.flash('info', 'Jee willikers Batman');
    req.flash('warning', 'Jee willikers Batman');
    req.flash('success', 'Jee willikers Batman');
    res.render('index');
};

exports.addStore = (req, res) => {
    res.render('editStore', {
        title: "Add Store"
    });
}

exports.createStore = async (req, res) => {
    const store = new Store(req.body);
    await store.save();
    req.flash('success',`You've successfully passed something to a database...it's not that impressive...' ${store.name} Just leave us a review.`)
    res.redirect('/');
};