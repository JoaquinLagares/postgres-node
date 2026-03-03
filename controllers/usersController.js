exports.usersListGet = (req, res) => {
    res.render('index' , {
        title: 'User list',
    });
}

exports.usersCreateGet = (req, res) => {
    res.render('new' , {
        title: 'Create user',
    });
}

exports.usersCreatePost = (req, res) => {
    
    console.log('username to be saved: ', req.body.username)
    res.redirect('/');
}

