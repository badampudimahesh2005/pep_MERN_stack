
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your_jwt_secret_key_here';

const  login = async (req, res) => {
    try{
        const { username, password, email } = req.body;

        if(username === 'admin' && password === 'password') {

            const userDetails = {
                username: 'admin',
                email: email
            };
            const token = jwt.sign(userDetails, JWT_SECRET, { expiresIn: '1h' });
            res.cookie('token', token, {
                httpOnly: true,
                secure: true, 
               domain: 'localhost',
               path: '/',
            });

            res.status(200).json({
                message: 'Login successful',
                userDetails: userDetails
            });
        }else{
            res.status(401).json({ message: 'Invalid username or password' });
        }

    }catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }

};

const logout = (req, res) => {
    try {
        res.clearCookie('token');
        res.status(200).json({ message: 'Logout successful' });
    }catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

module.exports = {
    login,
    logout
};

