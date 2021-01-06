exports.myMiddleware = (req, res, next) => {
    req.name = 'Alton';
    res.cookie('name','Alton is the best', {maxAge: 9000000});
    next();
}

exports.homePage = (req, res) => {
    console.log(req.name)
    res.render('index')
}