const { products } = require('../assets/fixtures');

module.exports.handler = async () => {
  return {
    statusCode: 200,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(products)
  };
};
