var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.post('/', async function (req, res, next) {
    var UserObject = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email,
    });
    console.log(UserObject);
    try {
        const userSave = await UserObject.save();
        console.log(userSave);
        console.log("e-mail salvo: " + userSave.email);

        res.status(201).json({
            mysMsgSucesso: "user salvo com sucesso",
            objUserSave: userSave
        });
    }
    catch (err) {
        return res.status(500).json({
            myErrorTitle: "um erro aconteceu ao salvar um user",
            myError: err
        });
    }
});
module.exports = router;