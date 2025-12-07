const userModel = require('../models/user.model');
const foodpartnerModel = require('../models/foodpartner.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function registerUser(req, res) {

    console.log(req.body);
    const { fullName, email, password } = req.body;

    const isUserAlreadyExists = await userModel.findOne({
        email
    });
    
    if (isUserAlreadyExists) {
        return res.status(400).json({
            message: "User already exists"
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        fullName,
        email,
        password: hashedPassword
    });

    const token = jwt.sign({
        id: user._id,
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).json({
        message: "User registered successfully",
        user: {
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
        }
    })

}

async function loginUser(req, res) { 

    const { email, password } = req.body;

    const user = await userModel.findOne({ 
        email
    })

    if (!user) {
        return res.status(400).json({
            message: "Wrong Email or password"
        });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid) {
        return res.status(400).json({
            message: "Wrong Email or password"
        });
    }

    const token =jwt.sign({
        id: user._id,
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(200).json({
        message: "User logged in successfully",
        user: {
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
        }
    })

}

function logoutUser(req, res) { 

    res.clearCookie("token");

    res.status(200).json({
        message: "User logged out successfully",
    })
}

async function registerFoodpartner(req, res) {

    const { fullName, contact, restaurantName, email, password } = req.body;

    const isFoodpartnerAlreadyExists = await foodpartnerModel.findOne({
        email
    });

    if(isFoodpartnerAlreadyExists) {
        return res.status(400).json({
            message: "Food Partner already exists"
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const foodpartner = await foodpartnerModel.create({
        fullName,
        email,
        password: hashedPassword,
        contact,
        restaurantName
    });

    const token =jwt.sign({
        id: foodpartner._id,
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).json({
        message: "Food Partner registered successfully",
        foodpartner: {
            _id: foodpartner._id,
            fullName: foodpartner.fullName,
            email: foodpartner.email,
            contact: foodpartner.contact,
            restaurantName: foodpartner.restaurantName
        }
    })


}

async function loginFoodpartner(req, res) {

    const { email, password } = req.body;

    const foodpartner = await foodpartnerModel.findOne({
        email
    })

    if(!foodpartner) {
        return res.status(400).json({
            message: "Wrong Email or password"
        });
    }

    const isPasswordValid = await bcrypt.compare(password, foodpartner.password);

    if(!isPasswordValid) {
        return res.status(400).json({
            message: "Wrong Email or password"
        });
    }

    const token =jwt.sign({
        id: foodpartner._id,
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(200).json({
        message: "Food Partner logged in successfully",
        foodpartner: {
            _id: foodpartner._id,
            fullName: foodpartner.fullName,
            email: foodpartner.email,
        }
    })
}

function logoutFoodpartner(req, res) { 

    res.clearCookie("token");

    res.status(200).json({
        message: "Food Partner logged out successfully",
    })
}


module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    registerFoodpartner,
    loginFoodpartner,
    logoutFoodpartner
}