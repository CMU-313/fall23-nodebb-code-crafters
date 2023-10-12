// eslint-disable-next-line
const nconf = require('nconf');
// eslint-disable-next-line
const db = require('../database');

// eslint-disable-next-line
module.exports.ping = async function (req, res, next) {
    try {
        // eslint-disable-next-line
        await db.getObject('config');
        // eslint-disable-next-line
        res.status(200).send(req.path === `${nconf.get('relative_path')}/sping` ? 'healthy' : '200');
    } catch (err) {
        // eslint-disable-next-line
        next(err);
    }
};
