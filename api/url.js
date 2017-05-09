const { api, appId, output } = require('./config');

module.exports = (type, query) => `${api}/${type}?${appId}&${output}&query=${query}`;
