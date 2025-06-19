const express = require('express');

const authRoutes = require('./src/routes/authRoutes');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;


app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRoutes);
app.get('/', (req, res) => {
    res.send('Hello, World!');
    });



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});