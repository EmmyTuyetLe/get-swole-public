const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const token = req.cookies.authToken;
    if (!token) return res.status(401).json({
        status: 'unauthorized',
        message: 'Access denied.'
    });

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
}