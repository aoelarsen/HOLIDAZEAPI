exports.handler = function (event, contact, callback) {
  callback(null, {
    statusCode: 200,
    body: 'Hello from test 1',
  });
};
