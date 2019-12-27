var Users = require('../models/users');

exports.registration = function (req, res) {

  var user = new Users(
    {
       first_name: req.body.first_name,
       last_name: req.body.last_name,
       email: req.body.email,
       password: req.body.password
    }
);

user.save(function (err) {
    if (err) {
        return next(err);
    }
    res.send('User Registered Successfully')
})

};
