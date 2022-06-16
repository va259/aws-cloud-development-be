const { products } = require('../assets/fixtures');

module.exports.handler = async (event) => {
  const productId = event.pathParameters.id;
  const product = products.find(product => 
    product.id === productId
  );

  let body;
  let statusCode;

  if (!product) {
    statusCode = 404
    body = 'Error: Product not found'
  } else {
    statusCode = 200;
    body = product;
  }

  return {
    statusCode,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body)
  };
};
