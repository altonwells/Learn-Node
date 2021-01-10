const mongoose = require('mongoose');
const Store = mongoose.model('Store');


exports.homePage = (req, res) => {
    res.render('index');
};

exports.addStore = async (req, res) => {
   await  res.render('editStore', {
        title: "Add Store"
    });
}

exports.createStore = async (req, res) => {
    const store = await (new Store(req.body)).save();
    req.flash('success',`${store.name}...You've successfully passed something to a database...it's not that impressive...'`)
    res.redirect(`/store/${store.slug}`);
};

exports.getStores = async (req, res) => {
    const stores =  await Store.find();
    res.render('stores', {title: 'Stores', stores});
};

exports.editStore = async (req, res) => {
    const store = await Store.findOne({_id: req.params.id});
    res.render('editStore',{
        title: store.name,
        store
    })

};

exports.updateStore = async (req, res) => {
    const store = await Store.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true, // return the new store instead of the old one
        runValidators: true
      }).exec();
      req.flash('success', `Successfully updated <strong>${store.name}</strong>. <a href="/stores/${store.slug}">View Store →</a>`);
      res.redirect(`/stores/${store._id}/edit`);
}


