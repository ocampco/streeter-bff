const { flatMap } = require('lodash');

const listing = item => ({
  id: item.AuctionID,
  title: item.Title,
  url: item.AuctionItemUrl,
  img: item.Image,
  price: item.CurrentPrice,
});

exports.transform = json => {
  const count = json.ResultSet['@attributes'].totalResultsAvailable;
  const listings = json.ResultSet.Result.Item;
  
  return ({
    count: count,
    listings: listings
  });
};
