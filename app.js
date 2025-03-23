const express = require('express');
const userRoutes = require('./routes/userRoutes');
const walletRoutes = require('./routes/walletRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', walletRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
