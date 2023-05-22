const logger = require("../config/logger");

const loggerMiddleware = (req, res, next) => {
    logger.info(`Request Method=${req.method} URL=${req.path} User-Agent=${req.get('User-Agent')}`)
    const start = Date.now();
    next();
    const end = Date.now();
    logger.info(`Response Duration=${(end-start)/1000}s StatusCode=${res.statusCode} Method=${req.method} URL=${req.url} Size=${res.get('Content-Length')} `)
}

module.exports = loggerMiddleware;