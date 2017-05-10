exports.api = 'https://auctions.yahooapis.jp/AuctionWebService/V2';
exports.appId = 'appid=dj0zaiZpPWpNQ1A1dk8xTXk0TyZzPWNvbnN1bWVyc2VjcmV0Jng9OTE-';
exports.output = 'output=json';
exports.callback = 'yj-4s244';

const whitelist = ['https://streeter-ui.herokuapp.com', 'http://localhost:3000'];
exports.origin = { origin: whitelist };
