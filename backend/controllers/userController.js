const User = require('../models/User');
const asyncHandler = require('../utils/asyncHandler');

exports.getAllUsers = asyncHandler(async (req, res, next) => {
    const users = await User.find({});

    res.status(200).json({
        status: 'success',
        data: {
            users,
        }
    });
});