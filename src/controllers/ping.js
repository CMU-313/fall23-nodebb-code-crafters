var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// eslint-disable-next-line
const nconf = require('nconf');
// eslint-disable-next-line
const db = require('../database');
// eslint-disable-next-line
module.exports.ping = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // eslint-disable-next-line
            yield db.getObject('config');
            // eslint-disable-next-line
            res.status(200).send(req.path === `${nconf.get('relative_path')}/sping` ? 'healthy' : '200');
        }
        catch (err) {
            // eslint-disable-next-line
            next(err);
        }
    });
};
