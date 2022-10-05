const { transpileSQSSToCSS } = require('@dthung1602/sqss');

module.exports = function (source) {
    return transpileSQSSToCSS(source);
};
