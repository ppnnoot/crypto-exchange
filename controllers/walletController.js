const Wallet = require('../models/Wallet');

exports.getUserWallets = async (req, res) => {
    try {
        const wallets = await Wallet.findAll({ where: { userId: req.params.userId } });
        res.json(wallets);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching wallets' });
    }
};
