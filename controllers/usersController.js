// exports.usersListGet = (req, res) => {
//     res.render('index' , {
//         title: 'User list',
//     });
// }

// exports.usersCreateGet = (req, res) => {
//     res.render('new' , {
//         title: 'Create user',
//     });
// }

// exports.usersCreatePost = (req, res) => {

//     console.log('username to be saved: ', req.body.username)
//     res.redirect('/');
// }

const db = require("../db/queries");

async function getUsernames(req, res) {
    try {
        const search = req.query.search;
        const usernames = await db.getAllUsernames(search);

        res.render("index", {
            title: "User list",
            users: usernames
        })
    } catch (err) {
        console.error("Error usin getUsernames:", err);
        res.status(500).send("Error loadig users")
    }

}

async function createUsernameGet(req, res) {
    res.render("new", {
        title: "Create user",
    })
}

async function createUsernamePost(req, res) {
    try {

        const { username } = req.body;
        await db.insertUsername(username);
        res.redirect("/");
    }catch (err){
        console.error('Error createUsernamePost', err);
        res.status(500).send("Error storing user")
    }
}

async function deleteAllUsersGet(req,res){
    await db.deleteAllUsers();
    res.redirect('/');
}

module.exports = {
    getUsernames,
    createUsernameGet,
    createUsernamePost,
    deleteAllUsersGet,

};
