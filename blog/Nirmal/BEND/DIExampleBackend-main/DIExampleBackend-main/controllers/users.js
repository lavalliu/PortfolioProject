const User= require('../models/users');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.login= async (req,res) => {
    username= req.body.username;
    password= req.body.password;

    //verify username and password
    user= await User.findOne({username: username});
    if (user){
        const match= await bcrypt.compare(password, user.password);
        if (match){
            //upate the token
            token_data= user.password+Date.now();
            token= await bcrypt.hash(token_data, saltRounds);
            await User.findOneAndUpdate({username: username}, {token: token});
            user.token=token;
            return ({message: 'User logged in', user: user});
        } else {
            return ({message: 'Incorrect password'});
        }
    }else{
        return ({message: 'User not found'});
    
    }
}

exports.register= async (req,res) => {
    hashedPassword= await bcrypt.hash(req.body.password, saltRounds);
    token_data= req.body.password+Date.now();
    token= await bcrypt.hash(token_data, saltRounds);

    data={
        username: req.body.username,
        password: hashedPassword,
        token: token
    }
    newUser= new User(data);
    newUser.save()
    return ({message: 'User registered', user: newUser});
}


