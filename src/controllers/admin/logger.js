"use strict";
const loggerController = {
    get(req, res) {
        res.render('admin/development/logger', {});
    },
};
module.exports = loggerController;
