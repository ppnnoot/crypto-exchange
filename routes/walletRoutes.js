const express = require('express');
const { getUserWallets } = require('../controllers/walletController');
const router = express.Router();

router.get('/wallets/:userId', getUserWallets);

module.exports = router;
